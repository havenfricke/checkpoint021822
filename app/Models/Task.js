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
    <div class="col-lg-4 col-md-4 col-sm-12 bg-light card">

    <h2 class="text-light text-start row p-3 rounded-top" style="background-color: ${this.color};"><b
        class="col-10">${this.name}</b> <i type="button"
        class="mdi text-center d-flex justify-content-end col-2 mdi-delete text-light fs-2" title="Delete task"
        onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </h2>
   
    <h6 class="text-end col-12"> 0/1 Items Completed</h4>
      <ul class="bg-light d-flex justify-content-between align-items-center rounded border-light row p-2">
        ${this.ListsTemplate}
      </ul>

      
      <form onsubmit="app.listsController.createListItem('${this.id}')">
        <div class="d-flex row justify-content-around p-4">
          <input required type="text" name="name" id="name" class="col-10"
            placeholder="Add a list item..."><button class="col-2 btn btn-secondary"
            title="Add a list item"><b>+</b></button>
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


}


