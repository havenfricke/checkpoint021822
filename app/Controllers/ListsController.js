import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { Pop } from "../Utils/Pop.js"


export class ListsController {

  createListItem(listId) {
    window.event.preventDefault()
    console.log('Hello from start of creatListItem - ListsController', listId);
    const form = window.event.target

    const rawList = {
      listId,
      name: form.name.value,
      checkbox: form.checked
    }
    console.log('Hello from end of creatListItem - ListsCrontroller', rawList)
    listsService.createListItem(rawList)
    console.log('List Created', rawList, ProxyState.lists)
  }

  checkedItem() {
    const form = window.event.target

    const rawCheck = {
      checkbox: form.checked
    }
    listsService.checkedItem(rawCheck)
    console.log('Hello from checkedItem - ListsController', rawCheck)
  }


  async deleteListItem(id) {
    console.log('hello from deleteListItem - ListsController', id)
    if (await Pop.confirm()) {
      listsService.deleteListItem(id)
    }
  }
}