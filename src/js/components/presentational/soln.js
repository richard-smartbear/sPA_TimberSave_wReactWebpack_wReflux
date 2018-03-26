import React from "react";
import PropTypes from "prop-types";

const Soln = ({ thisSoln }) =>{
  console.log(thisSoln)
  return(
    <li key={thisSoln.id}>
      Name: {thisSoln.name} | Score: {thisSoln.sumTotal || "bubcus"}
    </li>
  );
}
Soln.propTypes = {
  thisSoln: PropTypes.object.isRequired,
};
export default Soln;
