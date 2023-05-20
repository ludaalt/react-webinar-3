import React from "react";
import PropTypes from "prop-types";
import { splitNumber } from "../../utils";
import "./style.css";

function Item(props) {
  // Счётчик выделений
  // const [count, setCount] = useState(0);

  const callbacks = {
    // onClick: () => {
    //   props.onSelect(props.item.code);
    //   if (!props.item.selected) {
    //     setCount(count + 1);
    //   }
    // },
    // onDelete: (e) => {
    //   e.stopPropagation();
    //   props.onDelete(props.item.code);
    // }

    onBuy: () => {
      // e.stopPropagation();
      props.onBuy(props.item.code);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-actions">
        <span style={{ marginRight: "15px" }}>
          {splitNumber(props.item.price)}
        </span>
        <button onClick={callbacks.onBuy}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
};

export default React.memo(Item);
