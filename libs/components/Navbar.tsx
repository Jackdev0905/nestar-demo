import { Stack } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
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
