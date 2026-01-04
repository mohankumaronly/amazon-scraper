const { chromium } = require("playwright");
const Product = require("../models/product.model");
const sendEmail = require("../utils/sendEmail");
const priceDropTemplate = require("../utils/Emails/priceDrop.template");

const runPriceCheck = async () => {
  console.log("Running price check manually");
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    locale: "en-IN",
  });

  try {
    const products = await Product.find({
      isNotified: false,
      targetPrice: { $ne: null },
    }).populate("userId");

    for (const product of products) {
      const url = `https://www.amazon.in/dp/${product.asin}`;

      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForSelector("#productTitle", { timeout: 15000 });

      const currentPrice = await page.evaluate(() => {
        const whole =
          document.querySelector(".a-price-whole")?.innerText.replace(/[^\d]/g, "") || "";
        const fraction =
          document.querySelector(".a-price-fraction")?.innerText.replace(/[^\d]/g, "") || "";
        return whole ? Number(fraction ? `${whole}.${fraction}` : whole) : null;
      });

      if (!currentPrice) continue;

      if (currentPrice <= product.targetPrice && !product.isNotified) {
        await sendEmail({
          to: product.userId.email,
          subject: "Price Drop Alert!",
          html: priceDropTemplate({ product, currentPrice }),
          text: `Price dropped to ₹${currentPrice}`,
        });

        product.isNotified = true;
      }

      await product.save();
    }
  } finally {
    await browser.close();
  }
};

module.exports = { runPriceCheck };
