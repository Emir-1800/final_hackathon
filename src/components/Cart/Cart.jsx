import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartContextProvider, { cartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(CartContextProvider);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Фото</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма продукта</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img src={elem.item.img1} alt="product img" />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      value={elem.count}
                      type="number"
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button onClick={() => deleteCartProduct(elem.item.id)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Общая сумма: {cart.totalPrice}</h4>
          <NavLink to="/ordercard">
            <button className="but">Оформить заказ</button>
          </NavLink>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Cart;
