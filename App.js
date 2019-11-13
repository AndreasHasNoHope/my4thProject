const express= require('express'), chalk = require('chalk');
const products = require('./products');
const app = express();

app.listen(5000);
app.get("/",(req, res)=>{
    res.send("Willkommen mein liebe");
});
app.get("/products",(req, res)=>{
    res.json(products);
});


let sum = 0, max = products[0].price, min = products[0].price, avg=0;

for (let i of products) {
    sum += i.price;
    avg = sum / products.length;
    if(i.sale){console.log(i.name+ ": "+ chalk.red(i.sale + "€" ))
    } else {console.log(i.name+ ": "+ i.price + "€" )}

    if (i.price > max) {
        max = i.price
    } else if (i.price < min){
        min = i.price}}
    console.log("\nSum is: " + chalk.blue(sum + "€\n") + "Max numb is: " + chalk.blue(max + "€\n") + "Min numb is: " + chalk.blue(min + "€\n") + "Avg numb is: " + chalk.blue(avg + "€\n"));

