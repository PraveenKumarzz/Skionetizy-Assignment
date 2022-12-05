import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/task1">Task 1(Crud operation)</Link>
      </li>

      <li style={{ marginTop: "10px" }}>
        <Link to="/task2">Task 2(Comments)</Link>
      </li>
    </ul>
  );
};

export default Header;
