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
    }
    console.log('Hello from end of creatListItem - ListsCrontroller', rawList)
    listsService.createListItem(rawList)
    console.log('List Created', rawList, ProxyState.lists)
  }

  checkedItem(listId) {
    // const input = window.event.target

    // const rawCheck = {
    //   listId,
    //   checkbox: input.checked
    // }
    listsService.checkedItem(listId)
    console.log('Hello from checkedItem - ListsController', listId)
  }


  async deleteListItem(id) {
    console.log('hello from deleteListItem - ListsController', id)
    if (await Pop.confirm()) {
      listsService.deleteListItem(id)
    }
  }
}