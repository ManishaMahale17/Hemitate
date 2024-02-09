import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { getCourses, deleteCourses } from "../Action";
import { connect, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";


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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Course = ({ getCourses, Course }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // const navigate = useNavigate();
  // const [open, setOpen] = useState(false);
  // const [selectedCourse, setSelectedCourse] = useState([]);

  // ==================vision====================
  const handleOpen = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    getCourses();
    return () => {
      // console.log("componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    setCourses([...Course]);
  }, [Course.length > 0]);

  useEffect(() => {
    setCourses([...Course]);
  });

  // useEffect(() => {
  //   dispatch(deleteCourseSuccess(id));
  // }, [dispatch, id]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent:"space-around",
          marginLeft: "200px",
        }}
      >
        <Link to="/courseform" className="btn btn-outline-dark mt-4 ms-5">
          <AddCardIcon />
          Add Course
        </Link>

        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "250px", height: "30px", marginRight: "100px" }}
          margin="normal"
        />
      </div>

      <div className="tableSet mt-4" >
        <TableContainer component={Paper} style={{width:900,marginTop:70,marginLeft:400}}>
          <Table sx={{ width: "100%"}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Course_Name</StyledTableCell>
                <StyledTableCell align="center">Duration</StyledTableCell>
                <StyledTableCell align="center">Fees</StyledTableCell>
                <StyledTableCell align="center">Trainer</StyledTableCell>
                <StyledTableCell align="center">Description</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {courses
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
                    : courses.length
                )
                .map((data, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {index + 1 + page * rowsPerPage}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.coursename}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.duration}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.fees}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.trainer}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Link
                        to={`/courseedit/${data.id}`}
                        className="btn ms-2"
                      >
                        <EditIcon />
                      </Link>

                      <button
                        onClick={() => handleOpen(data)}
                        type="button"
                        className="btn ms-2"
                      >
                        < VisibilityIcon />
                      </button>

                      <button
                        type="button"
                        className="btn ms-2"
                        onClick={deleteCourses(data.id)}
                      >
                         <DeleteIcon />
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={courses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            color="primary"
          />
        </TableContainer>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {selectedCourse && (
          <Box
            sx={{
              ...style,
              width: "60%",
              maxWidth: "600px",
              padding: "50px",
              borderRadius: "20px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontWeight: "bold", color: "black" }}
            >
              Details of Course
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <table className="fs-6 ">
                <tr>
                  <th>Id:</th> <th>{selectedCourse.id}</th>
                </tr>
                <tr>
                  <th>Name:</th> <th>{selectedCourse.coursename}</th>
                </tr>
                <tr>
                  <th>Duration:</th> <th>{selectedCourse.duration}</th>
                </tr>
                <tr>
                  <th>Fees:</th> <th>{selectedCourse.fees}</th>
                </tr>
                <tr>
                  <th>Trainer:</th> <th>{selectedCourse.trainer}</th>
                </tr>
                <tr>
                  <th>Description:</th> <th>{selectedCourse.description}</th>
                </tr>
              </table>
            </Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  Course: state.CourseStore.courses,
});

const mapDispatchToProps = (dispatch) => ({
  getCourses: () => dispatch(getCourses()),
  // deleteCourses : ()=> dispatch(deleteCourses())
});
// export default Course;
// export default connect(mapStateToProps, mapDispatchToProps)(Course);
export default connect(mapStateToProps, mapDispatchToProps)(Course);
