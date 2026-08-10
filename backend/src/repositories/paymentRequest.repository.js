import prisma from "../config/prisma.js";

export const findUserWithWalletByEmail = async (
  email
) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      wallet: true,
    },
  });
};

export const findUserWithWalletById = async (
  userId
) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      wallet: true,
    },
  });
};

export const createPaymentRequest = async (
  data
) => {
  return prisma.paymentRequest.create({
    data,

    include: {
      requester: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },

      receiver: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
  });
};

export const findPaymentRequestById = async (
  requestId
) => {
  return prisma.paymentRequest.findUnique({
    where: {
      id: requestId,
    },

    include: {
      requester: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },

      receiver: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
  });
};

export const findUserPaymentRequests = async ({
  userId,
  page,
  limit,
}) => {
  const skip = (page - 1) * limit;

  const where = {
    OR: [
      {
        requesterId: userId,
      },
      {
        receiverId: userId,
      },
    ],
  };

  const [requests, total] =
    await Promise.all([
      prisma.paymentRequest.findMany({
        where,

        orderBy: {
          createdAt: "desc",
        },

        skip,
        take: limit,

        include: {
          requester: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },

          receiver: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      }),

      prisma.paymentRequest.count({
        where,
      }),
    ]);

  return {
    requests,
    total,
  };
};