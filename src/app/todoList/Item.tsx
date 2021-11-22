/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { observer } from 'mobx-react';
import { Icon } from 'semantic-ui-react';
import React from 'react';
import TodoListStore from '../service/store/TodoListStore';

interface Props {
    index: number,
}

@observer
class Item extends React.Component<Props> {
    checkItem = () => {
      const { index } = this.props;
      const { itemList } = TodoListStore;

      itemList[index].checked = !itemList[index].checked;
    }

    delete = () => {
      // this.props.deleteItem(this.props.index);
      TodoListStore.deleteItem(this.props.index);
    }

    // input에 값 옮기기
    valueCheck = () => {
      const { index } = this.props;
      const { itemList } = TodoListStore;
      console.log(itemList[index].title);
    }

    render() {
      const { index } = this.props;
      const { itemList } = TodoListStore;

      return (
        <>
          <div className="item">
            <div
              className={ itemList[index].checked ? 'float_left checked' : 'float_left' }
              onClick={ this.checkItem }
            >
              { itemList[index].title }
            </div>
            <div className="float_right">
              <Icon className="edit" onClick={ this.valueCheck } value={ itemList[index].title } />
              &nbsp;&nbsp;&nbsp;
              <span onClick={ this.delete }>X</span>
            </div>
          </div>
        </>
      );
    }
}

export default Item;
