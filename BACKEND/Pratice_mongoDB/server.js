const express = require("express")
const connectDb = require("./db.js")
const User = require("./models/User")
const Products = require("./models/product.js")
const PORT = 5000
const app = express()
app.use(express.json());

connectDb();

app.get("/",(req,res) =>{
    res.send("MongoDb + express js Connected Successfullyy")
})

app.post("/add-user",async (req, res)=>{
    try {
        const { name, age, email } = req.body;
        const newUser = new User ({name, age, email});
        await newUser.save();
        res.json({message:"user added successfully", user:newUser});
    } catch (error) {
        console.log(error)
        
    }
})

app.post("/add-products",async (req, res)=>{
    try {
        const { product, price, Rating, bonus } = req.body;
        const newproducts = new Products ({product, price, Rating, bonus});
        await newproducts.save();
        res.json({message:"products added successfully", user:newproducts});
    } catch (error) {
        console.log(error)
        
    }
})

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(PORT, () => {
    console.log(`the server listen at the http://localhost:${PORT}`)
})