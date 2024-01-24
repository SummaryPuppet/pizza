import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: path.join(__dirname, "storage"),
  filename(_req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

export default upload;
