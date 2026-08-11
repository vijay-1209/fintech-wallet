export const findIdempotencyKey =
  async (
    tx,
    key
  ) => {
    return tx.idempotencyKey.findUnique({
      where: {
        key,
      },
    });
  };

export const createIdempotencyKey =
  async (
    tx,
    {
      key,
      userId,
    }
  ) => {
    return tx.idempotencyKey.create({
      data: {
        key,

        userId,

        status: "PROCESSING",
      },
    });
  };

export const completeIdempotencyKey =
  async (
    tx,
    {
      key,
      transactionId,
      response,
    }
  ) => {
    return tx.idempotencyKey.update({
      where: {
        key,
      },

      data: {
        status: "COMPLETED",

        transactionId,

        response,
      },
    });
  };

export const failIdempotencyKey =
  async (
    tx,
    key
  ) => {
    return tx.idempotencyKey.update({
      where: {
        key,
      },

      data: {
        status: "FAILED",
      },
    });
  };