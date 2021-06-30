import React from 'react';
import {Link} from "react-router-dom";
import './lisstOfProducts.css'

class ListOfProducts extends React.Component{
  constructor(){
    super()

    this.renderList = this.renderList.bind(this);
  }
  renderList(){
    return(
      this.props.data.map( item => {
        return(
          <li key={item.id} >
            <Link className='rouer-link' to={`/list/${item.id}`}>
              <img src={item.imageUrl} alt="" />
              <h1>{item.name}</h1>
              <p>Count: {item.count}</p>
              <p>{item.comments}</p>
            </Link>
              {/* <button click={(item)=>this.props.delete(item.id)}>delete</button> */}
          </li>
        )
      })
    )
  }

  render(){
    return(
      <div className="listOfProducts">
        <select size="1" onChange = {(e) => this.props.filters(e.target.value)}>
          <option selected value="normal">Normal</option>
          <option value="count">Count</option>
        </select>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default ListOfProducts