const Product=require('../models/product')
const createProduct=async(req,res)=>{
    const product = await Product.create({
        title:req.body.title,
        price:req.body.price,
        image:req.file.path
    });

    res.json(product);
}
const getProduct=async(req,res)=>{
    const product = await Product.findById(req.params.id);

    res.json(product);
}
const getAllProduct=async(req,res)=>{
    const products = await Product.find();

    res.json(products); 
}
const deleteProduct=async(req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);

    res.json(product);
}
const updateProduct=async(req,res)=>{
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(product); 
}
module.exports={
    getAllProduct,createProduct,getProduct,updateProduct,deleteProduct
}