import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.listId = data.listId
    this.checkbox = data.checkbox
  }

  get Template() {
    return `
    <input class="col-2" type="checkbox" name="checkbox" id="checkbox" value="true" onclick="app.listsController.checkedItem('${this.id}')" >
    <li class="d-flex col-10 border-bottom border-dark justify-content-between">
                <h6>${this.name}</h6> <i type="button" class="mdi mdi-delete text-danger fs-6" title="Delete list item"
                  onclick="app.listsController.deleteListItem('${this.id}')"></i>
              </li>
              </input>`
  }


}

//