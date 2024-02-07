import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { deleteBranches, getBranches } from '../Action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';





//styled
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



const BranchList = ({ getBranches, BranchList }) => {
  const [branches, setBranches] = useState([]);
  const [open, setOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState([])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');




  //get operation
  useEffect(() => {
    getBranches();
    return () => {
      // console.log("componentwillUnmount")
    }
  }, [])

  useEffect(() => {
    setBranches([...BranchList])
  }, [BranchList.length > 0])

  useEffect(()=>{
    setBranches([...BranchList])
  })

  //model
  const handleOpen = (user) => {
    setSelectedBranch(user);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);



  //pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };




  return (
    <div>
      <div className='mt-3' style={{ display: 'flex', justifyContent: 'space-around', marginLeft: "220px", }}>

        <Link to='/branchform' className='btn btn-outline-dark btn-md mb-1 mt-3'>
          < AddOutlinedIcon />Add Branch
        </Link>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '250px', height: '20px', marginRight: '100px', }}
          margin="normal"
        />
      </div>

      <TableContainer component={Paper} className='mt-5' style={{width:950,marginTop:70,marginLeft:400}}>
        <Table sm={{ maxWidth:"100%" }} aria-label="customized table" >
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Sr.No</StyledTableCell>
              <StyledTableCell align="center">Branch Code</StyledTableCell>
              <StyledTableCell align="center">Branch Name</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">Mobile</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches
              .filter((data) =>
                Object.values(data).some((value) =>
                  value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
              )
              .slice(
                rowsPerPage > 0
                  ? page * rowsPerPage
                  : 0,
                rowsPerPage > 0 ? page * rowsPerPage + rowsPerPage : branches.length
              )
              .map((data, index) => (
                <StyledTableRow key={data.id}>
                  <StyledTableCell align="center">{index + 1 + page * rowsPerPage}</StyledTableCell>
                  <StyledTableCell align="center">{data.branchCode}</StyledTableCell>
                  <StyledTableCell align="center">{data.branchName}</StyledTableCell>
                  <StyledTableCell align="center">{data.location}</StyledTableCell>
                  <StyledTableCell align="center">{data.mobile}</StyledTableCell>
                  <StyledTableCell align="center">{data.email}</StyledTableCell>
                  <StyledTableCell align="center" spacing={2}>

                    <Link type='button' className='btn' onClick={() => handleOpen(data)} >
                      < VisibilityIcon />
                    </Link>

                    <Link type='button' className='btn' to={`/branchedit/${data.id}`}  >
                      <EditIcon />
                    </Link>


                    <Link type='button' className='btn' onClick={deleteBranches(data.id)} >
                      < DeleteOutlinedIcon />
                    </Link>

                  </StyledTableCell>

                </StyledTableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[3, 6, 15, { label: 'All', value: -1 }]}
          component="div"
          count={branches.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </TableContainer>

      {/* ============ Model Start============ */}
      <Modal
        open={open}
        onClose={handleClose}>
        {selectedBranch && (
          <Box
            sx={{
              ...style,
              width: "80%",
              maxWidth: "600px",
              padding: "20px",
              borderRadius: "10px",
            }}>
              
            <Typography variant="h6" component="h2" mb={2} style={{ fontWeight: 'bold' }}>
              Details of Branch
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>

                  <TableRow>
                    <TableCell component="th">Branch Name:</TableCell>
                    <TableCell>{selectedBranch.branchName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">Branch Code :</TableCell>
                    <TableCell>{selectedBranch.branchCode}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">Enquiry Code :</TableCell>
                    <TableCell>{selectedBranch.enquiryCode}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">Registration Code :</TableCell>
                    <TableCell>{selectedBranch.regCode}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">Location:</TableCell>
                    <TableCell>{selectedBranch.location}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">Mobile:</TableCell>
                    <TableCell>{selectedBranch.mobile}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">Email:</TableCell>
                    <TableCell>{selectedBranch.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th">Status:</TableCell>
                    <TableCell>{selectedBranch.status}</TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>

          </Box>
        )}
      </Modal>

    </div>
  )
}

const mapStateToProps = (state) => ({
  BranchList: state.branchStore.branches
});
//convert actions into props
const mapDispatchToProps = (dispatch) => ({
  getBranches: () => dispatch(getBranches()),

  // deleteBranches: () => dispatch(deleteBranches())

});

export default connect(mapStateToProps, mapDispatchToProps)(BranchList)
