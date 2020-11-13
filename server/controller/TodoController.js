const ToDos = require("../model/toDoModel");

const createTask= async(req,res,next)=>{
    try{
        const todo= new ToDos({
            taskName: req.body.taskName,
            created_at: new Date().toLocaleString(),
            expectedCompletionTime: req.body.expectedCompletionTime || 8,
            status: "Todo" || req.body.status,
            isTimeEntered: req.body.isTimeEntered,
            priority: req.body.priority,
        });
        await todo.save();
        return res.json({message: "ok"})
    }catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
}
const getAllTasks= async(req,res,next)=>{
    try{
        const todos= await ToDos.find({});
        return res.json({data: todos});
    }catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}
const deleteTask= async(req,res,next)=>{
    await ToDos.findByIdAndRemove(req.params.id, (err, todo) => {
        // console.log(todo);
        if (!err) {
            return res.json({ data: todo });
        }
        else { console.log('Error in task delete :' + err); }
    });
}
// const updateTask= async(req,res,next)=>{

// }
const updateTask= async(req,res,next)=>{
    try{
        const todo=await ToDos.findByIdAndUpdate({_id: req.params.id}, {...req.body}, {new:true});
        // console.log(todo);
        return res.json({ data:todo });
    } catch {
        // console.log(err);
        return res.status(400).json(err);
    }
}
const getTaskById = async (req, res, next) => {
    try{
        const todo = await ToDos.find({ _id: req.params.id });
        // console.log(todo);
        return res.json({ data: todo });
    }catch{
        console.log(err);
        return res.status(400).json(err);
    }
    
}
const getPriorityTasks = async(req,res,next)=>{
    try{
        const todo= await ToDos.find({priority: "Yes"}).sort({created_at:1});
        return res.json({ data: todo });
    }catch{
        console.log(err);
        return res.status(400).json(err);
    }
}
const getCompletedTasks = async(req,res,next)=>{
    try{
        const todo= await ToDos.find({status: "Completed"});
        return res.json({ data: todo });
    }catch{
        console.log(err);
        return res.status(400).json(err);
    }
}
module.exports = {
    createTask, getAllTasks, deleteTask, updateTask, getTaskById,getPriorityTasks,getCompletedTasks
}