import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartItem from '../components/CartItem.js'

class Cart extends React.Component {
    render(){
      
       return( 
        <div className="px-4 px-lg-0">
        <br></br><br></br><br></br>
        <div className="pb-5">
          <h2>Thank you for shopping @ VinylStore {this.props.user.username}</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">  
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                       
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.user.orders.find(o => o.status === 'pending').order_records
                    .map(or => <CartItem order_record={or} deleteRecord = {this.props.deleteRecord}/>)} 
                    </tbody>
                  </table>
                </div>
              
              </div>
            </div>
      
            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                <div className="p-4">
                  <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                  <div className="input-group mb-4 border rounded-pill p-2">
                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0"></input>
                    <div className="input-group-append border-0">
                      <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                <div className="p-4">
                  <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                  <textarea name="" cols="30" rows="2" className="form-control"></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                <div className="p-4">
                  <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${parseInt(this.props.user.orders.find(o => o.status === 'pending').order_records.reduce((t,o)=>o.record.price+t,0))}
                    </strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">${parseInt(this.props.user.orders.find(o => o.status === 'pending').order_records.reduce((t,o)=>o.record.price+t,0)+10)}</h5>
                    </li>
                  </ul><a href="#" onClick={this.props.changeCartStatus} className="btn btn-dark rounded-pill py-2 btn-block">Proceed to checkout</a>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
              )
            
    
    }}
    
export default Cart;
