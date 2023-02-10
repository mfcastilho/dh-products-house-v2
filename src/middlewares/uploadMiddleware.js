const multer = require("multer");

// const upload = multer({dest:'src/public/images'});
const storage = multer.diskStorage({
  destination: (req, file, callback)=>{
    callback(null, "src/public/images");
  },
  filename: (req, file, callback)=>{
    
    let persistentFileName = `${Date.now()}_product_${file.originalname}`;    
    callback(null, persistentFileName);
  }
});


const upload = multer({storage});
module.exports = upload;