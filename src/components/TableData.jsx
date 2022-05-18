import {
  Button,
  IconButton,
  Skeleton,
  TablePagination,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import staffApi from "../api/staffApi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.colorGreen2.main,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableData = ({
  idSelected,
  listData,
  defineContent,
  setIdSelector,
  typeData,
}) => {
  const dispatch = useDispatch();
  // const idSelected = data.idStaffSelected;
  // const listStaff = data.listStaff;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    let newIdSelector = listData[newPage * rowsPerPage];
    setIdSelector(dispatch, newIdSelector);
  };

  const handleClickRow = (e) => {
    const id = e.target.id;
    setIdSelector(dispatch, +id);
  };
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">STT</StyledTableCell>
              {defineContent.map((item) => (
                <StyledTableCell align="center">{item.title}</StyledTableCell>
              ))}
              <StyledTableCell align="center">Chi tiết</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row, index) => {
                return (
                  <StyledTableRow
                    key={index}
                    sx={
                      +idSelected === row[`id${typeData}`]
                        ? { border: "3px solid", borderColor: "greenDark.main" }
                        : ""
                    }
                  >
                    <StyledTableCell align="center">
                      {index + 1}
                    </StyledTableCell>
                    {defineContent.map((item) => (
                      <StyledTableCell align="center">
                        {row[item.key]}
                      </StyledTableCell>
                    ))}
                    <StyledTableCell align="center">
                      <Button
                        color="colorGreen1"
                        size="small"
                        variant="outlined"
                        onClick={handleClickRow}
                        id={row[`id${typeData}`]}
                        sx={{ pr: 0.2, pl: 0.2, color: "primary.main" }}
                      >
                        Xem
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2]}
        component="div"
        count={listData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default TableData;
