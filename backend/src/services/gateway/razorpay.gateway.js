import crypto from "crypto";

import razorpay from "../../config/razorpay.js";

export const createGatewayOrder =
  async ({
    amount,
    currency = "INR",
    receipt,
  }) => {
    const order =
      await razorpay.orders.create({
        amount,

        currency,

        receipt,

        payment_capture: 1,
      });

    return order;
  };

export const verifyGatewayPayment =
  ({
    orderId,
    paymentId,
    signature,
  }) => {
    const body =
      `${orderId}|${paymentId}`;

    const expectedSignature =
      crypto
        .createHmac(
          "sha256",
          process.env
            .RAZORPAY_KEY_SECRET
        )
        .update(body)
        .digest("hex");

    return crypto.timingSafeEqual(
      Buffer.from(
        expectedSignature
      ),
      Buffer.from(signature)
    );
  };