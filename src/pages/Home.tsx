import { Link, useParams } from "react-router-dom";
import { Requirements1, Requirements2 } from "../Courses";

type RequirementsType = {
  type: string;
  name: string | Array<string>;
  numCourses?: number;
};

const Home = () => {
  const { path } = useParams();

  const Requirements =
    path && parseInt(path) === 1 ? Requirements1 : Requirements2;

  return (
    <div>
      {Requirements.map((list) => (
        <div
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            margin: "10px",
            padding: "10px",
          }}
        >
          {list.map(({ type, name, numCourses }: RequirementsType) => (
            <div>
              <p style={{ display: "inline" }}>
                {type === "course" || numCourses === 1
                  ? "1 course"
                  : `${numCourses} courses`}{" "}
                from{" "}
              </p>
              {type === "courses" && typeof name !== "string" ? (
                name.map((nameOpt, i) => (
                  <div style={{ display: "inline" }}>
                    <Link
                      to={`/course-details/${nameOpt}`}
                      style={{ display: "inline" }}
                    >
                      <p style={{ display: "inline" }}>{nameOpt}</p>
                    </Link>
                    <p style={{ display: "inline" }}>
                      {i === name.length ? "" : ", "}
                    </p>
                  </div>
                ))
              ) : (
                <Link
                  to={`/${
                    type === "course" ? "course-details" : "elective-details"
                  }/${name}`}
                  style={{ display: "inline" }}
                >
                  <p style={{ display: "inline" }}>{name}</p>
                </Link>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
