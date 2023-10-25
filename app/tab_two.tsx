import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TableAdvertisement from "./table_advertisement";
import EnhancedTable from "./test";
import Checkbox from "@mui/material/Checkbox";

const TabTwo = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [campaign, setCampaign] = useState<any>({
    name: "Chiến dịch con 1",
    active: false,
  });
  const [campaignsArray, setCampaignsArray] = useState<any>([
    { name: "Chiến dịch con 1", active: false },
  ]);
  const [number, setNumber] = useState<any>(1);
  const [indexActive, setIndexActive] = useState<number>(0);

  const handleAddCampaign = () => {
    setCampaignsArray([
      ...campaignsArray,
      { name: `Chiến dịch con ${number + 1}`, active: false },
    ]);
    setCampaign({ name: `Chiến dịch con ${number + 1}`, active: false });
    setNumber(number + 1);
    setIndexActive(campaignsArray.length);
  };

  const handleActive = (campaign: any, index: any) => {
    setIndexActive(index);
    setCampaign(campaign);
  };
  // console.log(campaign);

  const handleToggle = () => {
    // setChecked(!checked);
    setCampaign({
      name: campaign?.name,
      active: !campaign.active,
    });
  };

  const changNameCampaign = (e: any) => {
    setCampaign({
      name: e.target.value,
      active: campaign.active,
    });
  };

  return (
    <div>
      <div className="flex mb-4">
        {/* {console.log(campaignsArray)} */}
        <i
          className="p-3 rounded-full bg-slate-200 h-full"
          onClick={handleAddCampaign}
        >
          <AddIcon style={{ color: "#f50057" }} />
        </i>
        {campaignsArray.map((campaign: any, index: any) => (
          <Card
            key={index}
            className={
              indexActive === index ? "ml-4  actived" : "ml-4 cursor-pointer"
            }
            onClick={() => handleActive(campaign, index)}
          >
            <CardContent>
              <div className="flex items-center">
                <Typography variant="h5" component="div">
                  {campaign.name}
                </Typography>
                <i className={campaign.active ? " ml-2 icon_checked" : "ml-2"}>
                  <CheckCircleIcon style={{ fontSize: 18 }} />
                </i>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex">
        <TextField
          id="name"
          label="Tên chiến dịch con *"
          variant="standard"
          className="w-3/4"
          defaultValue={campaign?.name}
          onChange={changNameCampaign}
        />
        <div className="flex justify-center items-center  ml-4">
          <Checkbox checked={campaign?.active} onChange={handleToggle} />
          <span>Đang hoạt động</span>
        </div>
      </div>

      <h1 className="mt-8 text-2xl">DANH SÁCH QUẢNG CÁO</h1>
      <div className="table_container mt-4">
        <TableAdvertisement />
        {/* <EnhancedTable /> */}
      </div>
    </div>
  );
};

export default TabTwo;
