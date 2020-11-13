const mongoose= require("mongoose");

const ToDoSchema= new mongoose.Schema({
    taskName :{ type: String, required: true},
    created_at:{ type: String},
    expectedCompletionTime: {type: Number},
    status:{type:String},
    priority: {type:String, default:"No"},
    isTimeEntered: {type:Boolean, default:false},
    completedTime:{type:String, default:null}
})

const ToDos= mongoose.model("ToDos",ToDoSchema);
module.exports=ToDos;