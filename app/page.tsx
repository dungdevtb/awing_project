"use client";

import React, { useState } from "react";
import { Box, Tab, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Campaign, FormValidate } from "./types/interface";
import InfoCampaign from "./components/infoCampaign";
import ManageCampaign from "./components/manageCampaign";

export default function LabTabs() {
  const [value, setValue] = useState<string>("2");
  const [formValidate, setFormValidate] = useState<FormValidate>({
    name: {
      error: false,
      errorMessage: "Vui lòng nhập tên chiến dịch!",
    },
    quantity: {
      error: false,
      errorMessage: "Vui lòng nhập số lượng > 0!",
    },
    nameSubCampaign: {
      class: "",
    },
  });

  const [data, setData] = useState<Campaign>({
    information: { name: "", describe: "" },
    subCampaigns: [
      {
        name: "Chiến dịch con 1",
        status: true,
        ads: [
          {
            name: "Quảng cáo 1",
            quantity: 0,
          },
        ],
      },
    ],
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // console.log(data.subCampaigns.length);

  const handleSubmit = () => {
    // alert("Thêm thành công chiến dịch <3" + JSON.stringify(data));
    if (data.information.name === "") {
      alert("Thông tin chưa được nhập đầy đủ!");
      return setFormValidate({
        ...formValidate,
        name: {
          error: true,
          errorMessage: "Vui lòng nhập tên chiến dịch!",
        },
        quantity: {
          error: true,
          errorMessage: "Vui lòng nhập số lượng > 0!",
        },
        nameSubCampaign: {
          class: "text-red-500",
        },
      });
    }
    // if (data.information.name === "") {
    //   alert("Tên chiến dịch chưa được nhập đầy đủ!");
    //   setFormValidate({
    //     ...formValidate,
    //     name: {
    //       error: true,
    //       errorMessage: "Vui lòng nhập tên chiến dịch!",
    //     },
    //   });
    // } else if (data.subCampaigns.length === 0) {
    //   alert("Thông tin chiến dịch con chưa được nhập đầy đủ!");
    //   setFormValidate({
    //     ...formValidate,
    //     quantity: {
    //       error: true,
    //       errorMessage: "Vui lòng nhập số lượng > 0!",
    //     },
    //     nameSubCampaign: {
    //       class: "text-red-500",
    //     },
    //   });
    // } else {
    //   alert("Thêm thành công chiến dịch <3" + JSON.stringify(data));
    // }
  };

  return (
    <>
      <Button
        variant="outlined"
        className="m-4 flex justify-end"
        onClick={handleSubmit}
      >
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
            <InfoCampaign
              formValidate={formValidate}
              setFormValidate={setFormValidate}
              data={data}
              setData={setData}
            />
          </TabPanel>
          <TabPanel value="2">
            <ManageCampaign
              data={data}
              setData={setData}
              formValidate={formValidate}
              setFormValidate={setFormValidate}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
