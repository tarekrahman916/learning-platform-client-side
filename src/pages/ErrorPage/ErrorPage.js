import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center  p-5 border shadow">
      <div className="border-4 p-24 shadow-2xl">
        <h1 className="fs-2">Ops! An Error Ocurred!</h1>
        {error && (
          <div className="text-danger">
            <p className=" fs-4">{error.statusText || error.message}</p>
            <p className="fs-5">{error.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
