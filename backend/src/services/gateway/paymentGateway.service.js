export const createGatewayOrder = async ({
  amount,
  currency,
  receipt,
}) => {
  throw new Error(
    "createGatewayOrder() must be implemented by a payment gateway"
  );
};

export const verifyGatewayPayment = async ({
  orderId,
  paymentId,
  signature,
}) => {
  throw new Error(
    "verifyGatewayPayment() must be implemented by a payment gateway"
  );
};