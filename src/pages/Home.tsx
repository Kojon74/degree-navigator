import { Link, useParams } from "react-router-dom";
import { Requirements1, Requirements2 } from "../Courses";

type RequirementsType = {
  type: string;
  name?: string;
  numCourses?: number;
  elective?: string;
  courses?: Array<string>;
  numSubCourses?: number;
  bound?: string;
};

type Props = {
  setPath: any;
};

const Home = ({ setPath }: Props) => {
  const { id } = useParams();
  setPath(id);

  console.log();

  const Requirements = id && parseInt(id) === 1 ? Requirements1 : Requirements2;

  return (
    <div>
      <h1>Requirements</h1>
      {Requirements.map((list) => (
        <div
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          {list.map(
            ({
              type,
              name,
              numCourses,
              elective,
              courses,
              bound,
              numSubCourses,
            }: RequirementsType) => (
              <div>
                {(type === "elective" || type === "elective&courses") &&
                  numCourses && (
                    <p style={{ display: "inline" }}>
                      {numCourses} {numCourses > 1 ? "courses" : "course"} from{" "}
                    </p>
                  )}
                {type === "elective&courses" &&
                elective &&
                courses &&
                bound &&
                numSubCourses ? (
                  <div style={{ display: "inline" }}>
                    {"{"}
                    <Link
                      to={`/elective-details/${elective}`}
                      style={{ display: "inline" }}
                    >
                      <p style={{ display: "inline" }}>{elective}</p>
                    </Link>{" "}
                    with at {bound === "most" ? "most" : "least"}{" "}
                    {numSubCourses} {numSubCourses > 1 ? "courses" : "course"}{" "}
                    from{" "}
                    {courses.map((nameOpt, i) => (
                      <div style={{ display: "inline" }}>
                        <Link
                          to={`/course-details/${nameOpt}`}
                          style={{ display: "inline" }}
                        >
                          <p style={{ display: "inline" }}>{nameOpt}</p>
                        </Link>
                        {i === courses.length - 1 ? "" : ", "}
                      </div>
                    ))}
                    {"}"}
                  </div>
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
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
