import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";


export function saveState() {
  localStorage.setItem('TASKMASTER', JSON.stringify({
    tasks: ProxyState.tasks,
    lists: ProxyState.lists,

  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TASKMASTER'))
  console.log('load data', data)

  if (data != null) {
    ProxyState.tasks = data.tasks.map(t => new Task(t))
    ProxyState.lists = data.lists.map(l => new List(l))
  }
}