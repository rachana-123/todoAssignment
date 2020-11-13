const mongoose= require("mongoose");

const URI="mongodb+srv://mindtree:Mindtree123@mindtree.a9sud.mongodb.net/test";

mongoose.connect(URI,{
    useNewUrlParser: true,
},
(err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});