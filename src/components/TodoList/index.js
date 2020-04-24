import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { PushpinTwoTone } from '@ant-design/icons';
import TodoItem from './TodoItem';
import {
  TitleWapper,
  TitleText,
  ItemsWapper,
  addButtonStyle
} from './styles';

// item分隔符
const ITEM_SPLIT_SYMBOL = "=-]#$";

// key
const ITEM_KEY = 'itemList';

class TodoList extends Component{
  constructor(props){
    super(props);
    
    let itemList = this.onReadItemList();
    this.state = {
      itemList: itemList
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
  }

  componentDidUpdate() {
    this.onSaveItemList();
  }

  onReadItemList() {
    let itemListString = localStorage.getItem(ITEM_KEY);
    if (itemListString) {
      return itemListString.split(ITEM_SPLIT_SYMBOL);
    }
    else {
      return [];
    }
  }

  onSaveItemList() {
    let list = [...this.state.itemList];
    let str = list.join(ITEM_SPLIT_SYMBOL);
    localStorage.setItem(ITEM_KEY, str);
  }

  onAddItem() {
    this.setState((prevState) => ({
      itemList: [...prevState.itemList, '']
    }));
  }

  onDeleteItem(index) {
    let itemList = [...this.state.itemList];
    itemList.splice(index, 1);

    this.setState(() => ({
      itemList
    }))
  }

  onChangeItem(index, value) {
    let itemList = [...this.state.itemList];
    itemList[index] = value;

    this.setState(() => ({
      itemList
    }))
  }

  render(){
    const { itemList } = this.state;

    return (
      <>
        <TitleWapper>
          <TitleText>
            ToDo-List
          </TitleText>
          <Button 
            shape="circle"
            onClick={this.onAddItem}
            style={addButtonStyle}
            icon={<PushpinTwoTone />}
          />
        </TitleWapper>
        <ItemsWapper>
          {
            itemList.map((item, index) => {
              return (<TodoItem 
                        key={index}
                        value={item}
                        index={index}
                        onDeleteItem={this.onDeleteItem}
                        onChangeItem={this.onChangeItem}
                      />);
            })
          }
        </ItemsWapper>
      </>
    );
  }
};

export default TodoList;