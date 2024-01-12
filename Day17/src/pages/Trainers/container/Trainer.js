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
import { deleteTrainer, getTrainers ,editTrainer} from '../Action';
import { Delete } from '../../../service/HttpService';
import { useNavigate } from 'react-router-dom';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
const[open,setOpen]=useState(false)
const [selectedStudent,setSelectedStudent]=useState([])
const navigate = useNavigate();


const handleOpen = (course) => {
    setSelectedStudent(course);
    setOpen(true);
};
const handleClose = () => setOpen(false);

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
    <button type='button' className='btn btn-success'  onClick={() => navigate("/add")} >Add Trainer</button>
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
                        <button className='btn'onClick={()=> handleOpen(val)} ><VisibilityIcon /></button>
                            <Link to={`/edit/${val.id}`}><button className='btn'><EditIcon /></button></Link>
                            
                            <button type='button' className='btn'onClick={deleteTrainer(val.id)} >
                            <DeleteIcon />
                            </button>
                        </StyledTableCell>
                    </StyledTableRow>
              })}
            </TableBody>
        </Table>
    </TableContainer>
    {/* ============ Model Start============ */}
    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {selectedStudent && (
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Trainers Details
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 6 }}>
                                <table>
                                    <tr>
                                        <th>Id:</th> <th>{selectedStudent.id}</th>
                                    </tr>
                                    <tr>
                                        <th>TrainerName:&nbsp;</th> <th>{selectedStudent.trainername}</th>
                                    </tr>
                                    <tr>
                                        <th>Email:&nbsp;</th> <th>{selectedStudent.email}</th>
                                    </tr>
                                    <tr>
                                        <th>Contact:&nbsp;</th> <th>{selectedStudent.contact}</th>
                                    </tr>
                                    <tr>
                                        <th>Expert Subject:&nbsp;</th> <th>{selectedStudent.expertisesubject}</th>
                                    </tr>
                                    <tr>
                                        <th>Experience:&nbsp;</th> <th>{selectedStudent.experience}</th>
                                    </tr>
                                    <tr>
                                        <th>Batchsize:&nbsp;</th> <th>{selectedStudent.batchsize}</th>
                                    </tr>
                                    <tr>
                                        <th>batchmode:&nbsp;</th> <th>{selectedStudent.batchmode}</th>
                                    </tr>
                                    <tr>
                                        <th>Availability:&nbsp;</th> <th>{selectedStudent.availability}</th>
                                    </tr>
                                    <tr>
                                        <th>status:&nbsp;</th> <th>{selectedStudent.status}</th>
                                    </tr>
                                   
                                </table>
                            </Typography>
                        </Box>
                    )}
                </Modal>
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
