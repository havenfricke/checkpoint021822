import { listsService } from "../Services/ListsService.js"
import { Pop } from "../Utils/Pop.js"

export class ListsController {
  createListItem(listId) {
    console.log('creatListItem -controller');
    window.event.preventDefault()
    const form = window.event.target

    const rawList = {
      listId,
      name: form.name.value
    }
    console.log('listscontroller : createlistitem', rawList)
    listsService.createListItem(rawList)
  }
  async deleteListItem(id) {
    if (await Pop.confirm()) {
      listsService.deleteListItem(id)
    }
  }
}