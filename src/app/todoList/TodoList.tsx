import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import TodoListStore from '../service/store/TodoListStore';
import Item from './Item';

interface ItemType {
    index: number,
    title: string,
    checked: boolean,
}

@observer // store에서 변경된 값에 대해서 캐치하여 리렌더링이된다.
class TodoList extends React.Component {
  componentDidMount() {
    TodoListStore.selectItemList();
  }

    addItem = () => {
      const { title, itemList } = TodoListStore;

      /* TodoListStore.title = '';
      TodoListStore.itemList = itemList.concat({
        index: itemList.length > 0 ? itemList[itemList.length - 1].index + 1 : 1,
        title,
        checked: false,
      });
      console.log(toJS(itemList)); */

      const index = itemList.length > 0 ? itemList[itemList.length - 1].index + 1 : 1;
      TodoListStore.insertItem(index);
      TodoListStore.title = '';
    }

    deleteItem = (index:number) => {
      const { itemList } = TodoListStore;

      // TodoListStore.itemList = itemList.filter((item:ItemType) => item.index !== index);
      // 가지고온 인덱스와 배열의 인덱스 비교
    }

    render() {
      const { itemList, title } = TodoListStore;

      return (
        <>
          <div className="box">
            <div className="title">TodoList</div>

            <div className="header">
              <div className="padding10">
                <Input
                  value={ title }
                  onChange={ (e:any) => {
                    // this.setState({ title: e.target.value }); }
                    TodoListStore.title = e.target.value;
                  } }
                />

                <Button
                  content="Add"
                  onClick={ this.addItem }
                />
              </div>
            </div>

            <div className="item_list">
              { /* <div className="item">Item</div> */ }

              {
                itemList.map((data:ItemType, index: number) => (
                  <Item
                    key={ data.index }
                    index={ index }
                    // title={ data.title }
                    // checked={ data.checked }
                    // deleteItem={ this.deleteItem }
                  />
                ))
              }
            </div>
          </div>
        </>
      );
    }
}

export default TodoList;
