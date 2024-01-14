import { createSlice } from "@reduxjs/toolkit";
import { trainers } from "../Data";

const trainerSlice=createSlice({
   name:"trainers",
   initialState: trainers,
   reducers:{
      addTrainer:(state,action)=>{
      //   console.log(action)
       state.push(action.payload);
      },
      updateTrainer:(state,action)=>
      {
         const {id,trainername,username,email,contact,expertisesubject,experience,batchsize,batchmode, availability,status} = action.payload;
         const uptrainer=state.find(trainer => trainer.id==id);
         if(uptrainer){
            uptrainer.trainername=trainername;
            uptrainer.username=username;
            uptrainer.email=email;
            uptrainer.contact=contact;
            uptrainer.expertisesubject=expertisesubject;
            uptrainer.experience=experience;
            uptrainer.batchsize=batchsize
            uptrainer.batchmode=batchmode;
            uptrainer.availability=availability;
            uptrainer.status=status;
         }
      },
      deleteTrainer:(state,action)=>{
         const {id}=action.payload;
         const uptrainer =state.find(trainer =>trainer.id ==id)
         if(uptrainer){
            return state.filter(f =>f.id !==id)
         }
      }
   }
})
export const{ addTrainer,updateTrainer,deleteTrainer}=trainerSlice.actions;
export default trainerSlice.reducer;