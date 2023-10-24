import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";

function createData(name: string, quantity: number) {
  return { name, quantity };
}

const rows = [createData("Quảng cáo 1", 5)];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>Tên quảng cáo *</TableCell>
            <TableCell align="left">Số lượng</TableCell>

            <TableCell align="right">
              <Button variant="outlined">+ Thêm</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="description"
                  variant="standard"
                  className="w-full"
                  value={row.name}
                />
              </TableCell>
              <TableCell align="left">
                {" "}
                <TextField
                  id="description"
                  variant="standard"
                  className="w-full"
                  value={row.quantity}
                />
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
