import React from 'react'
import "../Style/Card.css"
function Card({item,handleClick}) {
  const { title, description, price, img } = item;
  return (
    <div className="cards">
        <div className="card">
          <img src={img} alt="mypic" className="card_img" />
          <div>
            <h3 className="card_category">{title}</h3>
            <p></p>
            <p className="card_title">{description}</p>    
            <p><b>price-{price}</b></p>        
            <button onClick={()=>handleClick(item)}>Order Now</button>
          </div>
        </div>
      </div>
  )
}

export default Card