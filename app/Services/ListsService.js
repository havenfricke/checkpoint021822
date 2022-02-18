import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  deleteListItem(id) {
    ProxyState.lists = ProxyState.lists.filter(t => t.id != id)
  }
  createListItem(rawList) {
    const list = new List(rawList)
    ProxyState.lists = [...ProxyState.lists, list]
  }
}

export const listsService = new ListsService()