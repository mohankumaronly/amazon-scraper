const mongoose = require("mongoose");

const priceHistorySchema = new mongoose.Schema(
    {
        price: Number,
        date: { type: Date, default: Date.now },
    },
    { _id: false }
);

const productSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        asin: {
            type: String,
            required: true,
        },

        name: String,
        rating: String,
        reviewsCount: String,

        price: Number,
        priceHistory: [priceHistorySchema],

        stock: String,
        delivery: String,

        seller: String,
        returnPolicy: String,

        mainImage: String,
        images: [String],

        features: [String],
        specifications: Object,

        source: {
            type: String,
            default: "amazon",
        },

        targetPrice: {
            type: Number,
            default: null,
        },

        isNotified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

productSchema.index({ userId: 1, asin: 1 }, { unique: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
