import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/makeupAction";

const MakeupForm = props => {
  
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <>
      {props.isFetchingData ? (
        <div>data is being fetched</div>
      ) : (
        <button onClick={handleGetData}>Get Data</button>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(MakeupForm);
