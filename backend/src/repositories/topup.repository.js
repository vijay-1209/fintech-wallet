export const createTopUp =
  async (
    tx,
    data
  ) => {
    return tx.topUp.create({
      data,
    });
  };

export const findTopUpByOrderId =
  async (
    tx,
    gatewayOrderId
  ) => {
    return tx.topUp.findUnique({
      where: {
        gatewayOrderId,
      },
    });
  };

export const findTopUpByPaymentId =
  async (
    tx,
    gatewayPaymentId
  ) => {
    return tx.topUp.findUnique({
      where: {
        gatewayPaymentId,
      },
    });
  };

export const updateTopUp =
  async (
    tx,
    id,
    data
  ) => {
    return tx.topUp.update({
      where: {
        id,
      },

      data,
    });
  };