import React from "react";
import { connect } from "react-redux";

const MakeupList = props => {
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.products.map(product => (
            <div>
                {product.name}
            </div>
        ))
      )}
    </>
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