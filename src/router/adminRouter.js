const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");

const AdminController = require("../controllers/AdminController.js");

const isLoginMiddleware = require("../middlewares/isLoginMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");
const validationAdminLoginMiddleware = require("../middlewares/validationAdminLoginMiddleware");




router.use(isLoginMiddleware);
router.use(isAdminMiddleware);



router.get("/admin/login", AdminController.showLogin);
router.get("/admin/home", AdminController.showHome);
router.get("/admin/dashboard", AdminController.showDashboard);
router.get("/admin/produtos/cadastro", AdminController.showCadastroProdutos);
router.get("/admin/produtos/:id/editar", AdminController.showEditarProdutos);


router.post("/admin/login", validationAdminLoginMiddleware, AdminController.login);



router.post("/admin/produtos/cadastro", upload.single("image"), AdminController.storeProduct);

router.put("/admin/produtos/:id/editar", AdminController.updateProduct);


router.delete("/admin/produtos/:id/deletar", AdminController.deleteProduct);





module.exports = router;
