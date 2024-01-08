import { useState,useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate,useParams } from 'react-router-dom';

import { getUser,editUser} from '../service/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',  
    expertisesubject:'',
    experience:'',
    batchsize:'',
    batchmode:'',
    availability:'',
    status:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    let navigate = useNavigate();
    const {id}=useParams();

    useEffect(() => {
        getUserData();
    },[])

    const getUserData=async()=>{
       let response = await getUser(id);
       setUser(response.data)
    }
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await editUser(user,id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Edit Trainer</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ExpertSubject</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='expertisesubject' value={user.expertisesubject} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Experience</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='experience' value={user.experience} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">BatchSize</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='batchsize' value={user.batchsize} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">BatchMode</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='batchmode' value={user.batchmode} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Availability</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='availability' value={user.availability} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' value={user.status} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Edit Trainer</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;