import './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'; // Not used, can be removed
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// The month parameter for Date is 0-indexed, so 5 is June (not May).
const birthdate = new Date(1998, 4, 25); 

function calculateAge() {
  const today = new Date();
  
  // Calculate initial age difference in years
  let age = today.getFullYear() - birthdate.getFullYear();
  
  const birthMonth = birthdate.getMonth();
  const todayMonth = today.getMonth();
  const birthday = birthdate.getDate();
  const thisDay = today.getDate();

  // Decrement age if the birthday hasn't passed yet this year
  if (todayMonth < birthMonth || (todayMonth === birthMonth && thisDay < birthday)) {
    age--;
  }

  return age;
}

function AgeDisplay() {
  const age = calculateAge(); 

  // Using Material-UI Typography for consistent styling might be better than <p>
  return (
    <Typography variant="body2" sx={{ mb: 1.5 }}>
      Aktuelles Alter: {age} Jahre
    </Typography>
  );
}

const CardComponent = (
  <>
  <Box>
    <CardContent>
      <Typography>
        Anna Katarina Schmitz
      </Typography>
      <Typography variant='h2' color='#6A8E7A' textAlign={"center"} component="div" sx={{ mb: 1 }}>
        Vorstellung
      </Typography>
      {/* Use the React Component */}
      <AgeDisplay /> 
      {/* Removed the empty Typography lines that were just taking up space */}
      <Typography variant="body2">
        {bull} wohnhaft in Bonn
      </Typography>
    </CardContent>
    </Box>
  </>
);

export default function OutlinedCard() {
  // Correctly renders the constant named 'CardComponent'
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{CardComponent}</Card>
    </Box>
  );
}