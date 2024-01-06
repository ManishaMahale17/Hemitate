import axios from 'axios';

const API_URL = 'http://localhost:8888/users';


//add user
export const addUser =async (data)=>{
    try{
      return await axios.post(API_URL,data);
    }catch(error){
        console.log('Error while calling API',error.message);
    }   
}
//get all users
export const getUsers=async ()=>{
  try{
    return await axios.get(API_URL);

  }catch(error){
    console.log('Error while calling API',error.message);
  }
}
//get 1 user
export const getUser=async (data)=>{
  try{
    return await axios.get(`${API_URL}/${data}`);

  }catch(error){
    console.log('Error while calling getUser API',error.message);
  }
}

//edit user api
export const editUser=async (data,id)=>{
  try{
    return await axios.put(`${API_URL}/${id}`,data);

  }catch(error){
    console.log('Error while calling EditUser API',error.message);
  }
}

//Delete user

export const deleteUser =async (id)=>{
  try{
    return await axios.delete(`${API_URL}/${id}`);

  }catch(error){
    console.log('Error while calling DeleteUser API',error.message);
  }
}