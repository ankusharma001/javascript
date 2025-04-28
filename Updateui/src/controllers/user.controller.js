import { loadConfigFromFile } from "vite";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError  from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import  uploadoncloudinary   from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: "hey! hi Ankush Sharma"
  // });

  //create user object - for creating the entry in db
  //remove response nd refresh token field from response
  // check for user creation 
  // return res

  const {fullname, email,username,password} = req.body
  console.log("email : ", email);
  console.log("password : ", email);

  if ( fullname =="")
  {
    throw new ApiError(400, "Fullname is required")
  }
 const existied_user =  await User.findOne({
    $or:[
      {username},
      {email}
    ]
  })

  if(existied_user)
  {
    throw new ApiError(400, "User already exists")
  }
  

  const avatarlocalpath = req.files?. avatar[0]?.path


  let coverimagelocalpath 
  if(req.files&& Array.isArray(reqfiles.coverImage) && req.files.coverImage.length>0) {
    coverimagelocalpath = req.files.coverImage[0]?.path
  }

  if (!avatarlocalpath){
    throw new ApiError(400, "Avatar is required")
  }
 const avatar =  await uploadoncloudinary(avatarlocalpath)
 const coverImage = await uploadoncloudinary(coverimagelocalpath)

 if(!avatar ) {
  throw new ApiError(500, "Failed to upload images to cloudinary")
 }

 const user = await User.create({
  fullname,
  avatar:avatar.url,
  coverImage:coverImage.url ||"",
  email,
  password,
  username: username.tolowerCase()
 })

const cratrd_user =  User.findById(user._id).select("-password -refreshToken ")

if (!created_user) {
  throw new ApiError(500, "Failed to create user")
}

return res.status(201).json(
  new ApiResponse(200,created_user, "User created successfully") 
)

});
