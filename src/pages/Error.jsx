import React from "react";
import { useRouteError } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  // const history = useHistory();

  // const navigateTo = (path) => {
  //     history.push(path);
  // }

  return (
    <div>
      <h1>{error.status} - Error</h1>
      <p>{error.statusText || error.message}</p>

      {/* <button onClick={() => navigateTo('/')}>
                Go back to home
            </button> */}
    </div>
  );
};

export default Error;
