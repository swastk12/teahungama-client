const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categorys");
const multer = require("multer")
const path = require("path");


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const PORT = process.env.PORT || 2000;


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/clients/upload/", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use("/clients/categorys", categoryRoute);
app.use("/clients/users", userRoute);
app.use("/clients/posts", postRoute);



app.use(express.static(path.join(__dirname,"/client/build")))

app.get("*",(req,res)=> { 
  res.sendFile(path.join(__dirname, '/client/build','index.html'))
});



app.listen( PORT, ()=>{
console.log("backend connected servers")
})