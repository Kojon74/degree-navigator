import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Courses } from "../Courses";

const CourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState<typeof Courses.key>();

  useEffect(() => {
    const courseID = Object.keys(Courses).find(
      (key: string) => Courses[key].name === id
    );
    courseID && setCourse(Courses[courseID]);
  }, [id]);

  if (!course) return <div>Loading</div>;

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      Pre-requisites:{" "}
      {course.preReqs
        ? course.preReqs.map((preReq: typeof course.preReqs[0], i) => {
            if (course.preReqs) {
              if (typeof preReq === "string") {
                const preReqName = Courses[preReq].name;
                return (
                  <div style={{ display: "inline" }}>
                    <Link to={`/course-details/${preReqName}`}>
                      {preReqName}
                    </Link>
                    {i < course.preReqs.length - 1 ? ", " : ""}
                  </div>
                );
              }
              return (
                <p>
                  {` ${i > 0 && "and "}${preReq.num} of `}
                  {preReq.courses.map((preReqOpt, i) => (
                    <div style={{ display: "inline" }}>
                      <Link to={`/course-details/${Courses[preReqOpt].name}`}>
                        {Courses[preReqOpt].name}
                      </Link>
                      {i < preReq.courses.length - 1 ? ", " : ""}
                    </div>
                  ))}
                </p>
              );
            }
            return null;
          })
        : "None"}
    </div>
  );
};

export default CourseDetails;
