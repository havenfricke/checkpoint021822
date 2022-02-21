import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  deleteListItem(id) {
    console.log('hello from deleteListItem - ListsService', id)
    ProxyState.lists = ProxyState.lists.filter(t => t.id != id)
  }

  checkedItem(rawCheck) {
    let template = ''
    const checks = ProxyState.lists
    checks.forEach(t => template += t.Template)
    document.getElementById('checkbox').innerHTML = template
    console.log('end of checkedItem - ListsService', rawCheck);
  }
  createListItem(rawList) {
    console.log('hello from createListItem - ListsService', rawList)
    const list = new List(rawList)
    ProxyState.lists = [...ProxyState.lists, list]
    console.log('hello from CreateListItem')
  }
}

export const listsService = new ListsService()