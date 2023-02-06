const express = require("express");
const router = express.Router();
const multer = require("multer");
// const multer = require("multer");



const validationAdminLoginMiddleware = require("../middlewares/validationAdminLoginMiddleware");
const AdminController = require("../controllers/AdminController.js");


router.get("/admin/login", AdminController.showLogin);
router.get("/admin/home", AdminController.showHome);
router.get("/admin/dashboard", AdminController.showDashboard);
router.get("/admin/produtos/cadastro", AdminController.showCadastroProdutos);
router.get("/admin/produtos/:id/editar", AdminController.showEditarProdutos);


router.post("/admin/login", validationAdminLoginMiddleware, AdminController.login);

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

router.post("/admin/produtos/cadastro", upload.single("image"), AdminController.storeProduct);

router.put("/admin/produtos/:id/editar", AdminController.updateProduct);


router.delete("/admin/produtos/:id/deletar", AdminController.deleteProduct);





module.exports = router;
