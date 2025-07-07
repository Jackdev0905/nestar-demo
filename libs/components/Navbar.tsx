import { Stack } from "@mui/material";
import Link from "next/link";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Navbar = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return (
      <Stack sx={{background:"green", height: "100px"}}>
        <Stack>Mobile Navbar</Stack>
        <div className="links" style={{display:"flex", justifyContent:"space-between"}}>
          <Link href={"/"}>Home</Link>
          <Link href={"/property"}>Apartments</Link>
        </div>
      </Stack>
    );
  } else
    return (
      <Stack className="navbar">
        <div className="navbar-menu container">
          <div className="logo">
            <Link href={"/"}>
              <img src="/img/logo/logoWhite.svg" alt="nestar" />
            </Link>
          </div>
          <div className="links">
            <Link href={"/"}>Home</Link>
            <Link href={"/property"}>Apartments</Link>
            <Link href={"/agent"}>Maklers</Link>
            <Link href={"/community"}>Community</Link>
            <Link href={"/cs"}>CS</Link>
          </div>
          <div className="user">
            <div className="image">
              <img src="/img/profile/defaultUser.svg" alt="" />
            </div>
          </div>
        </div>
      </Stack>
    );
};

export default Navbar;
