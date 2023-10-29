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
  });
  const [submit, setSubmit] = useState<boolean>(false);

  const [data, setData] = useState<Campaign>({
    information: { name: "", describe: "" },
    subCampaigns: [
      {
        name: "Chiến dịch con 1",
        status: true,
        sum: 0,
        ads: [
          {
            id: 1,
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

  let checkQuantity = data.subCampaigns.map((sub: any) =>
    sub.ads.find((a: any) => a.quantity === 0)
  );

  const handleSubmit = () => {
    // alert("Thêm thành công chiến dịch <3" + JSON.stringify(data));
    setSubmit(true);

    let check = checkQuantity.find((val) => val?.quantity === 0);
    if (data.information.name === "") {
      alert("Thông tin chưa được nhập đầy đủ!");
      return setFormValidate({
        ...formValidate,
        name: {
          error: true,
          errorMessage: "Vui lòng nhập tên chiến dịch!",
        },
      });
    } else if (typeof check === "object") {
      alert("Số lượng quảng cáo chiến dịch con phải > 0!");
    } else {
      alert("Thêm thành công chiến dịch <3" + JSON.stringify(data));
    }
  };

  return (
    <>
      <Button variant="outlined" style={{ margin: 16 }} onClick={handleSubmit}>
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
              submit={submit}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
