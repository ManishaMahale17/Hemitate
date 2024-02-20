import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
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
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTrLeave,getTrLeaves,addTrLeave } from "../Action";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import TrainerLeaveForm from "./TrainerLeaveForm";

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
const TrainerLeaves = ({ getTrLeaves, LeaveData, deleteTrLeave }) => {
  const actionList = {
    Add: "Add",
    Edit: "Edit",
    View: "View",
  };
  const [trainerleaves, setTrainerLeaves] = useState(LeaveData);
  const [open, setOpen] = useState(false);
  const initialValue = {
    id: "",
    trainerid: "",
    trainername: "",
    startdate: "",
    enddate: "",
    leavetype: "",
    reason: "",
    totalleaves:"",
    pending:"",
    totaltaken:"",
  };
  const [selectedLeave, setselectedLeave] = useState(initialValue);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState(actionList.View);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  useEffect(() => {
    getTrLeaves();
  }, []);
  useEffect(() => {
    if (LeaveData !== trainerleaves) {
      setTrainerLeaves([...LeaveData]);
    }
  }, [LeaveData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openAddLeave = () => {
    setAction(actionList.Add);
    handleOpen();
  };

  const viewLeave = (course) => {
    setAction(actionList.View);
    setselectedLeave(course);
    handleOpen();
  };

  const editLeave = (course) => {
    setAction(actionList.Edit);
    setselectedLeave(course);
    handleOpen();
  };

  const removeLeave = (id) => {
    if (window.confirm(`Are You Sure Want To Delete Data?`)) {
      deleteTrLeave(id);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "200px",
        }}
      >
        <button className=" btn btn-primary" onClick={() => openAddLeave()}>
          + Add Leave
        </button>

        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "300px", height: "30px", marginRight: "50px" }}
        />
      </div>
      <div>
        <TableContainer
          component={Paper}
          style={{ width: 1200, marginTop: 70, marginLeft: 400 }}
        >
          <Table sx={{ width: "1200" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Sr.No</StyledTableCell>
                <StyledTableCell align="center">Tainer Name</StyledTableCell>
                <StyledTableCell align="center">Start Date</StyledTableCell>
                <StyledTableCell align="center">End Date</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {trainerleaves
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
                    : trainerleaves.length
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

                      <StyledTableCell align="center" spacing={2}>
                        <button className="btn" onClick={() => viewLeave(val)}>
                          <VisibilityIcon color="primary" />
                        </button>
                        <button className="btn" onClick={() => editLeave(val)}>
                          <EditIcon style={{ color: 'blue' }} />
                        </button>

                        <button
                          type="button"
                          className="btn"
                          onClick={() => removeLeave(val.id)}
                        >
                          <DeleteIcon style={{ color: 'red' }} />
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[3, 5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={trainerleaves.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        <Modal open={open} onClose={handleClose}>
          {selectedLeave && (
            <Box
              sx={{
                ...style,
                width: "80%",
                maxWidth: "700px",
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
              <Typography
                variant="h6"
                component="h2"
                mb={2}
                sx={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color:
                    action === actionList.Edit
                      ? "blue"
                      : action === actionList.Add
                      ? "blue"
                      : "blue",
                }}
              >
                {action === actionList.Edit
                  ? "Edit Leave"
                  : action === actionList.Add
                  ? "Add Leave"
                  : "Leave Details"}
              </Typography>

              {action === actionList.View ? (
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
                        <TableCell component="th">Reason:</TableCell>
                        <TableCell>{selectedLeave.reason}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th">Total Leaves:</TableCell>
                        <TableCell>{selectedLeave.totalleaves}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th">Pending Leaves:</TableCell>
                        <TableCell>{selectedLeave.pending}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th">Total Taken:</TableCell>
                        <TableCell>{selectedLeave.totaltaken}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : action === actionList.Edit ? (
                <TrainerLeaveForm
                  course={selectedLeave}
                  action={action}
                  actionList={actionList}
                  handleClose={handleClose}
                />
              ) : (
                <TrainerLeaveForm
                  course={initialValue}
                  action={action}
                  actionList={actionList}
                  handleClose={handleClose}
                />
              )}
            </Box>
          )}
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  LeaveData: state.TrainerLeaveStore.trainerleaves,
  singleLeave: state.singleLeave,
});

const mapDispatchToProps = (dispatch) => ({
  getTrLeaves: () => dispatch(getTrLeaves()),
  deleteTrLeave: (id) => dispatch(deleteTrLeave(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TrainerLeaves);