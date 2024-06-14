import { useMediaQuery, useTheme } from "@mui/material";

interface Props {
  onSelectDept: (dept: string) => void;
  dept: string | null;
}

const CourseFilter = ({ onSelectDept, dept }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="btn-group dropend m-2">
      <button
        className={
          !isSmallScreen
            ? "absolute-btn btn btn-secondary dropdown-toggle btn-md"
            : "absolute-btn btn btn-secondary dropdown-toggle btn-sm"
        }
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          marginTop: isSmallScreen ? "5rem" : "0",
          marginRight: isSmallScreen ? "14rem" : "0",
        }}
      >
        {dept ? dept : "Department"}{" "}
      </button>
      <ul
        className="dropdown-menu smooth-transition"
        aria-labelledby="dropdownMenuButton"
      >
        <li>
          <button
            className="dropdown-item smooth-transition"
            onClick={() => onSelectDept("CPEN")}
          >
            CPEN
          </button>
        </li>
        <li>
          <button
            className="dropdown-item smooth-transition"
            onClick={() => onSelectDept("ELEC")}
          >
            ELEC
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CourseFilter;
