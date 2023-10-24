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

const TabTwo = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div className="flex mb-4">
        <i className="p-3 rounded-full bg-slate-200 h-full">
          <AddIcon style={{ color: "#f50057" }} />
        </i>
        <Card sx={{ minWidth: 275 }} className="ml-4">
          <CardContent>
            <div className="flex items-center">
              <Typography variant="h5" component="div">
                Chiến dịch con 1
              </Typography>
              <i className={checked ? " ml-2 icon_checked" : "ml-2"}>
                <CheckCircleIcon style={{ fontSize: 18 }} />
              </i>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex">
        <TextField
          id="description"
          label="Tên chiến dịch con *"
          variant="standard"
          className="w-3/4"
        />

        {checked ? (
          <i onClick={handleToggle}>
            <CheckBoxIcon style={{ color: "#3f51b5" }} />
          </i>
        ) : (
          <i onClick={handleToggle}>
            <CheckBoxOutlineBlankIcon />
          </i>
        )}
        <span className="ml-4">Đang hoạt động</span>
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
