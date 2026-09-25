const express=require("express");
const { getAllProduct, createProduct, getProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const upload = require("../config/multer");
const router=express.Router();
router.get("/",getAllProduct)
router.post("/",upload.single('image'),createProduct)
router.get("/:id",getProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)
module.exports=router;