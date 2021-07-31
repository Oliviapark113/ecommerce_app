import React, { useEffect } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsOrder } from '../action/orderAction';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector(state=>state.orderDetails)
  const {order, loading, error} = orderDetails;
console.log(orderDetails)

//   const toPrice =(num) => Number(num.toFixed(2));
//   order.itemsPrice = toPrice(
//       order.itemsPrice.reduce((a, c) => a + c.qty * c.price, 0)
//     );
  
//   order.shippingPrice = order.itemsPrice >100? toPrice(0):toPrice(10);
//   order.taxPrice= toPrice(0.15*order.itemsPrice);
//   order.totalPrice = order.itemsPrice + order.shippingPrice + order.taxPrice;

  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(detailsOrder(orderId))
    },[dispatch, orderId])
  return  loading? (<LoadingBox></LoadingBox>) :
           error?(<MessageBox variant="danger">{error}</MessageBox>)
           :( <div>
               <h1>Order {order._id}</h1>
             <div className="row top">
              <div className="col-2">
                  <ul>
                      <li>
                          <div className="card card-body">
                              <h2>Shipping</h2>
                              <p>
                                  <strong>Name:</strong> {order.shippingAddress.fullName}<br />
                                  <strong>Address:</strong>{order.shippingAddress.address},{order.shippingAddress.city},{order.shippingAddress.postalCode},
                           {order.shippingAddress.country}
                              </p>
           {order.isDelivered?<MessageBox variant="success">Delivered at {order.deliveredAt}</MessageBox>:
           <MessageBox variant="danger">Not Delivered</MessageBox>
           }
                          </div>
                      </li>

                      <li>
                          <div className="card card-body">
                              <h2>Payment</h2>
                              <p>
                                  <strong>Method:</strong> {order.paymentMethod}
                              </p>
                              {order.isPaid?<MessageBox variant="success">Paid at {order.paidAt}</MessageBox>:
           <MessageBox variant="danger">Not Paid</MessageBox>
           }
                          </div>
                      </li>

                      <li>
                          <div className="card card-body">
                              <h2>Order Items</h2>

                              <ul>
                                  {
                                      order.orderItems.map(item => (
                                          <li key={item.product}>
                                              <div className="row">
                                                  <div>
                                                      <img
                                                          src={item.image}
                                                          alt={item.name}
                                                          className="small"
                                                      ></img>
                                                  </div>
                                                  <div className="min-30">
                                                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                  </div>

                                                  <div>{item.qty} x ${item.price} =${item.qty * item.price} </div>
                                              </div>
                                          </li>
                                      ))
                                  }
                              </ul>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="col-1">
              <div className="card card-body">
                  <ul>
                      <li>
                          <h2>Order Summary</h2>
                      </li>
                      <li>
                          <div className="row">
                              <div>Items</div>
                              <div>${parseInt(order.itemsPrice).toFixed(2)}</div>
                          </div>
                      </li>
                      <li>
                          <div className="row">
                              <div>Shipping</div>
                              <div>${parseInt(order.shippingPrice).toFixed(2)}</div>
                          </div>
                      </li>
                      <li>
                          <div className="row">
                              <div>Tax</div>
                              <div>${parseInt(order.taxPrice).toFixed(2)}</div>
                          </div>
                      </li>
                      <li>
                          <div className="row">
                              <div><strong>Order Total</strong></div>
                              <div><strong>${parseInt(order.totalPrice).toFixed(2)}</strong></div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      </div>
  )
}
