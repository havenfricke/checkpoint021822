import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.listId = data.listId
    this.bool = data.bool
  }

  get Template() {
    return `
    <input class="col-2" type="checkbox" name="bool" id="bool" onclick="app.listsController.checkedItem()">
    <li class="d-flex col-10 border-bottom border-dark justify-content-between">
                <h6>${this.name}</h6> <i type="button" class="mdi mdi-delete text-danger fs-6" title="Delete list item"
                  onclick="app.listsController.deleteListItem('${this.id}')"></i>
              </li>
              </input>`
  }

  get Template2() {
    return `${this.bool == true ? 1 : 0}`
  }

  get Template3() {
    return `${this.bool == false ? 1 : 1}`
  }
}