import React from 'react'
import './Product.css'

function Product({ image,name,title}) {
    return (
        <div className="product">
            
            <img src={image} alt="" />
             
                <p>{name}</p>
                <p>{ title}</p>
            
        </div>
    )
}

export default Product
