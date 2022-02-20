import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";

function _drawTask() {
  console.log('drawTask');
  let template = ''
  const tasks = ProxyState.tasks
  tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
}

export class TasksController {
  constructor() {
    ProxyState.on('tasks', _drawTask)
    ProxyState.on('lists', _drawTask)
    ProxyState.on('tasks', saveState)
    ProxyState.on('lists', saveState)

    loadState()
  }
  createTask() {
    console.log('hello from createTask - TasksController');
    window.event.preventDefault()
    const form = window.event.target

    const rawTask = {
      name: form.name.value,
      color: form.color.value,
    }
    tasksService.createTask(rawTask)
    console.log(rawTask)
  }



  async deleteTask(id) {
    console.log('Hello from deleteTask - Tasks Controller', id);
    if (await Pop.confirm()) {
      tasksService.deleteTask(id)
    }
  }
}