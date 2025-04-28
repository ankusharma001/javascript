import { asyncHandler } from "../utils/asyncHandler.js";

export const homepage = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "this is  home page"
  });
});


