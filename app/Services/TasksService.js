import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  deleteTask(id) {
    console.log('hello from deleteTask - TasksService', id);
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    ProxyState.lists = ProxyState.lists.filter(l => l.listId != id)
  }
  createTask(rawTask) {
    console.log('hello from createTask - TasksService', rawTask);
    const task = new Task(rawTask)
    ProxyState.tasks = [...ProxyState.tasks, task]
    console.log(task);
  }
}

export const tasksService = new TasksService()