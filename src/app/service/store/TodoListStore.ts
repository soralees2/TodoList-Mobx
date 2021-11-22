import { action, observable } from 'mobx';
import TodoListApi from '../api/TodoListApi';

interface ItemType {
    index: number,
    title: string,
    checked: boolean,
}

class TodoListStore {
    @observable
    itemList: Array<ItemType>

    @observable
    title : string

    constructor() {
      this.itemList = [
        { index: 1, title: 'Item 11', checked: false },
        { index: 2, title: 'Item 12', checked: false },
        { index: 3, title: 'Item 13', checked: false },
      ];
      this.title = '';
    }

    @action
    deleteItem = (index:number) => {
      // this.itemList = this.itemList.filter((item:ItemType, index1:number) => index1 !== index);
      this.deleteItemAxios(this.itemList[index].index);
    }

    @action
    selectItemList = async () => {
      const result = await TodoListApi.selectItemList();

      console.log(result); // 리절트를 콘솔에서 보면 해당 상태를확인할 수 있음
      console.log(result.data.length);
        this.itemList = result.data;
    }

    // 스토어로 넘기기전에 payload 인자를 만들어줌
    @action
    insertItem = async (index:number) => {
      const payload = {
        id: index,
        index,
        title: this.title,
        checked: false,
      }; // key 와 value 이름이 같으면 생략가능
      await TodoListApi.insertItem(payload);
      this.selectItemList();
    }

    @action
    deleteItemAxios = async (index:number) => {
      await TodoListApi.deleteItemAxios(index);
      this.selectItemList();
    }

    // 수정하기 소라
    @action
    modifyItem = async (index:number) => {
      const payload = {
        id: index,
        index,
        title: this.title,
        checked: false,
      }; // key 와 value 이름이 같으면 생략가능
      await TodoListApi.modifyItem(payload);
      this.selectItemList();
    }
}

export default new TodoListStore();
