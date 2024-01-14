import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTrainer } from '../reducers/trainerReducer';



const TrainerList = () => {
  const trainers=useSelector((state)=>state.trainers);
  const dispatch=useDispatch();

 
 const  handleDelete=(id)=>{
      dispatch(deleteTrainer({id: id}))
 }
  return (
    <div className='container'>
      <h2>Trainers Module</h2>
      <Link to="/add" className='btn btn-success my-4'>Add Trainer</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>TrainerName</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Subject</th>
            <th>Experience</th>
            <th>Batchsize</th>
            <th>Batchmode</th>
            <th>Availability</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {trainers.map((trainer,index)=>(
              <tr key={index}>
                <td>{trainer.id}</td>
                <td>{trainer.trainername}</td>
                <td>{trainer.username}</td>
                <td>{trainer.email}</td>
                <td>{trainer.contact}</td>
                <td>{trainer.expertisesubject}</td>
                <td>{trainer.experience}</td>
                <td>{trainer.batchsize}</td>
                <td>{trainer.batchmode}</td>
                <td>{trainer.availability}</td>
                <td>{trainer.status}</td>
                <td>
                  <Link to={`/edit/${trainer.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                  <button onClick={() => handleDelete(trainer.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                </td>

              </tr>

            ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default TrainerList
