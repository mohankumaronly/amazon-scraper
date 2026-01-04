const { chromium } = require("playwright");
const Product = require("../models/product.model");

const extractASIN = (url) => {
    const match = url.match(/\/dp\/([A-Z0-9]{10})|\/gp\/product\/([A-Z0-9]{10})/);
    return match ? match[1] || match[2] : null;
};

exports.scrapeAmazonProduct = async (req, res) => {
    const { url } = req.body;
    const userId = req.user.userId;

    if (!url || !url.includes("amazon.")) {
        return res.status(400).json({
            success: false,
            message: "Amazon product URL is required",
        });
    }

    const asin = extractASIN(url);
    if (!asin) {
        return res.status(400).json({
            success: false,
            message: "Invalid Amazon product URL",
        });
    }

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
        userAgent:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        locale: "en-IN",
    });

    try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
        await page.waitForSelector("#productTitle", { timeout: 20000 });

        const scraped = await page.evaluate(() => {
            const whole =
                document.querySelector(".a-price-whole")?.innerText.replace(/[^\d]/g, "") || "";
            const fraction =
                document.querySelector(".a-price-fraction")?.innerText.replace(/[^\d]/g, "") || "";

            return {
                name: document.querySelector("#productTitle")?.innerText.trim(),
                rating: document.querySelector(".a-icon-alt")?.innerText,
                reviewsCount: document.querySelector("#acrCustomerReviewText")?.innerText,
                price: whole ? Number(fraction ? `${whole}.${fraction}` : whole) : null,
                stock: document.querySelector("#availability span")?.innerText.trim(),
                delivery: document.querySelector("#mir-layout-DELIVERY_BLOCK span")?.innerText.trim(),
                seller: document.querySelector("#bylineInfo")?.innerText,
                mainImage: document.querySelector("#imgTagWrapperId img")?.src,
                images: Array.from(document.querySelectorAll("#altImages img"))
                    .map(img => img.src.replace(/_SS\d+_/, "_SL1500_"))
                    .filter(Boolean),
                features: Array.from(
                    document.querySelectorAll("#feature-bullets li span")
                ).map(el => el.innerText.trim()),
                specifications: Object.fromEntries(
                    Array.from(
                        document.querySelectorAll("#productDetails_techSpec_section_1 tr")
                    ).map(row => [
                        row.querySelector("th")?.innerText.trim(),
                        row.querySelector("td")?.innerText.trim(),
                    ])
                ),
                returnPolicy:
                    document.querySelector("#RETURNS_POLICY span")?.innerText,
            };
        });

        console.log(
            `SCRAPE RESULT | ASIN=${asin} | scrapedPrice=${scraped.price}`
        );


        ////

        const existing = await Product.findOne({ userId, asin });

        if (existing) {
            const lastPrice = existing.priceHistory.at(-1)?.price;

            if (lastPrice !== scraped.price) {
                existing.price = scraped.price;
                existing.priceHistory.push({ price: scraped.price });
            }

            await existing.save();

            return res.status(200).json({
                success: true,
                message: "Product updated",
                data: existing,
            });
        }

        const product = await Product.create({
            userId,
            asin,
            ...scraped,
            priceHistory: [{ price: scraped.price }],
        });

        return res.status(201).json({
            success: true,
            message: "Product tracked successfully",
            data: product,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Scraping failed",
        });
    } finally {
        await browser.close();
    }
};
