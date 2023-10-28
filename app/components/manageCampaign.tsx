import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Checkbox,
} from "@mui/material";

import TableAdvertisement from "./table_advertisement";
import { Campaign, FormValidate, SubCampaigns } from "../types/interface";

export interface subCampaignsProps {
  data: Campaign;
  setData: (data: any) => void;
  formValidate: FormValidate;
  setFormValidate: (formValidate: any) => void;
}

const ManageCampaign = ({
  data,
  setData,
  formValidate,
  setFormValidate,
}: subCampaignsProps) => {
  const [campaignsArray, setCampaignsArray] = useState<Array<SubCampaigns>>([
    {
      name: "Chiến dịch con 1",
      status: false,
      sum: 0,
      ads: [
        {
          id: 1,
          name: "Quảng cáo 1",
          quantity: 0,
        },
      ],
    },
  ]);
  const [number, setNumber] = useState<number>(1);
  const [indexActive, setIndexActive] = useState<number>(0);

  const handleAddCampaign = () => {
    setCampaignsArray([
      ...campaignsArray,
      {
        name: `Chiến dịch con ${number + 1}`,
        status: false,
        sum: 0,
        ads: [
          {
            id: 1,
            name: "Quảng cáo 1",
            quantity: 0,
          },
        ],
      },
    ]);
    setNumber(number + 1);
    setIndexActive(campaignsArray.length);
    setData({
      ...data,
      subCampaigns: campaignsArray,
    });
  };

  const handleChangeName = (e: any) => {
    setCampaignsArray(
      campaignsArray.map((item: any, index: any) => {
        if (index === indexActive) {
          item.name = e.target.value;
        }
        return item;
      })
    );
    setData({
      ...data,
      subCampaigns: campaignsArray,
    });
  };

  const handleChangeActive = (e: any) => {
    setCampaignsArray(
      campaignsArray.map((item: any, index: any) => {
        if (index === indexActive) {
          item.status = e.target.checked;
        }
        return item;
      })
    );
    setData({
      ...data,
      subCampaigns: campaignsArray,
    });
  };

  // console.log(campaignsArray);
  console.log(data);

  return (
    <div>
      <div className="flex mb-4">
        <i
          className="p-3 rounded-full bg-slate-200 h-full"
          onClick={handleAddCampaign}
        >
          <AddIcon style={{ color: "#f50057" }} />
        </i>
        {campaignsArray.map((item: any, index: any) => (
          <Card
            key={index}
            className={
              indexActive === index ? "ml-4  actived" : "ml-4 cursor-pointer"
            }
            onClick={() => setIndexActive(index)}
          >
            <CardContent>
              <div className="flex items-center">
                <Typography
                  variant="h5"
                  component="div"
                  className={formValidate.nameSubCampaign.class}
                >
                  {item.name}
                </Typography>

                <i className={item.status ? " ml-2 icon_checked" : "ml-2"}>
                  <CheckCircleIcon style={{ fontSize: 18 }} />
                </i>
              </div>
              <div className="flex items-center justify-center mt-4">
                <Typography variant="h5" component="div">
                  {campaignsArray[index].sum}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {campaignsArray.map((item: any, index: number) => {
        if (index === indexActive) {
          return (
            <div className="flex" key={index}>
              <TextField
                id="name"
                label="Tên chiến dịch con *"
                variant="standard"
                className="w-3/4"
                value={item?.name}
                onChange={handleChangeName}
              />
              <div className="flex justify-center items-center  ml-4">
                <Checkbox
                  defaultChecked={item?.status}
                  onChange={handleChangeActive}
                />
                <span>Đang hoạt động</span>
              </div>
            </div>
          );
        }
      })}

      <h1 className="mt-8 text-2xl">DANH SÁCH QUẢNG CÁO</h1>
      <div className="table_container mt-4">
        {campaignsArray.map((item: any, index: number) => {
          if (index === indexActive) {
            return (
              <>
                <TableAdvertisement
                  campaign={item}
                  indexActive={indexActive}
                  campaignsArray={campaignsArray}
                  setCampaignsArray={setCampaignsArray}
                  data={data}
                  setData={setData}
                  formValidate={formValidate}
                  setFormValidate={setFormValidate}
                />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ManageCampaign;
