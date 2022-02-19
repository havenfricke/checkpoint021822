import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"

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
    _drawTask()
    //loadstatehere
  }
  createTask() {
    console.log('hello from createTask - TasksController');
    window.event.preventDefault()
    const form = window.event.target

    const rawTask = {
      name: form.name.value,
      color: form.color.value
    }
    tasksService.createTask(rawTask)
  }
  deleteTask(id) {
    console.log('Hello from deleteTask - Tasks Controller');
    tasksService.deleteTask(id)
  }
}