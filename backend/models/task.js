const Joi = require('joi');
const  {Schema, model, SchemaTypes} = require('mongoose');


const taskSchema = Schema({
    text: {
        type: String,
        required: [true, 'Type the task text']
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    }
}, {versionKey: false, timestamps: true});

const joiTaskSchema = Joi.object({
    text: Joi.string().required(),
    completed: Joi.bool()
});

const Task = model('tasks', taskSchema);

module.exports = {Task, joiTaskSchema};