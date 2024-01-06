import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  InputAdornment,
  styled,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import TablePagination from "@mui/material/TablePagination";

import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 100%;
  margin: 30px 0 0 30px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;

const ActionCell = styled(TableCell)`
  display: flex;
  align-items: center;
`;

const SearchBar = styled(TextField)`
  margin: 20px;
`;

const AddTrainerButton = styled(Button)`
  margin: 20px;
  margin-left: 70%;
`;

const PaginationWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin: 40px;
`;

const ITEMS_PER_PAGE = 3;

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const deleteUserData = async (id) => {
    try {
      await deleteUser(id);
      getUsersDetails();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const openViewDialog = (user) => {
    setSelectedUser(user);
    setViewDialogOpen(true);
  };

  const closeViewDialog = () => {
    setSelectedUser(null);
    setViewDialogOpen(false);
  };

  const openDeleteConfirmationDialog = (userId) => {
    setDeleteUserId(userId);
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmationDialog = () => {
    setDeleteUserId(null);
    setDeleteConfirmationOpen(false);
  };

  const confirmDeleteUser = async () => {
    try {
      await deleteUser(deleteUserId);
      getUsersDetails();
      closeDeleteConfirmationDialog();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <SearchBar
        label="Search"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <AddTrainerButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => navigate("/add")}
      >
        Add Trainer
      </AddTrainerButton>

      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Expert Subject</TableCell>
            <TableCell>Experience</TableCell>
            <TableCell>Batch Size</TableCell>
            <TableCell>Batch Mode</TableCell>
            <TableCell>Availability</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {filteredUsers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user) => (
              <TRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.expertisesubject}</TableCell>
                <TableCell>{user.experience}</TableCell>
                <TableCell>{user.batchsize}</TableCell>
                <TableCell>{user.batchmode}</TableCell>
                <TableCell>{user.availability}</TableCell>
                <TableCell>{user.status}</TableCell>
                <ActionCell>
                  <button>
                    <RemoveRedEyeIcon
                      onClick={() => openViewDialog(user)}
                    ></RemoveRedEyeIcon>
                  </button>
                  <Link to={`/edit/${user.id}`}>
                    <button>
                      <EditIcon />
                    </button>
                  </Link>
                  <button>
                    <DeleteIcon
                      onClick={() => openDeleteConfirmationDialog(user.id)}
                    ></DeleteIcon>
                  </button>
                </ActionCell>
              </TRow>
            ))}
        </TableBody>
      </StyledTable>

      <PaginationWrapper>
        <TablePagination
          rowsPerPageOptions={[2, 5, 10, 20]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </PaginationWrapper>

      <Dialog
        open={viewDialogOpen}
        onClose={closeViewDialog}
        aria-labelledby="view-dialog-title"
        aria-describedby="view-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="view-dialog-title">Trainer Details</DialogTitle>
        <DialogContent>
          <DialogContentText id="view-dialog-description">
            {selectedUser && (
              <>
                <p>Name: {selectedUser.name}</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Experience: {selectedUser.experience}</p>
                <p>Expertise Subject:{selectedUser.expertisesubject}</p>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeViewDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteConfirmationOpen}
        onClose={closeDeleteConfirmationDialog}
        aria-labelledby="delete-confirmation-dialog-title"
        aria-describedby="delete-confirmation-dialog-description"
      >
        <DialogTitle id="delete-confirmation-dialog-title">
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-confirmation-dialog-description">
            Are you sure you want to delete this TrainerInfomation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteConfirmationDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDeleteUser} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllUser;
