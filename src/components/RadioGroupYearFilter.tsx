import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface Props {
  onClickYear2: () => void;
  onClickYear3: () => void;
  onClickYear4: () => void;
  onClickAll: () => void;
}

const RadioGroupYearFilter = ({
  onClickYear2,
  onClickYear3,
  onClickYear4,
  onClickAll,
}: Props) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Year</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="show_all"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="year_2"
            control={<Radio />}
            label="Year 2"
            onClick={onClickYear2}
          />
          <FormControlLabel
            value="year_3"
            control={<Radio />}
            label="Year 3"
            onClick={onClickYear3}
          />
          <FormControlLabel
            value="year_4"
            control={<Radio />}
            label="Year 4"
            onClick={onClickYear4}
          />
          <FormControlLabel
            value="show_all"
            control={<Radio />}
            label="Show All"
            onClick={onClickAll}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioGroupYearFilter;
