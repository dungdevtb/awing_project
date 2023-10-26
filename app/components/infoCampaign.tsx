import React from "react";
import TextField from "@mui/material/TextField";

const InfoCampaign = () => {
  return (
    <div>
      <TextField
        id="name"
        label="Tên chiến dịch *"
        variant="standard"
        fullWidth
        className="mb-4"
      />
      <TextField id="description" label="Mô tả" variant="standard" fullWidth />
    </div>
  );
};

export default InfoCampaign;
