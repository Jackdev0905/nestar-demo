import { Stack } from "@mui/material";
import Head from "next/head";

const withLayouMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>

        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>Header Home</Stack>

          <Stack id="main">
            <Component {...props} />
          </Stack>
        </Stack>

        <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
      </>
    );
  };
};

export default withLayouMain;
