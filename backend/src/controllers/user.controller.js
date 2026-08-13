import asyncHandler from "../utils/asyncHandler.js";

import {
  getUserProfile,
  updateUserProfile,
  getUserWallet,
} from "../services/user.service.js";

//  Get authenticated user's profile
//  GET /api/v1/users/profile
 
export const getProfile = asyncHandler(async (req, res) => {
  const user = await getUserProfile(req.user.id);

  return res.status(200).json({
    success: true,
    data: user,
  });
});


  // Update authenticated user's profile
  // PATCH /api/v1/users/profile
 
export const updateProfile = asyncHandler(async (req, res) => {
  const user = await updateUserProfile(req.user.id, req.body);

  return res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: user,
  });
});


  // Get authenticated user's wallet
  // GET /api/v1/users/wallet
 
export const getWallet = asyncHandler(async (req, res) => {
  const wallet = await getUserWallet(req.user.id);

  return res.status(200).json({
    success: true,
    data: wallet,
  });
});