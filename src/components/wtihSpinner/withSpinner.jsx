import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

// ! the code above it same like below
// const WithSpinner = WrappedComponent => {
//   const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };
//   return Spinner;
// };
export default WithSpinner;
