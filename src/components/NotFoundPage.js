import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      404 <Link to="/">GO Home</Link>
    </div>
  );
};

export default NotFoundPage;
