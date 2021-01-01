import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      {props.isAuthenticated && <p>The info is: {props.info}</p>}
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAdmin && <p>This is private info. Please dont share</p>}
        <WrappedComponent {...props}></WrappedComponent>
      </div>
    );
  };
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticated ? (
          <WrappedComponent {...props}></WrappedComponent>
        ) : (
          <p>You are not authenticated, login</p>
        )}
      </div>
    );
  };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details"></AdminInfo>,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="There are the details"></AuthInfo>,
  document.getElementById("app")
);
