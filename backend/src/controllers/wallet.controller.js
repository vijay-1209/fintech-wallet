import asyncHandler from "../utils/asyncHandler.js";

import {
  getWallet,
  depositMoney,
  withdrawMoney,
  freezeWallet,
  unfreezeWallet,
  getWalletTransactions,
} from "../services/wallet.service.js";

export const getMyWallet = asyncHandler(
  async (req, res) => {
    const wallet = await getWallet(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      data: {
        wallet,
      },
    });
  }
);

export const deposit = asyncHandler(
  async (req, res) => {
    const {
      amount,
      note,
    } = req.body;

    const result = await depositMoney(
      req.user.id,
      amount,
      note
    );

    return res.status(200).json({
      success: true,
      message: "Money deposited successfully",
      data: result,
    });
  }
);

export const withdraw = asyncHandler(
  async (req, res) => {
    const {
      amount,
      note,
    } = req.body;

    const result = await withdrawMoney(
      req.user.id,
      amount,
      note
    );

    return res.status(200).json({
      success: true,
      message: "Money withdrawn successfully",
      data: result,
    });
  }
);

export const freeze = asyncHandler(
  async (req, res) => {
    const wallet = await freezeWallet(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Wallet frozen successfully",
      data: {
        wallet,
      },
    });
  }
);

export const unfreeze = asyncHandler(
  async (req, res) => {
    const wallet = await unfreezeWallet(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Wallet unfrozen successfully",
      data: {
        wallet,
      },
    });
  }
);

export const getTransactions = asyncHandler(
  async (req, res) => {
    const page = Math.max(
      Number(req.query.page) || 1,
      1
    );

    const limit = Math.min(
      Math.max(
        Number(req.query.limit) || 20,
        1
      ),
      100
    );

    const result =
      await getWalletTransactions(
        req.user.id,
        page,
        limit
      );

    return res.status(200).json({
      success: true,
      data: result,
    });
  }
);