import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Link, Skeleton, Typography } from "@mui/material";
import useCourses from "../hooks/useCourses";
import { useState } from "react";

interface Props {
  year: number;
}

const ScrollableCardContent = styled(CardContent)`
  height: 12rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CourseList = ({ year }: Props) => {
  const { courses, setCourses, error, isLoading } = useCourses();
  const [isExpanded, setExpand] = useState(false);

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
  }
  if (year === 3) {
    CPENCourses = CPENCourses.filter(
      (course) => course.code.substring(5, 6) === "3"
    );
  }
  if (year === 4) {
    CPENCourses = CPENCourses.filter(
      (course) => course.code.substring(5, 6) === "4"
    );
  }

  const expandText = () => {
    setExpand(true);
  };

  const shrinkText = () => {
    setExpand(false);
  };

  return (
    <div className="card-container">
      {isLoading &&
        skeletons.map((skeleton) => (
          <Card
            key={skeleton}
            variant="outlined"
            sx={{ height: "16rem", width: "25rem" }}
          >
            <Skeleton
              variant="rectangular"
              width={150}
              height={30}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={200}
              height={30}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={350}
              height={90}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={17}
              sx={{ margin: "0.5rem" }}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={17}
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
      {CPENCourses.map((course) => (
        <Card
          key={course._id}
          variant="outlined"
          sx={{ height: "16rem", width: "25rem" }}
        >
          <ScrollableCardContent>
            <Typography variant="h5" sx={{ color: "#801323" }}>
              {course.code}
            </Typography>
            <Typography variant="subtitle1">{course.name}</Typography>
            {isExpanded ? (
              <Typography variant="body2" color="text.secondary">
                {course.desc}{"  "}
                <Link
                  color="#c22bb5"
                  onClick={() => shrinkText()}
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
                  onClick={() => expandText()}
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
      {ELECCourses.map((course) => (
        <Card
          key={course._id}
          variant="outlined"
          sx={{ height: "16rem", width: "25rem" }}
        >
          <ScrollableCardContent>
            <Typography variant="h5" sx={{ color: "#002145" }}>
              {course.code}
            </Typography>
            <Typography variant="subtitle1">{course.name}</Typography>
            {isExpanded ? (
              <Typography variant="body2" color="text.secondary">
                {course.desc}{"  "}
                <Link
                  color="#c22bb5"
                  onClick={() => shrinkText()}
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
                  onClick={() => expandText()}
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
