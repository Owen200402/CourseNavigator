interface Props {
  onSelectDept: (dept: string) => void;
  dept: string | null;
}

const CourseFilter = ({ onSelectDept, dept }: Props) => {
  return (
    <div className="btn-group dropend m-2">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dept ? dept: "Department"} {" "}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <button className="dropdown-item" onClick={() => onSelectDept("CPEN")}>CPEN</button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onSelectDept("ELEC")}>ELEC</button>
        </li>
      </ul>
    </div>
  );
};

export default CourseFilter;
