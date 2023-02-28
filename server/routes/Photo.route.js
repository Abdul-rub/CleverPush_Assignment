const {Router} =require ('express');
const {  search } = require('../controller/photos.controller');

const router =Router()

router.get("/",search)

module.exports=router;


