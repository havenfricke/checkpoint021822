import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.total = data.total
  }

  get Template() {
    return `
    <div class="col-4 bg-light card">

    <h2 class="text-light text-start row p-3 rounded-top" style="background-color: ${this.color};"><b
        class="col-10">${this.name}</b> <i type="button"
        class="mdi text-center d-flex justify-content-end col-2 mdi-delete text-light fs-2" title="Delete task"
        onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </h2>
    <h6 class="text-end col-12">3/6 Items Completed</h4>
      <ul class="bg-light d-flex justify-content-between align-items-center rounded border-light col-12 p-2">
        <input class="col-2" type="checkbox" name="checklistitem" id="checklistitem">
        <li class="d-flex col-10 border-bottom border-dark justify-content-between">
          <h6>list item 1</h6> <i type="button" class="mdi mdi-delete text-danger fs-6" title="Delete list item"
            onclick="app.tasksController.deleteListItem('${this.id}')"></i>
        </li>
        </input>
      </ul>

      <form onsubmit="app.tasksController.createListItem('${this.id}')">
        <div class="d-flex row justify-content-around p-4">
          <input required type="text" name="list-item" id="list-item" class="col-10"
            placeholder="List item..."><button class="col-2 btn btn-secondary"
            title="Add a task"><b>+</b></button>
        </div>
      </form>

  </div>
    `
  }
  get ListsTemplate() {
    let template = ''
    const myLists = ProxyState.lists.filter(l => l.listId == this.id)
    myLists.forEach(l => template += l.Template)
    return template
  }

  get Total() {
    let out = 0
    switch (this.total) {
      case '1':
        out += 1
        break
    }
    const myTotal = ProxyState.lists.filter(t => t.listId == this.id)

    out += myTotal.length

    return out
  }
  //total tasks complete get command goes here
}
