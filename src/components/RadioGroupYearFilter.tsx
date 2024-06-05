import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
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
            label={<Typography sx={{ fontSize: 'rem' }}>Year 2</Typography>}
            onClick={onClickYear2}
          />
          <FormControlLabel
            value="year_3"
            control={<Radio />}
            label={<Typography sx={{ fontSize: '1rem' }}>Year 3</Typography>}
            onClick={onClickYear3}
          />
          <FormControlLabel
            value="year_4"
            control={<Radio />}
            label={<Typography sx={{ fontSize: '1rem' }}>Year 4</Typography>}
            onClick={onClickYear4}
          />
          <FormControlLabel
            value="show_all"
            control={<Radio />}
            label={<Typography sx={{ fontSize: '1rem' }}>Show All</Typography>}
            onClick={onClickAll}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioGroupYearFilter;
