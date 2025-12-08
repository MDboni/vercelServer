import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String },
    email: { type: String },
    createDate: { type: Date, default: Date.now() },  // ঠিক আছে
}, { versionKey: false });

const TaskModel = mongoose.model('tasks', DataSchema);
export default TaskModel;
