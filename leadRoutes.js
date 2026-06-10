const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{

res.json([
{
name:"Lead 1",
status:"New"
}
]);

});

module.exports = router;
