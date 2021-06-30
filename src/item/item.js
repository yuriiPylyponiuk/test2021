import React from 'react';
import './item.css'

class ItemComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      array: [],
      id: +document.location.pathname.slice(document.location.pathname.lastIndexOf('/')+1)
    }
  }

  render(){
    let arr = this.props.data;
    
    let obj = arr.filter( i => i.id == this.state.id)[0]
    console.log(obj)
    return(
      <div className='item-block'>
        <img src={obj.imageUrl} alt="" />
        <div className="text-block">
          <h1>{obj.name}</h1>
          <p>{obj.comments}</p>
          <p>Count: {obj.count}</p>
        </div>
      </div>
    )
  }
}

export default ItemComponent;