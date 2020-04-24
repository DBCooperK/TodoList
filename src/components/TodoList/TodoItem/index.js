import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addButtonStyle } from '../styles';
import { DeleteTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { 
  Input,
  Button
} from 'antd';
import {
  Container,
  inputStyle
} from './styles';

class TodoItem extends Component{
  constructor(props) {
    super(props);

    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
  }

  onDeleteItem() {
    const { index,
            onDeleteItem } = this.props;
    
    onDeleteItem(index);
  }

  onChangeItem(e) {
    const { index,
            onChangeItem } = this.props;

    const value = e.target.value;     
    onChangeItem(index, value);
  }

  render() {
    const { value } = this.props;

    return(
      <Container>
        <Input 
          placeholder="Input Content" 
          style={inputStyle}
          onChange={this.onChangeItem}
          value={value}
        />
        <Button 
          shape="circle"
          style={addButtonStyle}
          icon={<DeleteTwoTone />}
          onClick={this.onDeleteItem}
        />
      </Container>
    );
  }
};

TodoItem.defaultProps = {
  value: ''
};

TodoItem.propTypes = {
  value: PropTypes.string,
  onDeleteItem: PropTypes.func,
  onChangeItem: PropTypes.func
};

export default TodoItem;