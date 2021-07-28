import express from 'express';
import data from './data.js'
import path from 'path';
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
//Single prodct 
app.get('/api/products/:id', (req, res)=>{
  const product = data.products.find(product => product._id === req.params.id)
  if(product){
    res.send(product);
  } else{
    res.status(404).send({message:"Product not Found"})
  }
  
})
//All Products
app.get('/api/products', (req, res)=>{
  res.send(data.products);
})

app.get("/", (req, res)=>{
  res.send("Server is ready")
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT}`);
});
