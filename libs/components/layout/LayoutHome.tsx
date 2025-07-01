import { Stack } from "@mui/material";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Header from "../homepage/Header";

const withLayouMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>

        <Stack id="pc-wrap">
          <Stack className="main-header">
            <Navbar />
            <Header/>
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

export default withLayouMain;
