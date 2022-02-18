import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.listId = data.listId
  }

  get Template() {
    return `
    <li class="d-flex col-12 border-bottom justify-content-between">
                <h6>${this.name}</h6> <i type="button" class="mdi mdi-delete text-danger fs-6" title="Delete list item"
                  onclick="app.tasksController.deleteListItem('${this.id}')"></i>
              </li>`
  }

}