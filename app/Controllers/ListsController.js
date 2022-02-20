import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"


export class ListsController {
  constructor() {
    ProxyState.on('tasks', saveState)
    ProxyState.on('lists', saveState)

    loadState()
  }
  createListItem(listId) {
    window.event.preventDefault()
    console.log('Hello from start of creatListItem - ListsController', listId);
    const form = window.event.target

    const rawList = {
      listId,
      name: form.name.value
    }
    console.log('Hello from end of creatListItem - ListsCrontroller', rawList)
    listsService.createListItem(rawList)
  }

  checkedItem() {
    console.log('checkedItem - ListsController')
    const check = window.event.target


    const rawCheck = {
      bool: check.checked,
    }
    listsService.checkedItem(rawCheck)
    console.log('checkedItem - ListsController', rawCheck);
  }
  async deleteListItem(id) {
    console.log('hello from deleteListItem - ListsController', id)
    if (await Pop.confirm()) {
      listsService.deleteListItem(id)
    }
  }
}