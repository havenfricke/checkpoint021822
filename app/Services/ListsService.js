import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  deleteListItem(id) {
    console.log('hello from deleteListItem - ListsService', id)
    ProxyState.lists = ProxyState.lists.filter(t => t.id != id)
  }

  checkedItem(rawCheck) {
    ProxyState.lists = [...ProxyState.lists.fill(rawCheck, 0, 0)]
    console.log('checkedItem - TasksService', rawCheck, ProxyState.lists)
  }
  createListItem(rawList) {
    console.log('hello from createListItem - ListsService', rawList)
    const list = new List(rawList)
    ProxyState.lists = [...ProxyState.lists, list]
    console.log('hello from CreateListItem')
  }
}

export const listsService = new ListsService()