import { Stack } from "@mui/material";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Header from "../homepage/Header";

const withLayouBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>

        <Stack id="pc-wrap">
          <Navbar />
          <Stack className="header-basic">
            <div className="text container">
              <h1>Property Search</h1>
              <p>We are glad to see you again!</p>
            </div>
          </Stack>

          <Stack id="main">
            <Component {...props} />
          </Stack>

          <Footer />
        </Stack>
      </>
    );
  };
};

export default withLayouBasic;
