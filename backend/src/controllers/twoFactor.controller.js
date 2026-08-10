import asyncHandler from "../utils/asyncHandler.js";
import { verifyLoginOtp } from "../services/twoFactor.service.js";

import {
  requestEnableTwoFactor,
  confirmEnableTwoFactor,
  requestDisableTwoFactor,
  confirmDisableTwoFactor,
} from "../services/twoFactor.service.js";

export const enableTwoFactor =
  asyncHandler(async (req, res) => {
    await requestEnableTwoFactor(
      req.user.id
    );

    return res.status(200).json({
      success: true,

      message:
        "OTP sent to your registered email address",
    });
  });

export const confirmEnableTwoFactorController =
  asyncHandler(async (req, res) => {
    const { otp } = req.body;

    await confirmEnableTwoFactor({
      userId: req.user.id,

      otp,
    });

    return res.status(200).json({
      success: true,

      message:
        "Two-factor authentication enabled successfully",
    });
  });

export const disableTwoFactor =
  asyncHandler(async (req, res) => {
    await requestDisableTwoFactor(
      req.user.id
    );

    return res.status(200).json({
      success: true,

      message:
        "OTP sent to your registered email address",
    });
  });

export const confirmDisableTwoFactorController =
  asyncHandler(async (req, res) => {
    const { otp } = req.body;

    await confirmDisableTwoFactor({
      userId: req.user.id,

      otp,
    });

    return res.status(200).json({
      success: true,

      message:
        "Two-factor authentication disabled successfully",
    });
  });

export const verifyLoginTwoFactor =
  asyncHandler(async (req, res) => {
    const {
      userId,
      otp,
    } = req.body;

    await verifyLoginOtp({
      userId,
      otp,
    });

    /*
     * Generate the final access token here
     * using the same token utility used by
     * the normal login flow.
     */

    return res.status(200).json({
      success: true,

      message:
        "Two-factor authentication verified",

      data: {
        verified: true,
      },
    });
  });