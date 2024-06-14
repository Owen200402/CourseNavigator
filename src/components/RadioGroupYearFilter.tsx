import styled from "@emotion/styled";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const FilterLabel = styled(Typography) `
  font-size: 1rem;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`

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
          defaultValue="all"
          name="radio-buttons-group"
        >
          <FormControlLabel
          
            value="year_2"
            control={<Radio />}
            label={<FilterLabel sx={{marginLeft: "-0.2rem"}}>Year 2</FilterLabel>}
            onClick={onClickYear2}
          />
          <FormControlLabel
            value="year_3"
            control={<Radio />}
            label={<FilterLabel sx={{marginLeft: "-0.2rem"}}>Year 3</FilterLabel>}
            onClick={onClickYear3}
          />
          <FormControlLabel
            value="year_4"
            control={<Radio />}
            label={<FilterLabel sx={{marginLeft: "-0.2rem"}}>Year 4</FilterLabel>}
            onClick={onClickYear4}
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label={<FilterLabel sx={{marginLeft: "-0.2rem"}}>All</FilterLabel>}
            onClick={onClickAll}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioGroupYearFilter;
