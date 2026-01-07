const priceDropTemplate = ({ product, currentPrice }) => {
  // Calculate discount percentage for a better "Sales" feel
  const discount = Math.round(((product.targetPrice - currentPrice) / product.targetPrice) * 100);

  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff; border: 1px solid #f3f4f6; border-radius: 16px;">
      
      <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
        <tr>
          <td style="background-color: #f97316; width: 40px; height: 40px; border-radius: 8px; text-align: center; vertical-align: middle;">
            <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" width="20" height="20" style="display: block; margin: 0 auto; filter: brightness(0) invert(1);" alt="Search">
          </td>
          <td style="padding-left: 12px;">
            <span style="font-size: 22px; font-weight: 800; color: #111827; letter-spacing: -0.5px; font-family: sans-serif;">AmzFlow</span>
          </td>
        </tr>
      </table>

      <h2 style="color: #16a34a; font-size: 24px; font-weight: 700; margin-top: 0;">📉 Price Drop Alert!</h2>

      <p style="color: #4b5563; font-size: 16px; line-height: 24px;">
        Great news! A product you are tracking has dropped in price and hit your target.
      </p>

      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 24px 0;">
        <p style="margin-top: 0; color: #1e293b; font-weight: 700; font-size: 18px; line-height: 1.4;">
          ${product.name}
        </p>
        
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin-top: 16px;">
          <tr>
            <td style="width: 50%;">
              <span style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Current Price</span>
              <div style="color: #16a34a; font-size: 28px; font-weight: 800;">₹${currentPrice}</div>
            </td>
            <td style="width: 50%; border-left: 1px solid #cbd5e1; padding-left: 20px;">
              <span style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em;">Target Price</span>
              <div style="color: #1e293b; font-size: 28px; font-weight: 800;">₹${product.targetPrice}</div>
            </td>
          </tr>
        </table>
      </div>

      <div style="text-align: center; margin: 32px 0;">
        <a 
          href="https://www.amazon.in/dp/${product.asin}"
          style="
            background-color: #f97316;
            color: #ffffff;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 12px;
            display: inline-block;
            font-weight: 700;
            font-size: 16px;
            box-shadow: 0 4px 10px rgba(249, 115, 22, 0.25);
          "
        >
          Buy on Amazon
        </a>
      </div>

      <hr style="border: 0; border-top: 1px solid #f3f4f6; margin: 40px 0;" />

      <p style="font-size: 12px; color: #9ca3af; text-align: center; line-height: 18px;">
        You are receiving this because you enabled price alerts for ASIN: <strong>${product.asin}</strong>. 
        To stop receiving these, manage your alerts in your AmzFlow dashboard.
      </p>
      
      <p style="font-size: 12px; color: #d1d5db; margin-top: 20px; text-align: center;">
        &copy; 2026 AmzFlow Data Systems.
      </p>
    </div>
  `;
};

module.exports = priceDropTemplate;