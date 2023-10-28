import React from "react";
import TextField from "@mui/material/TextField";

const Information = ({ formValidate, setFormValidate, data, setData }: any) => {
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
        defaultValue={data.information.desc}
        onChange={(e) =>
          setData({
            ...data,
            information: {
              ...data.information,
              desc: e.target.value,
            },
          })
        }
      />
    </div>
  );
};

export default Information;
