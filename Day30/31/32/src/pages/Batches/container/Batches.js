import React, { useState, useEffect } from 'react';
//import for mui table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//imported for delete
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';
import { deleteBatches, getBatches } from '../Action';
import { connect } from 'react-redux';
//import for model
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import for pagination
import TablePagination from '@mui/material/TablePagination';
//import for search feild
import TextField from '@mui/material/TextField';
//=============================CSS section start============================//
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
// ==========================CSS section End===========================//
    const Batches = ({ getBatches, Batches }) => {
    const [batches, setBatches] = useState([]);
    const [open, setOpen] = useState(false)
    const [selectBatch, setSelectBatch] = useState([])
    //======================code for pagination===========================//
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };
    //================================code for search button==============//
    const [searchQuery, setSearchQuery] = useState('');
    //====================code for model==============//
    const handleOpen = (user) => {
        setSelectBatch(user);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    //===================code for get operation==========//
    useEffect(() => {
        getBatches();
        return () => {
            // console.log("componentwillUnmount")
        }
    }, [])
     useEffect(() => {
        setBatches([...Batches])
     }, [Batches.length > 0])

     useEffect(()=>{
        setBatches([...Batches])  
    });

    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: "220px", }}>
                <Link to='/addbatches' className='btn btn-outline-dark mt-2 mb-1'>
                    < AddOutlinedIcon />Add Batch
                </Link>
                <TextField
                    label="Search"
                    variant='outlined'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ width: '250px', height: '20px', marginRight: '100px', }}
                    margin='normal'
                />
            </div>
            {/* Table Section Start Here */}
            <TableContainer component={Paper} className='mt-5' style={{width:950,marginTop:70,marginLeft:400}}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="center">CourseName&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">TrainerName&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">BatchTime&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">BatchType&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">StartDate&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Action&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {batches
                            .filter((data) =>
                                Object.values(data).some((value) =>
                                    value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                                )
                            )
                            .slice(
                                rowsPerPage > 0
                                    ? page * rowsPerPage
                                    : 0,
                                rowsPerPage > 0 ? page * rowsPerPage + rowsPerPage : batches.length
                            )
                            .map((data, index) => {
                                return <StyledTableRow key={data.id}>
                                    <StyledTableCell component="th" scope="row">{index + 1 + page * rowsPerPage}</StyledTableCell>
                                    <StyledTableCell align="center">{data.coursename}</StyledTableCell>
                                    <StyledTableCell align="center">{data.trainername}</StyledTableCell>
                                    <StyledTableCell align="center">{data.batchtime}</StyledTableCell>
                                    <StyledTableCell align="center">{data.batchtype}</StyledTableCell>
                                    <StyledTableCell align="center">{data.startdate}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button type="button" className='btn' onClick={() => handleOpen(data)}>< VisibilityIcon /></button>|
                                        <Link className='btn' to={`/editbatches/${data.id}`}>
                                            <EditIcon />
                                        </Link>|
                                        <Link type='button' className='btn' onClick={deleteBatches(data.id)}>
                                            <DeleteIcon />
                                        </Link>
                                    </StyledTableCell>
                                </StyledTableRow>
                            })}
                    </TableBody>
                </Table>
                {/* pagination section start */}
                <TablePagination
                    rowsPerPageOptions={[3, 6, 15, { label: '3', value: -1 }]}
                    component="div"
                    count={batches.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                {/* Pagination Section End */}
            </TableContainer>
            {/* Table Section End Here */}
            {/* Model  Section start here */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {selectBatch && (
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Batch Details
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <table>
                                <tr>
                                    <th>Id:</th> <th>{selectBatch.id}</th>
                                </tr>
                                <tr>
                                    <th>Batch Code:-&nbsp;</th> <th>{selectBatch.batchcode}</th>
                                </tr>
                                <tr>
                                    <th>Batch Name:-&nbsp;</th> <th>{selectBatch.batchname}</th>
                                </tr>
                                <tr>
                                    <th>Course Name:</th> <th>{selectBatch.coursename}</th>
                                </tr>
                                <tr>
                                    <th>Trainer Name:-&nbsp;</th> <th>{selectBatch.trainername}</th>
                                </tr>
                                <tr>
                                    <th>Batch Time:</th> <th>{selectBatch.batchtime}</th>
                                </tr>
                                <tr>
                                    <th>Batch Type:</th> <th>{selectBatch.batchtype}</th>
                                </tr>
                                <tr>
                                    <th>Start Date:-&nbsp;</th> <th>{selectBatch.startdate}</th>
                                </tr>
                                <tr>
                                    <th> End Date:-&nbsp;</th> <th>{selectBatch.enddate}</th>
                                </tr>
                                <tr>
                                    <th> Batch Status:-&nbsp;</th> <th>{selectBatch.batchstatus}</th>
                                </tr>
                                <tr>
                                    <th>Added By:</th> <th>{selectBatch.addedby}</th>
                                </tr>
                                <tr>
                                    <th>Batch Mode :-&nbsp;</th> <th>{selectBatch.batchmode}</th>
                                </tr>
                                <tr>
                                    <th>Batch Size:-&nbsp;</th> <th>{selectBatch.batchsize}</th>
                                </tr>


                            </table>
                        </Typography>
                    </Box>
                )}
            </Modal>
            {/* MOdel Section End Here */}
        </div>
    )
}
const mapStateToProps = (state) => ({
    Batches: state.BatchStore.batches
})
//convert actions into props
const mapDispatchToProps = (dispatch) => ({
    getBatches: () => dispatch(getBatches()),
    deleteBatches: () => dispatch(deleteBatches())

});

export default connect(mapStateToProps, mapDispatchToProps)(Batches)

