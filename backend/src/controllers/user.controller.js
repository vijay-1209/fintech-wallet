import asyncHandler from "../utils/asyncHandler.js";

export const getCurrentUser = asyncHandler(
  async (req, res) => {
    return res.status(200).json({
      success: true,
      data: {
        user: req.user,
      },
    });
  }
);