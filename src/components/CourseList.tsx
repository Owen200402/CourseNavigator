import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, Skeleton, Typography } from "@mui/material";
import useCourses from "../hooks/useCourses";
import { useState } from "react";

interface Props {
  year: number;
  dept: string | null;
}

interface ExpandedCourses {
  [key: string]: boolean;
}

const ScrollableCardContent = styled(CardContent)`
  height: 15rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CourseList = ({ year, dept }: Props) => {
  const { courses, isLoading } = useCourses();
  const [ExpandedCourses, setExpandedCourses] = useState<ExpandedCourses>({});

  let CPENCourses = courses
    .filter((course) => course.dept === "CPEN")
    .sort((a, b) => (a._id > b._id ? 1 : -1));
  let ELECCourses = courses
    .filter((course) => course.dept === "ELEC")
    .sort((a, b) => (a._id > b._id ? 1 : -1));
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (year === 2) {
    CPENCourses = CPENCourses.filter(
      (course) => course.code.substring(5, 6) === "2"
    );
    ELECCourses = ELECCourses.filter(
      (course) => course.code.substring(5, 6) === "2"
    );
  }
  if (year === 3) {
    CPENCourses = CPENCourses.filter(
      (course) => course.code.substring(5, 6) === "3"
    );
    ELECCourses = ELECCourses.filter(
      (course) => course.code.substring(5, 6) === "3"
    );
  }
  if (year === 4) {
    CPENCourses = CPENCourses.filter(
      (course) => course.code.substring(5, 6) === "4"
    );
    ELECCourses = ELECCourses.filter(
      (course) => course.code.substring(5, 6) === "4"
    );
  }

  const expandOrShrink = (id: string) => {
    setExpandedCourses((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // without the bracket on [id]:, the key will be id instead of the course._id passed in here.
    }));
  };

  return (
    <div className="card-container">
      {isLoading &&
        skeletons.map((skeleton) => (
          <Card
            key={skeleton}
            variant="outlined"
            sx={{ height: "15rem", width: "21rem"}}
          >
            <Skeleton
              variant="rectangular"
              width={150}
              height={25}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={200}
              height={25}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={320}
              height={90}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={200}
              height={15}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={200}
              height={15}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              height={15}
              sx={{ margin: "0.5rem" }}
            />
          </Card>
        ))}
      {(dept === null || dept === "CPEN") && CPENCourses.map((course) => (
        <Card
          key={course._id}
          variant="outlined"
          sx={{ height: "15rem", width: "21rem"}}
        >
          <ScrollableCardContent>
            <Typography variant="h5" sx={{ color: "#801323" }}>
              {course.code}
            </Typography>
            <Typography variant="subtitle1">{course.name}</Typography>
            {ExpandedCourses[course._id] ? (
              <Typography variant="body2" color="text.secondary">
                {course.desc}
                {"  "}
                <Link
                  color="#c22bb5"
                  onClick={() => expandOrShrink(course._id)}
                  style={{ cursor: "pointer" }}
                >
                  show less
                </Link>
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                {course.desc.substring(0, 160)}{" "}
                <Link
                  color="#3fb2ba"
                  onClick={() => expandOrShrink(course._id)}
                  style={{ cursor: "pointer" }}
                >
                  show more
                </Link>
              </Typography>
            )}
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ display: "block" }}
            >
              <i>
                Prerequisites:{" "}
                {course.prer ? course.prer : course.preq ? course.preq : "None"}
              </i>
            </Typography>
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ display: "block" }}
            >
              <i>
                Corequisites:{" "}
                {course.crer
                  ? course.crer
                  : course.creq.length !== 0
                  ? course.creq
                  : "None"}
              </i>
            </Typography>
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ display: "block" }}
            >
              <i>Credit: {course.cred}</i>
            </Typography>
          </ScrollableCardContent>
        </Card>
      ))}
      {(dept === null || dept === "ELEC") && ELECCourses.map((course) => (
        <Card
          key={course._id}
          variant="outlined"
          sx={{ height: "15rem", width: "21rem" }}
        >
          <ScrollableCardContent>
            <Typography variant="h5" sx={{ color: "#002145" }}>
              {course.code}
            </Typography>
            <Typography variant="subtitle1">{course.name}</Typography>
            {ExpandedCourses[course._id] ? (
              <Typography variant="body2" color="text.secondary">
                {course.desc}
                {"  "}
                <Link
                  color="#c22bb5"
                  onClick={() => expandOrShrink(course._id)}
                  style={{ cursor: "pointer" }}
                >
                  show less
                </Link>
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                {course.desc.substring(0, 160)}{" "}
                <Link
                  color="#3fb2ba"
                  onClick={() => expandOrShrink(course._id)}
                  style={{ cursor: "pointer" }}
                >
                  show more
                </Link>
              </Typography>
            )}
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ display: "block" }}
            >
              <i>
                Prerequisites:{" "}
                {course.prer ? course.prer : course.preq ? course.preq : "None"}
              </i>
            </Typography>
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ display: "block" }}
            >
              <i>
                Corequisites:{" "}
                {course.crer
                  ? course.crer
                  : course.creq.length !== 0
                  ? course.creq
                  : "None"}
              </i>
            </Typography>
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ display: "block" }}
            >
              <i>Credit: {course.cred}</i>
            </Typography>
          </ScrollableCardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseList;
