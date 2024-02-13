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
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDeletStudents,getStudentAtten } from '../Action';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TablePagination } from '@mui/material';

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

const StudentAtten = ({ getStudentAtten, StudentAtten, }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [student, setStudent] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // =====================For View Pop-Up==============================
    const [open, setOpen] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState([])

    const handleOpen = (course) => {
        setSelectedStudent(course);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    // =========================Pagegnation =============================
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        setStudent([...StudentAtten]);
        getStudentAtten();
    }, [StudentAtten.length])

    useEffect(() => {
        setStudent([...StudentAtten]);
    })

    return (
        <div>
            <h1 className=' mt-3 text-center txt-bold'>Student Attendance</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginRight: "100px",
            }}>
                <Link to="/StdAddForm"><button type='button' className='btn btn-outline-dark ms-5 mt-3'>Add Attendance</button></Link>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ width: "250px", height: "10px", marginRight: "100px" }}
                    margin="normal"
                /></div>
            {/* ================Table Start================== */}
            <div className='mt-5 ms-5 me-5 mb-5'>
                <TableContainer component={Paper} style={{width:900,marginTop:70,marginLeft:400}}>
                    <Table sx={{ width: '100%' }} aria-label="customized table">
                        <TableHead >
                            <TableRow >
                                <StyledTableCell align="center">Sr.No</StyledTableCell>
                                <StyledTableCell align="center">Student Name</StyledTableCell>
                                <StyledTableCell align="center">Attendance</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {student.filter((data) =>
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
                                        : student.length
                                ).map((val, index) => (
                                    <StyledTableRow key={val.id}>
                                        <StyledTableCell align='center'>{index + 1 + page * rowsPerPage}</StyledTableCell>
                                        <StyledTableCell align="center">{val.studentname}</StyledTableCell>
                                        <StyledTableCell align="center">{val.attendance}</StyledTableCell>
                                        <StyledTableCell align="center" spacing={2}>
                                            <Link to={`/StdEditForm/${val.id}`}><button className='btn'><EditIcon /></button></Link>
                                            <button onClick={getDeletStudents(val.id)} type='button' className='btn'> <DeleteIcon /></button>
                                            <button className='btn' onClick={() => handleOpen(val)}><VisibilityIcon /></button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                        component="div"
                        count={student.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        color="primary"
                    />
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
                            <Typography id="modal-modal-title" variant="h6" component="h1">
                                Details of Course
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <table>
                                    <tr>
                                        <b>Name:-&nbsp;</b> <th>{selectedStudent.studentname}</th>
                                    </tr>
                                    <tr>
                                        <b>Status:-&nbsp;</b> <th>{selectedStudent.attendance}</th>
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

const mapStateToProps = (state) => ({
    StudentAtten: state.studentAtteStore.studentname
})

//convert actions into props
const mapDispatchToProps = (dispatch) => {
    return {
        getStudentAtten: () => dispatch(getStudentAtten()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentAtten);
