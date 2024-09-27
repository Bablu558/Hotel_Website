const express=require("express");
const app = express();
const users=require("./routes/user.js");
const posts=require("./routes/post.js");




app.use("/users",users);
app.use("/posts",posts);

app.get("/",(req,res)=>{
    res.send("Hii,i am root!");
});








app.listen(3000,()=>{
    console.log("server is listening to 3000");
})