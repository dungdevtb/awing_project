import React from "react";
import TextField from "@mui/material/TextField";

import { Campaign, FormValidate, SubCampaigns } from "../types/interface";

export interface subCampaignsProps {
  data: Campaign;
  setData: (data: any) => void;
  formValidate: FormValidate;
  setFormValidate: (formValidate: any) => void;
}

const Information = ({
  formValidate,
  setFormValidate,
  data,
  setData,
}: subCampaignsProps) => {
  const handleChangeName = (e: any) => {
    setFormValidate({
      ...formValidate,
      name: {
        error: false,
        errorMessage: "",
      },
    });

    setData({
      ...data,
      information: {
        ...data.information,
        name: e.target.value,
      },
    });
  };

  return (
    <div>
      <TextField
        id="name"
        label="Tên chiến dịch *"
        variant="standard"
        fullWidth
        className="mb-4"
        error={formValidate.name.error}
        helperText={
          formValidate.name.error === true ? formValidate.name.errorMessage : ""
        }
        defaultValue={data.information.name}
        onChange={handleChangeName}
      />
      <TextField
        id="description"
        label="Mô tả"
        variant="standard"
        fullWidth
        defaultValue={data.information.describe}
        onChange={(e) =>
          setData({
            ...data,
            information: {
              ...data.information,
              describe: e.target.value,
            },
          })
        }
      />
    </div>
  );
};

export default Information;
