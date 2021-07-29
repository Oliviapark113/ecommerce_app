import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import userRouter from'./routers/userRouter.js';
import productRouter from './routers/productRouter.js'
const PORT = process.env.PORT || 3001;
const app = express();

import dotenv from 'dotenv';
dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((err, req, res, next)=>{
  res.status(500).send({message:err.message})
})
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/amazonia',
  {  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false})
    .then(
      console.log("Connected to MongoDB")
    ).catch(err=>console.log(err))

// Define API routes here
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


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
