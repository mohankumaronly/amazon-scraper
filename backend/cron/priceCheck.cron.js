require('dotenv').config();
const cron = require("node-cron");
const { runPriceCheck } = require('../services/runPriceCheck');


cron.schedule(process.env.PRICE_CHECK_CRON || "0 */6 * * *", async () => {
    console.log("Cron triggered");
    await runPriceCheck();
});
