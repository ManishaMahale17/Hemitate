import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import  updateTrainer from '../reducers/trainerReducer'


const TrainerUpdate = () => {
    //grab id from useparams
    const {id} = useParams();
    const trainers=useSelector((state)=>state.trainers);
    const prevTrainer=trainers.filter(f =>f.id ==id);
    const {trainername,username,email,contact,expertisesubject,experience,batchsize,batchmode,availability,status}=prevTrainer[0];

    const[utrainername,setTrainerName]=useState(trainername);
    const[uusername,setUsername]=useState(username);
    const[uemail,setEmail]=useState(email);
    const[ucontact,setContact]=useState(contact);
    const[uexpertisesubject,setExpertiseSubject]=useState(expertisesubject);
    const[uexperience,setExperience]=useState(experience);
    const[ubatchsize,setBatchsize]=useState(batchsize);
    const[ubatchmode,setBatchmode]=useState(batchmode);
    const[uavailability,setAvailability]=useState(availability);
    const[ustatus,setStatus]=useState(status);

    const dispatch=useDispatch();
    const navigate=useNavigate();
  
   const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateTrainer({
        id:id,
        trainername:utrainername,
        username:uusername,
        email:uemail,
        contact:ucontact,
        expertisesubject:uexpertisesubject,
        experience:uexperience,
        batchsize:ubatchsize,
        batchmode:ubatchmode,
        availability:uavailability,
        status:ustatus
    }))
    navigate('/')

   }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h3>Update Trainer</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor='trainername'>TrainerName:</label>
          <input type='text' name='trainername' className='form-control' value={utrainername} onChange={e => setTrainerName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='username'>Username:</label>
          <input type='text' name='username' className='form-control' value={uusername} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='email'>Email:</label>
          <input type='email' name='email' className='form-control' value={uemail} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='contact'>Contact:</label>
          <input type='text' name='contact' className='form-control'value={ucontact} onChange={e => setContact(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='expertisesubject'>Expertise Subject:</label>
          <input type='text' name='expertisesubject' className='form-control'value={uexpertisesubject} onChange={e => setExpertiseSubject(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='experience'>Experience:</label>
          <input type='text' name='experience' className='form-control' value={uexperience} onChange={e => setExperience(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='batchsize'>Batchsize:</label>
          <input type='text' name='batchsize' className='form-control'value={ubatchsize} onChange={e => setBatchsize(e.target.value)} />
        </div>
        <div>
        <label htmlFor='batchmode'>Batchmode:</label>
          <input type='text' name='batchmode' className='form-control'value={ubatchmode} onChange={e => setBatchmode(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='availability'>Availability:</label>
          <input type='text' name='availability' className='form-control' value={uavailability} onChange={e => setAvailability(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='status'>Status:</label>
          <input type='text' name='status' className='form-control'value={ustatus} onChange={e => setStatus(e.target.value)}/> 
        </div>
        <br/>
        <button className='btn btn-info'>Upadte Trainer</button>
      </form>

    </div>
   
  </div>
  )
}

export default TrainerUpdate
