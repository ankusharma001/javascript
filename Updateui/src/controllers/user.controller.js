import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "hey! hi Ankush Sharma"
  });
});
