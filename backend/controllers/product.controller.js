const Product = require("../models/product.model");

const setTargetPrice = async (req, res) => {
    const { productId } = req.params;
    const { targetPrice } = req.body;
    const userId = req.user.userId;

    if (typeof targetPrice !== "number" || targetPrice <= 0) {
        return res.status(400).json({
            success: false,
            message: "Valid targetPrice is required",
        });
    }

    const product = await Product.findOne({
        _id: productId,
        userId,
    });

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    product.targetPrice = targetPrice;
    product.isNotified = false;
    await product.save();

    return res.status(200).json({
        success: true,
        message: "Target price updated",
        data: product,
    });
};

const getMyProducts = async (req, res) => {
    try {
        const userId = req.user.userId;

        const products = await Product.find({ userId })
            .sort({ createdAt: -1 })
            .select("-__v");

        return res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        console.error("Fetch products failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch products",
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user.userId;

        const product = await Product.findOneAndDelete({
            _id: productId,
            userId,
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found or not authorized",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product tracking deleted successfully",
        });
    } catch (error) {
        console.error("Delete product failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete product",
        });
    }
};

const getPriceHistory = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user.userId;

        const product = await Product.findOne(
            { _id: productId, userId },
            { priceHistory: 1, name: 1, asin: 1 }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found or unauthorized",
            });
        }

        const chartData = product.priceHistory.map(item => ({
            price: item.price,
            date: item.date,
        }));

        return res.status(200).json({
            success: true,
            product: {
                id: product._id,
                name: product.name,
                asin: product.asin,
            },
            data: chartData,
        });
    } catch (error) {
        console.error("Price history fetch failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch price history",
        });
    }
};

const getTargetSuggestion = async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.userId;

    const product = await Product.findOne(
        { _id: productId, userId },
        { priceHistory: 1, price: 1, name: 1 }
    );

    if (!product || product.priceHistory.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Not enough price history to suggest target",
        });
    }

    const prices = product.priceHistory.map(p => p.price);

    const lowest = Math.min(...prices);
    const average = prices.reduce((a, b) => a + b, 0) / prices.length;

    const suggestedTarget = Math.round(
        Math.min(lowest, average * 0.9)
    );

    return res.json({
        success: true,
        product: product.name,
        currentPrice: product.price,
        suggestions: {
            lowestEver: lowest,
            averagePrice: Math.round(average),
            smartTarget: suggestedTarget,
        },
    });
};



module.exports = {
    setTargetPrice,
    getMyProducts,
    deleteProduct,
    getPriceHistory,
    getTargetSuggestion,
}
