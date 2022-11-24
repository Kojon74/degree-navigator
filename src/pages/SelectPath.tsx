import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const SelectPath = (props: Props) => {
  return (
    <div>
      <Link to="/1" style={{ display: "block" }}>
        Path 1
      </Link>
      <Link to="/2" style={{ display: "block" }}>
        Path 2
      </Link>
    </div>
  );
};

export default SelectPath;
