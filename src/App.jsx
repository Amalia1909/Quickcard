import './App.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#415A4C",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: "#93A689",
  }),
}));

export default function AccordionUsage() {
  return (
    <>
    <Typography variant='h1' color='#6A8E7A' textAlign={"center"}>Meine Kenntnisse und Interessen</Typography>
    <Stack direction="row" spacing={3}>
      <Item>
    <div>
      <Stack direction="column" spacing={1}>
        <Typography variant="h2" textAlign={"center"} color="#93A689">Kenntnisse</Typography>
        <Item>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
        >
          <Typography color='#415A4C' component="span">Programmiersprachen und Angrenzendes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='#8C9C7D'>Basics in Python, Linux, Excel, Word und Powerpoint</Typography>
        </AccordionDetails >
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
        >
          <Typography color='#415A4C' component="span">Serveradministration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='#8C9C7D'>Basics in der Aufsetzung und Verwendung von vmWare, ProxMox, EXSi und SSH</Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
        >
          <Typography color='#415A4C'component="span">Netzwerktechnik</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='#8C9C7D'>Basics in Netzplanung, Routing/ Switching, Konfiguration und Dienstprogrammen</Typography> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
          
        >
          <Typography color='#415A4C' component="span">Hardware und Zugehöriges </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography color='#8C9C7D'>Basics im Hardwareaufbau von PCs und Servern sowie in Betriebs- und  Storagesystemen</Typography>
        </AccordionDetails>
      </Accordion>
      </Item>
      </Stack>
    </div>
    </Item>
    <Item>
        <div>
      <Stack direction="column" spacing={1}>
        <Typography variant="h2" color="#93A689" textAlign={"center"}>Interessen</Typography>
        <Item>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
        >
          <Typography color='#415A4C' component="span">Scripting/Automatisierung</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='#8C9C7D'></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
        >
          <Typography color='#415A4C'component="span">Aufgaben mit Programmieranteil/Scripting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='#8C9C7D'></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
        >
          <Typography color='#415A4C' component="span">Prozessoptimierung/Testmanagement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='#8C9C7D'></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C" }}
        >
          <Typography color='#415A4C' component="span">It-Sicherheit & Virtualisierung</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography color='#8C9C7D'></Typography>
        </AccordionDetails>
      </Accordion>
      </Item>
      </Stack>
    </div>
    </Item>
    </Stack>
   </> 
  );
}
