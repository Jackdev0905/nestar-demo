import { ExpandMore } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Stack className="header container">
      <div className="search">
        <div className="search-box">
          <div className="select-box">
            <p>Location</p>
            <ExpandMore />
          </div>

          <div className="select-box">
            <p>Property Types</p>
            <ExpandMore />
          </div>
          <div className="select-box">
            <p>Rooms</p>
            <ExpandMore />
          </div>
        </div>
        <div className="advanced">
          <div className="advanced-btn">
            <img src="/img/icons/tune.svg" alt="" />
            <span>Advanced</span>
          </div>
          <div className="search-btn">
            <img src="/img/icons/search_white.svg" alt="" />
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Header;
