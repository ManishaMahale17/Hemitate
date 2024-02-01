import React, { useEffect, useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { deleteLeave, getLeaves } from "../Action";
import CloseIcon from "@mui/icons-material/Close";
import { Get, Delete } from "../../../service/HttpService";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import { Dialog,DialogTitle,DialogContent } from "@mui/material";


// ==============================================This Is Only Style Section=====================
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
};

//Main function start
const Leaves = ({ getLeaves, Leave }) => {
  const [leaves, setLeaves] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedLeave, setselectedLeave] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate=useNavigate();

  const handleOpen = (course) => {
    setselectedLeave(course);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getLeaves();
    return () => {
      // console.log("compnentWilUnMount");
    };
  }, [getLeaves]);

  useEffect(() => {
    setLeaves([...Leave]);
  }, [Leave.length > 0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
     
     <div style={{display:"flex" , justifyContent:'space-around',marginLeft:'200px'}}>
      <Link
        to="/LeaveForm"
        className="btn btn-outline-dark"
       
      >
        + Add Leave
      </Link>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '200px' ,height:'30px',marginRight:'100px'}}
        />
      
   
      </div>
      {/* ================Table Start================== */}
      
      <div>
        <TableContainer component={Paper} style={{width:900,marginTop:70,marginLeft:400}}>
          <Table sx={{ width: "100" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Sr.No</StyledTableCell>
                <StyledTableCell align="center">TrainerName</StyledTableCell>
                <StyledTableCell align="center">Start Date</StyledTableCell>
                <StyledTableCell align="center">End Date</StyledTableCell>
                <StyledTableCell align="center">Leave Type</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>

           
            <TableBody>
              {leaves
                .filter((data) =>
                  Object.values(data).some((value) =>
                    value
                      .toString()
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                )
                .slice(
                  rowsPerPage > 0 ? page * rowsPerPage : 0,
                  rowsPerPage > 0
                    ? page * rowsPerPage + rowsPerPage
                    : leaves.length
                )
                .map((val, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {val.trainername}
                      </StyledTableCell>
                       <StyledTableCell align="center">
                        {val.startdate}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {val.enddate}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {val.leavetype}
                      </StyledTableCell>

                      <StyledTableCell align="center" spacing={2}>
                        <button className="btn" onClick={() => handleOpen(val)}>
                          <VisibilityIcon />
                        </button>
                        <Link to={`/editHoliday/${val.id}`}>
                          <button className="btn">
                            <EditIcon />
                          </button>
                        </Link>
                      
                        <button
                          type="button"
                          className="btn"
                          onClick={deleteLeave(val.id)}
                        >
                          <DeleteIcon />
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
           
          </Table>
          <TablePagination
          rowsPerPageOptions={[3,5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={leaves.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </TableContainer>

       

        {/* ============ Model Start============ */}
        <Modal open={open} onClose={handleClose}>
          {selectedLeave && (
            <Box
              sx={{
                ...style,
                width: "80%",
                maxWidth: "600px",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" component="h2" mb={2}  style={{ fontWeight: 'bold' }}>
                Leaves Details
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                  <TableRow>
                      <TableCell component="th">Trainer Id:</TableCell>
                      <TableCell>{selectedLeave.trainerid}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th">Leave Type:</TableCell>
                      <TableCell>{selectedLeave.leavetype}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th">ReasonFor Leave:</TableCell>
                      <TableCell>{selectedLeave.reason}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Modal>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
    Leave: state.LeaveStore.leaves,
    singleLeave: state.singleLeave,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getLeaves: () => dispatch(getLeaves()),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Leaves);


