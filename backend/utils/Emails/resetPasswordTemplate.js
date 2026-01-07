const resetPasswordTemplate = (resetUrl) => `
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

    <h2 style="color: #111827; font-size: 24px; font-weight: 700; margin-top: 0;">Reset your password</h2>

    <p style="color: #4b5563; font-size: 16px; line-height: 24px;">Hello,</p>

    <p style="color: #4b5563; font-size: 16px; line-height: 24px;">
      We received a request to reset your <strong>AmzFlow</strong> account password. 
      Click the button below to secure your account and set a new password.
    </p>

    <div style="margin: 32px 0;">
      <a 
        href="${resetUrl}"
        style="
          background-color: #f97316;
          color: #ffffff;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 12px;
          display: inline-block;
          font-weight: 700;
          font-size: 16px;
          box-shadow: 0 4px 10px rgba(249, 115, 22, 0.25);
        "
      >
        Reset Password
      </a>
    </div>

    <p style="color: #6b7280; font-size: 14px; background-color: #fff7ed; padding: 12px; border-left: 4px solid #f97316; border-radius: 4px;">
      This reset link will expire in <strong>15 minutes</strong> for your security.
    </p>

    <p style="color: #9ca3af; font-size: 14px; margin-top: 32px;">
      If you did not request this change, you can safely ignore this email. Your current password will remain active.
    </p>

    <hr style="border: 0; border-top: 1px solid #f3f4f6; margin: 40px 0;" />

    <p style="font-size: 12px; color: #9ca3af; line-height: 18px;">
      Having trouble with the button? Copy and paste this URL into your browser:
      <br />
      <a href="${resetUrl}" style="color: #f97316; text-decoration: none;">${resetUrl}</a>
    </p>
    
    <p style="font-size: 12px; color: #d1d5db; margin-top: 20px;">
      &copy; 2026 AmzFlow Data Systems. All rights reserved.
    </p>
  </div>
`;

module.exports = resetPasswordTemplate;