import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Electives } from "../Courses";

const ElectiveDetails = () => {
  const { id } = useParams();

  const [elective, setElective] = useState<typeof Electives.key>();

  useEffect(() => {
    const electiveID = Object.keys(Electives).find(
      (key: string) => Electives[key].name === id
    );
    electiveID && setElective(Electives[electiveID]);
  }, [id]);

  return (
    <div className="elective-details">
      <h1>{elective?.name}</h1>
      {elective?.courses.map((course, i) => (
        <div style={{ display: "inline" }}>
          <Link to={`/course-details/${course}`}>{course}</Link>
          {i < elective.courses.length - 1 ? ", " : ""}
        </div>
      ))}
    </div>
  );
};

export default ElectiveDetails;
