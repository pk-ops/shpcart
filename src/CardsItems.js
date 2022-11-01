import React from "react";
import {useCart} from "react-use-cart";

export function CardsItems(props) {
  const {addItem}=useCart();
  return (

    <div className="col-md-3 my-3">
      <div className="card mb-4 mx-2 px-4 h-100">

        <div className="border-bottom cardhead">
          <img
            className="card-img-top" style={{height:"15rem"}}
            src={props.img}
            alt="" />
        </div>
        <div className="card-body">
          <div className='card-text'>
            <h5 className="card-text text-center">
              {props.title}
            </h5></div>
            <div className=' card-text rating'>
                <p className="rating card-text text-center">🌟🌟🌟🌟🌟</p>
            </div>
          <div className='card-text mt-2'> <p className="card-text text-center">
           $ {props.price}
          </p></div>

        </div>
        <a
          href="#"
          className="btn btn-primary my-2 d-flex justify-content-center"
          style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px" }}
         onClick={()=>addItem(props.item)}>
          Add to Cart
        </a>

      </div>
    </div>

  );
}
