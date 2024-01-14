
export const addTrainer = (trainer) => ({
    type: 'ADD_TRAINER',
    payload: trainer,
  });
  
  export const deleteTrainer = (username) => ({
    type: 'DELETE_TRAINER',
    payload: username,
  });
  