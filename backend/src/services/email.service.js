export const sendOtpEmail = async ({ email, otp, purpose }) => {
  console.log(
    `
========================================
OTP EMAIL
========================================

To: ${email}

Purpose: ${purpose}

OTP: ${otp}

This OTP expires in 5 minutes.

========================================
`,
  );

  return true;
};
export const sendEmail = async ({ to, subject, html }) => {
  /*
   * Email provider integration
   * will be added here.
   */

  console.log("Email notification:", {
    to,
    subject,
  });
};
