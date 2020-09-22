const db = require('./conn');

class taskModel {
    constructor(id, task, completed) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }

    static async getTasks() {
        try{
            const response = await db.any(`SELECT * FROM todos;`);
            return response;
        } catch (error) {
            console.log("ERROR: ", error.message)
            return error.message;
        }
    }
}

module.exports = taskModel;