import React from "react";
import PropTypes from "prop-types";
import "./style.css";

import { plural } from "../../utils";

function Controls({ productsInCart, showModal }) {
  return (
    <div className="Controls">
      В корзине:
      <b style={{ margin: "0 15px" }}>
        {productsInCart?.length === 0
          ? "пусто"
          : `${productsInCart.length} ${plural(productsInCart.length, {
              one: "товар",
              few: "товара",
              many: "товаров",
            })} / ${productsInCart.reduce(
              (acc, item) => acc + item.price * item.countInCart,
              0
            )} \u20bd`}
      </b>
      <button onClick={() => showModal(true)}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  // onAdd: PropTypes.func //////////////////
};

Controls.defaultProps = {
  onAdd: () => {},
};

export default React.memo(Controls);
