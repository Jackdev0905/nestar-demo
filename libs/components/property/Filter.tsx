import { propertySquare } from "@/libs/config";
import { CheckBox, Refresh } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Tooltip,
} from "@mui/material";
import { useState } from "react";

const Filter = () => {
  const [searchText, setSearchText] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [propertPrice, setPropertPrice] = useState({
    start: 0,
    end: 250000,
  });
  return (
    <div className="filter">
      <div className="home">
        <p className="title">Find your home</p>
        <div className="search">
          <OutlinedInput
            value={searchText}
            type="text"
            className="search-input"
            placeholder="What are you looking for?"
            onChange={(e) => setSearchText(e.target.value)}
          ></OutlinedInput>
          <img
            className="serach-icon"
            src="/img/icons/search_icon.png"
            alt=""
          />
          <Tooltip title="reset">
            <IconButton>
              <Refresh />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="location">
        <p className="title">Location</p>
        {["BUSAN", "SEOUL", "DAEGU"].map((location: string) => {
          return (
            <div key={location}>
              <Checkbox
                id={location}
                value={location}
                className="checkbox"
                // checked={false}
              />
              <label htmlFor="location">{location}</label>
            </div>
          );
        })}
      </div>
      <div className="property-type">
        <p className="title">Property Type</p>
        {["VILLA", "APARTMENT", "HOUSE"].map((type: string) => {
          return (
            <div key={type}>
              <Checkbox
                id={type}
                value={type}
                className="checkbox"
                // checked={false}
              />
              <label htmlFor="type">{type}</label>
            </div>
          );
        })}
      </div>
      <div className="room">
        <p className="title">Rooms</p>
        <ButtonGroup
          className="button-group"
          variant="outlined"
          aria-label="Basic button group"
        >
          <Button>Any</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5+</Button>
        </ButtonGroup>
      </div>

      <div className="bed room">
        <p className="title">Bedrooms</p>
        <ButtonGroup
          className="button-group"
          variant="outlined"
          aria-label="Basic button group"
        >
          <Button>Any</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5+</Button>
        </ButtonGroup>
      </div>

      <div className="options">
        <p className="title">Options</p>
        {["RENT", "BUY"].map((option: string) => {
          return (
            <div key={option}>
              <Checkbox
                id={option}
                value={option}
                className="checkbox"
                // checked={false}
              />
              <label htmlFor="option">{option}</label>
            </div>
          );
        })}
      </div>
      <div className="square">
        <p className="title">Square Meter</p>
        <div className="square-box">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Min</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={0}
              label="Min"
              // onChange={handleChange}
            >
              {propertySquare.map((meter: number) => {
                return (
                  <MenuItem key={meter} value={meter}>
                    {meter}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div className="line"></div>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Max</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            //   value={500}
              label="Max"
              //   onChange={handleChange}
            >
              {propertySquare.map((meter: number) => {
                return (
                  <MenuItem key={meter} value={meter}>
                    {meter}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="price">
        <p className="title">Price Range</p>
        <div className="price-box">
          <OutlinedInput
            // value={propertPrice.start}
            type="text"
            className="price-input"
            placeholder="0"
            onChange={(e: any) =>
              setPropertPrice({
                start: e.target.value,
                end: propertPrice.end,
              })
            }
          ></OutlinedInput>
          <div className="line"></div>
          <OutlinedInput
            value={propertPrice.end}
            type="text"
            className="price-input"
            placeholder="200000"
            onChange={(e: any) =>
              setPropertPrice({
                start: propertPrice.start,
                end: e.target.value,
              })
            }
          ></OutlinedInput>
        </div>
      </div>
    </div>
  );
};

export default Filter;
