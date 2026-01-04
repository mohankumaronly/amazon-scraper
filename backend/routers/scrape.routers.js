const express = require('express');
const { scrapeAmazonProduct } = require("../controllers/scrape.controller");
const protect = require("../middlewares/token.verification");
const { setTargetPrice, getMyProducts, deleteProduct, getPriceHistory, getTargetSuggestion } = require('../controllers/product.controller');
const { manualPriceCheck } = require('../controllers/cron.controller');


const scraperRouter = express.Router();
scraperRouter.post('/scraper', protect, scrapeAmazonProduct);
scraperRouter.patch('/products/:productId/target', protect, setTargetPrice);
scraperRouter.get('/products', protect, getMyProducts);
scraperRouter.post('/products/:productId', protect, deleteProduct);
scraperRouter.get('/products/:productId/price-history', protect, getPriceHistory);
scraperRouter.post('/cron/price-check', protect, manualPriceCheck);
scraperRouter.get('/products/:productId/target-suggestion', protect, getTargetSuggestion);

module.exports = scraperRouter;