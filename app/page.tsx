"use client";

import * as React from "react";
import { Box, Tab, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TabOne from "./tab_one";
import TabTwo from "./tab_two";

export default function LabTabs() {
  const [value, setValue] = React.useState("2");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Button variant="outlined" className="m-4 flex justify-end">
        Submit
      </Button>
      <div className="underline_container "></div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Thông tin" value="1" />
              <Tab label="Chiến dịch con" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TabOne />
          </TabPanel>
          <TabPanel value="2">
            <TabTwo />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
