import React, { useState } from "react";
import {
  Typography,
  Checkbox,
  Tooltip,
  IconButton,
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface EnhancedTableProps {
  numSelected: number;
  rowCount: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
  handleDeleteAll: () => void;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    numSelected,
    rowCount,
    onAddClick,
    handleDeleteAll,
  } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {numSelected > 0 ? (
          <>
            <TableCell className="flex justify-between">
              <Typography
                sx={{ flex: "1 1 100%" }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
                {numSelected} đã chọn
              </Typography>
              <Tooltip title="Xóa">
                <IconButton onClick={handleDeleteAll}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
            <TableCell></TableCell>
          </>
        ) : (
          <>
            <TableCell>Tên quảng cáo *</TableCell>
            <TableCell align="left">Số lượng *</TableCell>
          </>
        )}

        <TableCell align="right">
          <Button variant="outlined" onClick={onAddClick}>
            + Thêm
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function TableAdvertisement({
  campaign,
  indexActive,
  campaignsArray,
  setCampaignsArray,
}: any) {
  const [number, setNumber] = useState<any>(1);
  const [selected, setSelected] = React.useState<readonly number[]>([]);

  const handleAddAdvertise = () => {
    campaignsArray[indexActive].list_advertise.push({
      id: number + 1,
      name: `Quảng cáo ${campaign.list_advertise.length + 1}`,
      quantity: 0,
    });

    setNumber(number + 1);
  };

  const handleDeleteAdvertise = (index: any) => {
    setCampaignsArray(
      campaignsArray.map((cam: any) => {
        cam.list_advertise.splice(index, 1);
        return cam;
      })
    );
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = campaignsArray[indexActive].list_advertise.map(
        (n: any) => n.id
      );
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const handleDeleteAll = () => {
    setCampaignsArray(
      campaignsArray.map((cam: any) => {
        cam.list_advertise.splice(0);
        return cam;
      })
    );
    setSelected([]);
  };

  const handleChangeQuantity = (event: any, index: number) => {
    campaignsArray[indexActive].list_advertise[index].quantity = Number(
      event.target.value
    );

    setCampaignsArray(
      campaignsArray.map((item: any, index: any) => {
        if (index === indexActive) {
          item.sum = campaignsArray[indexActive].list_advertise.reduce(
            (acc: any, item: any) => acc + Number(item.quantity),
            0
          );
        }
        return item;
      })
    );
  };

  const handleSelectAddvertise = (event: any, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <EnhancedTableHead
          numSelected={selected.length}
          onAddClick={handleAddAdvertise}
          onSelectAllClick={handleSelectAllClick}
          handleDeleteAll={handleDeleteAll}
          rowCount={campaignsArray[indexActive].list_advertise.length}
        />

        <TableBody>
          {campaign.list_advertise.map((item: any, index: number) => {
            const isItemSelected = isSelected(item.id);

            return (
              <TableRow
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={item.id}
                role="checkbox"
                hover
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    onChange={(e) => handleSelectAddvertise(e, item.id)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <TextField
                    variant="standard"
                    className="w-full"
                    defaultValue={item.name}
                    onChange={(e) => (item.name = e.target.value)}
                  />
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <TextField
                    id="quantity"
                    variant="standard"
                    className="w-full"
                    type="number"
                    InputProps={{
                      inputProps: {
                        max: 100,
                        min: 0,
                      },
                    }}
                    defaultValue={item.quantity}
                    onChange={(e) => handleChangeQuantity(e, index)}
                  />
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Xóa">
                    <IconButton onClick={() => handleDeleteAdvertise(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
