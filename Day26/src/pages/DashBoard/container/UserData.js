import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { getUserData, RemoveUser } from '../Action';
import { connect } from "react-redux";
import { getUserData, deleteUser } from "../Action";
import { Link } from "react-router-dom";
import TablePagination from '@mui/material/TablePagination';

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

// component code start here
const UserData = ({ loaduser, UserData }) => {
  //pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  //pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };



  const [users, setUser] = useState([]);

  useEffect(() => {
    loaduser();
    return () => {
      // console.log("componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    setUser([...UserData]);
  }, [UserData.length > 0]);

  // useEffect(()=>{
  // setUser([...UserData]);
  // },[]) 


  return (
    <div>
    
      <div className="TableSet">
        <div className="container" style={{width:900,marginTop:70,marginRight:200}}>
          <TableContainer component={Paper}>
            <Table
              sx={{ width: "100%",}}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Sr.No</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Email Id</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
        <TableBody>
        {(rowsPerPage > 0
              ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : users
            ).map((val, index) => (
                    <StyledTableRow key={val.id}>
                      <StyledTableCell align="center">
                        {index + 1 + page * rowsPerPage}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {val.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {val.email}
                      </StyledTableCell>
                      {/* <StyledTableCell align="center">
                    {val.password}
                  </StyledTableCell>
                        */}
                      <StyledTableCell align="center" spacing={2}>
                        
                        <Link to={`/edit/${val.id}`} className="btn">
                          <EditIcon />
                        </Link>
                        |
                        <Link
                          onClick={deleteUser(val.id)} className="btn"
                        >
                          <DeleteOutlineIcon />
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
          rowsPerPageOptions={[3, 6, 15, { label: 'All', value: -1 }]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  UserData: state.userStore.userlist,
});
const mapDispatchToProps = (dispatch) => ({
  loaduser: () => dispatch(getUserData()),
  // deleteUser: () => dispatch(deleteUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserData);
