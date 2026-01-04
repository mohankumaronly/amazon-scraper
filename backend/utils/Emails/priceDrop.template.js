const priceDropTemplate = ({ product, currentPrice }) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #e63946;">Price Drop Alert!</h2>

      <p><strong>${product.name}</strong></p>

      <p>
        <strong>Current Price:</strong>
        <span style="color: green;">₹${currentPrice}</span>
      </p>

      <p>
        <strong>Your Target Price:</strong>
        ₹${product.targetPrice}
      </p>

      <a
        href="https://www.amazon.in/dp/${product.asin}"
        style="
          display: inline-block;
          margin-top: 12px;
          padding: 10px 16px;
          background-color: #1d3557;
          color: #ffffff;
          text-decoration: none;
          border-radius: 5px;
        "
      >
        View Product
      </a>

      <p style="margin-top: 20px; font-size: 12px; color: #555;">
        You are receiving this email because you enabled price alerts.
      </p>
    </div>
  `;
};

module.exports = priceDropTemplate;
