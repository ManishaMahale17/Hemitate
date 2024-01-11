import React, { useEffect, useState } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTrainers } from '../Action';

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

const Trainer = ({getTrainers,Trainer}) => {
  const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        getTrainers();
        return()=>{
            console.log("compnentWilUnMount")
        }
    }, [])

    useEffect(()=>{
        setTrainers([...Trainer])
    },[Trainer.length> 0])
 
  return (
    <div>
    {/* ================Table Start================== */}
    <div className='mt-5'>
    <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} aria-label="customized table">
            <TableHead >
                <TableRow >
                    <StyledTableCell align="center">Sr.No</StyledTableCell>
                    <StyledTableCell align="center">Trainer Name</StyledTableCell>
                    <StyledTableCell align="center">Username</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Contact</StyledTableCell>
                    <StyledTableCell align="center">Expertise Subject</StyledTableCell>
                    <StyledTableCell align="center">Experience</StyledTableCell>
                    <StyledTableCell align="center">Batchsize</StyledTableCell>
                    <StyledTableCell align="center">Batchmode</StyledTableCell>
                    <StyledTableCell align="center">Availability</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>

                </TableRow>
            </TableHead>

            <TableBody>

                {trainers.map((val, index) => {
                   return <StyledTableRow key={index} >
                        <StyledTableCell align='center'>{index + 1}</StyledTableCell>
                        <StyledTableCell align="center">{val.trainername}</StyledTableCell>
                        <StyledTableCell align="center">{val.username}</StyledTableCell>
                        <StyledTableCell align="center">{val.email}</StyledTableCell>
                        <StyledTableCell align="center">{val.contact}</StyledTableCell>
                        <StyledTableCell align="center">{val.expertisesubject}</StyledTableCell>
                        <StyledTableCell align="center">{val.experience}</StyledTableCell>
                        <StyledTableCell align="center">{val.batchsize}</StyledTableCell>
                        <StyledTableCell align="center">{val.batchmode}</StyledTableCell>
                        <StyledTableCell align="center">{val.availability}</StyledTableCell>
                        <StyledTableCell align="center">{val.status}</StyledTableCell>

                        <StyledTableCell align="center" spacing={2}>
                        <button className='btn' ><VisibilityIcon /></button>
                            <Link to={`/traineredit/${val.id}`}><button className='btn'><EditIcon /></button></Link>
                             <button type='button' className='btn'> <DeleteIcon /></button>
                        </StyledTableCell>
                    </StyledTableRow>
              })}
            </TableBody>
        </Table>
    </TableContainer>
</div>
</div>
  )
}

const mapStateToProps = (state)=>({
Trainer:state.TrainerStore.trainers
})

const mapDispatchToProps = (dispatch)=>({
    getTrainers: ()=> dispatch(getTrainers()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Trainer);
