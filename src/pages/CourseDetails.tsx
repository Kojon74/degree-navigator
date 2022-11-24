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
    <div className="requirement-details">
      <h1>{course.name}</h1>
      Pre-requisites:{" "}
      {course.preReqs
        ? course.preReqs.map((preReq: typeof course.preReqs[0], i) => {
            if (typeof preReq === "string") {
              const preReqName = Courses[preReq].name;
              return (
                <Link to={`/course-details/${preReqName}`}>{preReqName}</Link>
              );
            }
            return (
              <p>{` ${i > 0 && "and "}${preReq.num} of ${preReq.courses.map(
                (preReqOpt) => <p>{preReqOpt}</p>
              )}`}</p>
            );
          })
        : "None"}
    </div>
  );
};

export default CourseDetails;
