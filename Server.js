const express = require("express");
const app = express();

const products = require("./products")

app.listen(3000);

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/home.html");
});

app.get("/product", (req, res) => {
    res.json(products);
});

/*app.get("/product/:productId", (req, res) => {
    const id = req.params.productId;
    let productFound = null;

     for(let p of products){
        if (p._id == id) {
            productFound = p;}}

     if (productFound == null) {
         res.json({message: "Product not found"});
     } else {
         res.json(productFound);
     }});*/      // secure way but the one from below is the same thing


app.get("/product/:productId", (req, res) => {
    const id = req.params.productId;
    const productFound = products.find(p => p._id == id);
    res.json(productFound);
})
