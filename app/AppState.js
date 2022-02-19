import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testTask = new Task(
  {
    name: 'Create',
    color: '#8E44AD'
  }
)

const testList = new List(
  {
    name: 'put food in bowl'
  }
)

class AppState extends EventEmitter {
  /** @type {import('./Models/Task').Task[]} */
  tasks = [testTask]

  /** @type {import('./Models/List').List[]} */
  lists = [testList]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
