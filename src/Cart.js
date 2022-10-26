import React from 'react';
import { useCart } from 'react-use-cart';
function Cart() {
    const {
        isEmpty,
        totalItems,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart } = useCart();
    if (isEmpty) return <h1>Your Cart is Empty</h1>
    return (<>
        <div className='d-flex'>
            <h4 className='cart mx-4'>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h4>
            <table className='table table-light table-hover m-0'>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{ height:'6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button className='btn btn-info ms-2'
                                    onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                                    <button className='btn btn-info ms-2'
                                     onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                                    <button className='btn btn-info ms-2'
                                    onClick={()=>removeItem(item.id) }>Remove Item</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
            </div>
            <div className='col-auto ms-4'>
                <h2>Total price: {cartTotal} </h2>
            </div>
            <div>
                <h2 className='btn btn-danger ms-4'
                onClick={()=>emptyCart()}>Clear Cart</h2>
            </div>
      
        </>
    );
}

export default Cart;