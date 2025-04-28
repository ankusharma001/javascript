import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");  // Define where to save the files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);  // Use the original name for the file
  }
});

export const upload = multer({ storage: storage });
