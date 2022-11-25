import { Link } from "react-router-dom";

const SelectPath = () => {
  return (
    <div>
      <Link to="/home/1" style={{ display: "block" }}>
        Path 1
      </Link>
      <Link to="/home/2" style={{ display: "block" }}>
        Path 2
      </Link>
    </div>
  );
};

export default SelectPath;
