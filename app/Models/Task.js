import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    return `
    <div class="col-4 bg-light card">

    <h2 class="text-light text-start row p-3 rounded-top" style="background-color: ${this.color};">${this.name}<i
        type="button" class="mdi text-center d-flex justify-content-end col-5 mdi-delete text-light fs-2"
        title="Delete task" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </h2>
    <h6 class="text-end">3/6 Items Completed</h4>
      <ul class="bg-light rounded bottom col-12 p-4">
        <input type="checkbox" name="checklistitem" id="checklistitem">
        <li class="d-flex col-12 border-bottom justify-content-between">
          <h6>list item 1</h6> <i type="button" class="mdi mdi-delete text-danger fs-6" title="Delete list item"
            onclick="app.tasksController.deleteListItem()"></i>
        </li>
        </input>
      </ul>

      <form onsubmit="app.tasksController.createListItem('${this.id}')">
        <div class="d-flex row justify-content-between p-4">
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
  //total tasks complete get command goes here
}
