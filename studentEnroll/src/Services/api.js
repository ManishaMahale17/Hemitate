import axios from 'axios'

const API_URL='http://localhost:8080/students'

export const addStudent=async(data)=>{
    try{
      return await axios.post(API_URL,data);

    }catch(error){
     console.log("error while calling addStudent ApI",error.message);
    }
   
}