import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  getStudents } from '../Action';
import { submitData } from '../Action';
import { deleteStudents } from '../Action';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';




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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
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


const StudentList = ({ getStudents, StudentList }) => {
  const [students, setStudents] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState([])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleOpen = (course) => {
    setSelectedStudent(course);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);


  

  useEffect(() => {
    getStudents();
    return () => {
      console.log("ComponentWillUnmount")
    }
  }, [])
  useEffect(() => {
    setStudents([...StudentList])
  }, [StudentList.length > 0])

  useEffect(()=>{
    setStudents([...StudentList])

  })



  return (
      <div >
  
      <div style={{display:"flex" , justifyContent:'space-around',marginRight:'100px'}}>
      <Link to="studentform" className='mt-4 ' variant="contained"><AddIcon /> Add Student </Link>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '200px' ,height:'30px',marginRight:'100px'}}
          // style={{marginTop:"10px",marginLeft:"10px"}}
        />
       
      </div >
     <div className='tableSet mt-5'>
     <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell> */}
              <StyledTableCell align="center">PRN</StyledTableCell>
              <StyledTableCell align="center">NAME</StyledTableCell>
              {/* <StyledTableCell align="right">CONTACT</StyledTableCell> */}
              <StyledTableCell align="center">EMAIL-ID</StyledTableCell>
              {/* <StyledTableCell align="right">DOB</StyledTableCell> */}
              <StyledTableCell align="center">GENDER</StyledTableCell>
              {/* <StyledTableCell align="right">AGE</StyledTableCell> */}
              {/* <StyledTableCell align="right">Address</StyledTableCell> */}
              <StyledTableCell align="center">QUALIFICATION</StyledTableCell>
              {/* <StyledTableCell align="right">COURSE</StyledTableCell> */}
              {/* <StyledTableCell align="right">BATCH-TYPE</StyledTableCell> */}
              {/* <StyledTableCell align="right">BATCHNAME</StyledTableCell> */}
              {/* <StyledTableCell align="right">DOJ</StyledTableCell> */}
              <StyledTableCell align="center">ACTION</StyledTableCell>


            </TableRow>
          </TableHead>

          <TableBody>
            {students
              .filter((data) =>
                Object.values(data).some((value) =>
                  value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
              )
              .slice(
                rowsPerPage > 0
                  ? page * rowsPerPage
                  : 0,
                rowsPerPage > 0 ? page * rowsPerPage + rowsPerPage : students.length
              )
              .map((data, index) => {
                return <StyledTableRow key={data.id}>
                  <StyledTableCell component="th" scope="row">{index + 1+page * rowsPerPage}</StyledTableCell>
                  <StyledTableCell align="center">{data.prn}</StyledTableCell>
                  <StyledTableCell align="center">{data.name}</StyledTableCell>
                  {/* <StyledTableCell align="right">{data.contact}</StyledTableCell> */}
                  <StyledTableCell align="center">{data.emailId}</StyledTableCell>
                  {/* <StyledTableCell align="right">{data.dob}</StyledTableCell> */}
                  <StyledTableCell align="center">{data.gender}</StyledTableCell>
                  {/* <StyledTableCell align="right">{data.age}</StyledTableCell> */}
                  {/* <StyledTableCell align="right">{data.address}</StyledTableCell> */}
                  <StyledTableCell align="center">{data.qualification}</StyledTableCell>
                  {/* <StyledTableCell align="right">{data.course}</StyledTableCell> */}
                  {/* <StyledTableCell align="right">{data.batchType}</StyledTableCell> */}
                  {/* <StyledTableCell align="right">{data.batchName}</StyledTableCell> */}
                  {/* <StyledTableCell align="right">{data.doj}</StyledTableCell> */}
                  <StyledTableCell align="center" >
                    <Button className='btn btn-outline-primary' onClick={() => handleOpen(data)}> <VisibilityOutlinedIcon /></Button>
                    <Link to={`/editform/${data.id}`} className='btn btn-outline-primary'><EditCalendarOutlinedIcon /></Link>
                    <Button className="btn btn-outline-primary" onClick={deleteStudents(data.id)}><DeleteOutlineIcon /></Button>
                  </StyledTableCell>
                </StyledTableRow>
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={students.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
     </div>
      {/* ============ Model Start============ */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {selectedStudent && (
          <Box sx={{...style,width:'60%',maxWidth:'600px',padding:'50px',borderRadius:'20px'}}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Details of Students
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <table className='fs-5'>
                <tr><th>Id:</th> <th>{selectedStudent.id}</th></tr>
                <tr> <th>PRN:-&nbsp;</th> <th>{selectedStudent.prn}</th></tr>
                <tr><th>Name:-&nbsp;</th> <th>{selectedStudent.name}</th></tr>
                <tr><th>Contact:-&nbsp;</th> <th>{selectedStudent.contact}</th></tr>
                <tr><th>EmailId:-&nbsp;</th> <th>{selectedStudent.emailId}</th></tr>
                <tr><th>DOB:-&nbsp;</th> <th>{selectedStudent.dob}</th></tr>
                <tr><th>Gender:-&nbsp;</th> <th>{selectedStudent.gender}</th></tr>
                <tr><th>Age:-&nbsp;</th> <th>{selectedStudent.age}</th></tr>
                <tr><th>Address:-&nbsp;</th> <th>{selectedStudent.address}</th></tr>
                <tr><th>Qualification:-&nbsp;</th> <th>{selectedStudent.qualification}</th></tr>
                <tr><th>Course:-&nbsp;</th> <th>{selectedStudent.course}</th></tr>
                <tr><th>BatchType:-&nbsp;</th> <th>{selectedStudent.batchType}</th></tr>
                <tr><th>BatchName:-&nbsp;</th> <th>{selectedStudent.batchName}</th></tr>
                <tr><th>DOJ:-&nbsp;</th> <th>{selectedStudent.doj}</th></tr>

              </table>
            </Typography>
          </Box>
        )}
      </Modal>

    </div>
  );
}
//convert state into props
const mapStateToProps = (state) => ({
  StudentList: state.studentStore.students
})

//convrt actions into props
const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudents()),
  deleteStudents: () => dispatch(deleteStudents())

})
// export default StudentList;
export default connect(mapStateToProps, mapDispatchToProps)(StudentList)