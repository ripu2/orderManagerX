import React, { useState } from "react";
import Order from "../dummyData";
import OrderList from "./selectedOrder";
import "../styles/app.scss";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(Order[0].id);
  const [selectedProduct, setSelectedProduct] = useState(Order[0].product);
  const [selectedCustomer, setSelecetedCustomer] = useState(
    Order[0].customer_name
  );
  const [customer_email, setCustomer_email] = useState(Order[0].customer_email);
  const [quantity, setQuiantiy] = useState(Order[0].quantity);

  return (
    <>
      <div className="list">
        <div className="scroller">
          {Order.map(
            ({ id, product, customer_name, customer_email, quantity }) => {
              return (
                <div
                  className="item"
                  value={product}
                  onClick={() => {
                    setSelectedOrder(id);
                    setSelectedProduct(product);
                    setSelecetedCustomer(customer_name);
                    setCustomer_email(customer_email);
                    setQuiantiy(quantity);
                  }}
                >
                  <table>
                    <tr>{customer_email}</tr>
                    <tr>{product}</tr>
                  </table>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="newEntry">
        <div className="ui labeled button" tabIndex="0">
          <div className="ui positive button">
            <i className=""></i> Add new Order
          </div>

          <a className="ui basic left pointing blue label">
            orderCount-{Order.length}
          </a>
        </div>
      </div>
      <div className="currentSelection">
        <OrderList
          id={selectedOrder}
          product={selectedProduct}
          customer_name={selectedCustomer}
          customer_email={customer_email}
          quantity={quantity}
        />
      </div>
    </>
  );
};

export default Orders;