import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { homepage } from '../controllers/home.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.route("/register").post(
  upload.fields([ 
    { name: "avatar", maxCount: 1 },  // Field name 'avatar' should match the Postman field
    { name: "coverimage", maxCount: 1 }  // Field name 'coverimage' should match the Postman field
  ]),
  (req, res, next) => {
    console.log('Form Data:', req.body);  // Logs any additional form data (non-file fields)
    console.log('Uploaded Files:', req.files);  // Logs the uploaded files (files will be in req.files)
    next();  // Proceed to the next middleware (registerUser)
  },
  registerUser  // Register user after the file logging middleware
);

router.route("/home").post(homepage);

export default router;
