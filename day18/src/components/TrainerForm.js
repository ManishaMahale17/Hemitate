import React, { useState } from 'react'
import { addTrainer } from '../reducers/trainerReducer';

import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';





const TrainerForm = () => {

  const[trainername,setTrainerName]=useState('');
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[contact,setContact]=useState('');
  const[expertisesubject,setExpertiseSubject]=useState('');
  const[experience,setExperience]=useState('');
  const[batchsize,setBatchsize]=useState('');
  const[batchmode,setBatchmode]=useState('');
  const[availability,setAvailability]=useState('');
  const[status,setStatus]=useState('');

  const trainers=useSelector((state)=>state.trainers);
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const handleSubmit=(event)=>{
   event.preventDefault();
   dispatch(addTrainer({id:trainers[trainers.length -1].id + 1,trainername,username,email,contact,expertisesubject,experience,batchsize,batchmode,availability,status}))
   navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New Trainer</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='trainername'>TrainerName:</label>
            <input type='text' name='trainername' className='form-control' onChange={e=>setTrainerName(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='username'>Username:</label>
            <input type='text' name='username' className='form-control' onChange={e=>setUsername(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='contact'>Contact:</label>
            <input type='text' name='contact' className='form-control' onChange={e=>setContact(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='expertisesubject'>Expertise Subject:</label>
            <input type='text' name='expertisesubject' className='form-control' onChange={e=>setExpertiseSubject(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='experience'>Experience:</label>
            <input type='text' name='experience' className='form-control' onChange={e=>setExperience(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='batchsize'>Batchsize:</label>
            <input type='text' name='batchsize' className='form-control' onChange={e=>setBatchsize(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='batchmode'>Batchmode:</label>
            <input type='text' name='batchmode' className='form-control' onChange={e=>setBatchmode(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='availability'>Availability:</label>
            <input type='text' name='availability' className='form-control' onChange={e=>setAvailability(e.target.value)}/>
          </div>
          <div>
          <label htmlFor='status'>Status:</label>
            <input type='text' name='status' className='form-control' onChange={e=>setStatus(e.target.value)}/>
          </div>
          <br/>
          <button className='btn btn-info'>Add Trainer</button>
        </form>

      </div>
     
    </div>
  )
}

export default TrainerForm
