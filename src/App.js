import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import ListOfProducts from './listOfProducts/listOfProducts';
import ItemComponent from './item/item'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      list: [
        {
          id: 1,
          imageUrl: 'https://images.unsplash.com/photo-1616951116286-109a1039275d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
          name: 'Product name',
          count: 4,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 2,
          imageUrl: 'https://images.unsplash.com/photo-1598124147244-a93318cbdd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          name: 'Product name',
          count: 43,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 3,
          imageUrl: 'https://images.unsplash.com/photo-1598124146793-f58c7ddea9b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          name: 'Product name',
          count: 4,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 4,
          imageUrl: 'https://images.unsplash.com/photo-1598124147244-a93318cbdd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          name: 'Product name',
          count: 14,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 5,
          imageUrl: 'https://images.unsplash.com/photo-1598124146793-f58c7ddea9b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          name: 'Product name',
          count: 4,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 6,
          imageUrl: 'https://images.unsplash.com/photo-1598124147244-a93318cbdd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          name: 'Product name',
          count: 4234,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 7,
          imageUrl: 'https://images.unsplash.com/photo-1598124146793-f58c7ddea9b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          name: 'Product name',
          count: 14,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 8,
          imageUrl: 'https://images.unsplash.com/photo-1534515477625-bd6aceca0885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
          name: 'Product name',
          count: 24,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 9,
          imageUrl: 'https://images.unsplash.com/photo-1534515477625-bd6aceca0885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
          name: 'Product name',
          count: 4,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
        {
          id: 10,
          imageUrl: 'https://images.unsplash.com/photo-1598124146793-f58c7ddea9b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          name: 'Product name',
          count: 34,
          size: {
            width: 200,
            height: 200
          },
          weight: '200g',
          comments: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis neque maiores porro delectus eveniet officiis accusamus provident assumenda dicta dolorum.'
        },
      ]
    }
    this.sorting = this.sorting.bind(this);
    this.delete = this.delete.bind(this);
  }
  
  sorting(data){ 
    let newList = this.state.list;
    if(data == 'count') {
      newList.sort(function(a, b){return a.count - b.count});

      this.setState({
        list: newList
      })
    }
  }

  delete(data) {
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <ListOfProducts data = {this.state.list} filters={this.sorting} deleteItem={this.delete}/>
            </Route>
            <Route path="/list/:id">
              <ItemComponent data = {this.state.list}/>
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
