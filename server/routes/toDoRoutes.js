const express= require("express");
const toDoController= require("../controller/TodoController")
const route= express.Router();

route.post('/',toDoController.createTask);
route.get('/tasks',toDoController.getAllTasks);
route.get('/task/:id', toDoController.getTaskById);
route.delete('/delete/:id', toDoController.deleteTask);
route.patch('/updateTask/:id',toDoController.updateTask);
route.get('/priorityTasks', toDoController.getPriorityTasks);
route.get('/completedTasks', toDoController.getCompletedTasks);

module.exports= route;