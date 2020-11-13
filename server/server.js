require("./model/db");
const express= require("express");
const app= express();
const path= require("path");
const bodyParser = require("body-parser");
const toDoRoutes= require("./routes/toDoRoutes");

app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, "public")));

var allowCrossDomain = function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods',"GET,PATCH,POST,DELETE,PUT");
    res.header('Access-Control-Allow-Headers',"Content-Type");
    next();
}
app.use(allowCrossDomain);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public\index.html"));
})
app.use(bodyParser.json());
app.use("/",toDoRoutes);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})