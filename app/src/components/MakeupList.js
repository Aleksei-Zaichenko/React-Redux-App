import React from "react";
import { connect } from "react-redux";

const MakeupList = props => {
  return (
    <div className="productList">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.products.map(product => (
            <div key={product.id} className="item">
                <img src={product.image_link} alt={product.name} className="productImage"/>
                <h3>Product name: {product.name}</h3>
                <h3>Brand: {product.brand}</h3>
                <h4>Price: {product.price_sign}{product.price}</h4>
                <a href={product.product_link}>product link</a>
            </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(MakeupList);