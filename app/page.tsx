"use client";

import React, { useState } from "react";
import { Box, Tab, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import InfoCampaign from "./components/infoCampaign";
import ManageCampaign from "./components/manageCampaign";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function LabTabs() {
  const [value, setValue] = useState<any>("2");
  const [formValidate, setFormValidate] = useState<any>({
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

  const [data, setData] = useState<any>({
    infoCampaign: { name: "", desc: "" },
    manageCampaign: [],
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    if (data.infoCampaign.name === "" && data.manageCampaign.length === 0) {
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
    if (data.infoCampaign.name === "") {
      alert("Tên chiến dịch chưa được nhập đầy đủ!");
      setFormValidate({
        ...formValidate,
        name: {
          error: true,
          errorMessage: "Vui lòng nhập tên chiến dịch!",
        },
      });
    } else if (data.manageCampaign.length === 0) {
      alert("Thông tin chiến dịch con chưa được nhập đầy đủ!");
      setFormValidate({
        ...formValidate,

        quantity: {
          error: true,
          errorMessage: "Vui lòng nhập số lượng > 0!",
        },
        nameSubCampaign: {
          class: "text-red-500",
        },
      });
    } else {
      alert("Thêm thành công chiến dịch <3" + JSON.stringify(data));
    }
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
