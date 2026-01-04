const { runPriceCheck } = require("../services/runPriceCheck");

const manualPriceCheck = async (_, res) => {
    try {
        await runPriceCheck();
        res.json({
            success: true,
            message: "Manual price check executed",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Manual price check failed",
        });
    }
};


module.exports = {
    manualPriceCheck,
}