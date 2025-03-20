import multer from "multer";
import path from "path";

<<<<<<< HEAD
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;

  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed (JPEG, JPG, PNG)"));
  }
};
const upload = multer({ storage, fileFilter });
=======

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});


const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/; 
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase()); // check file extension
  const mimetype = allowedTypes.test(file.mimetype); 

  if (extname && mimetype) {
    return cb(null, true); 
  } else {
    cb(new Error("Invalid file type, only JPEG, JPG, and PNG are allowed."), false); // reject the file
  }
};


const upload = multer({storage: storage, ileFilter: fileFilter,});

>>>>>>> 6fa8b2b4619084cdadc96b7435af5b5875c9b593
export default upload;
