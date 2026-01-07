const verifyEmailTemplate = (verifyUrl) => `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
    
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

    <h2 style="color: #111827; font-size: 24px; font-weight: 700; margin-top: 0;">Verify your email address</h2>

    <p style="color: #4b5563; font-size: 16px; line-height: 24px;">Hello,</p>

    <p style="color: #4b5563; font-size: 16px; line-height: 24px;">
      Welcome to <strong>AmzFlow</strong>! We're excited to help you automate your data extraction. 
      Please confirm your email address to get started with your dashboard.
    </p>

    <div style="margin: 32px 0;">
      <a 
        href="${verifyUrl}"
        style="
          background-color: #f97316;
          color: #ffffff;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 12px;
          display: inline-block;
          font-weight: 700;
          font-size: 16px;
          box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.2);
        "
      >
        Verify Account
      </a>
    </div>

    <p style="color: #6b7280; font-size: 14px;">
      This verification link will expire in <strong>24 hours</strong>.
    </p>

    <p style="color: #9ca3af; font-size: 14px; margin-top: 32px;">
      If you did not create an AmzFlow account, you can safely ignore this email.
    </p>

    <hr style="border: 0; border-top: 1px solid #f3f4f6; margin: 40px 0;" />

    <p style="font-size: 12px; color: #9ca3af; line-height: 18px;">
      If the button doesn’t work, copy and paste this link into your browser:
      <br />
      <a href="${verifyUrl}" style="color: #f97316; text-decoration: none;">${verifyUrl}</a>
    </p>
    
    <p style="font-size: 12px; color: #d1d5db; margin-top: 20px;">
      &copy; 2026 AmzFlow Data Systems. All rights reserved.
    </p>
  </div>
`;

module.exports = verifyEmailTemplate;