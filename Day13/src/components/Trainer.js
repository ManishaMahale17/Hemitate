// src/components/Trainer.js
import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Collapse } from '@mui/material';

const Trainer = ({ trainer }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{trainer.name}</Typography>
        <Typography>Email: {trainer.email}</Typography>
        <Typography>Expertise Subject: {trainer.expertiseSubject}</Typography>
        <Typography>Availability Schedule: {trainer.availabilitySchedule}</Typography>
        <Typography>Daily Updates: {trainer.dailyUpdates}</Typography>
        
        <Button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>

        <Collapse in={showDetails}>
          <div>
            <Typography>Experience: {trainer.experience} years</Typography>
            <Typography>Contact: {trainer.contact}</Typography>
            <Typography>Gender: {trainer.gender}</Typography>
            <Typography>Address: {trainer.address}</Typography>

            <Typography variant="h6">Training Materials</Typography>
            <ul>
              {trainer.trainingMaterials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Trainer;
