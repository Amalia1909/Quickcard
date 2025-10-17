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
import OutlinedCard from'./Vorstellung.jsx'


export default function AccordionUsage() {
  return (
    <>
    <Box backgroundColor={"#D9E2D2"}>
    <Typography variant='h1' color='#6A8E7A' textAlign={"center"}>Meine Kenntnisse und Interessen</Typography>
    </Box>
    <OutlinedCard></OutlinedCard>
    <Stack direction="row" spacing={3}backgroundColor={"#D9E2D2"}display={{display:"row"}}>
      <Box sx={{boxShadow: 2}} backgroundColor= "#415A4C" width={1/2} borderRadius={1} padding={"1em"}>
    <div>
      {/* <Stack direction="column" spacing={1}> */}
        <Typography variant="h2" textAlign={"center"} color="#D9E2D2">Kenntnisse</Typography>
        <Box display={{display:"column"}} backgroundColor={"#6A8E7A"} sx={{boxShadow: 2}} borderRadius={1}>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C", backgroundColor: "#BCCCAB" }}
        >
          <Typography color='#415A4C' component="span">Programmiersprachen und Angrenzendes</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
          <Typography color='#5E644F'>Basics in Python, Linux, Excel, Word und Powerpoint</Typography>
        </AccordionDetails >
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C",backgroundColor: "#BCCCAB" }}
        >
          <Typography color='#415A4C' component="span">Serveradministration</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
          <Typography color='#5E644F'>Basics in der Aufsetzung und Verwendung von vmWare, ProxMox, EXSi und SSH</Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C",backgroundColor: "#BCCCAB" }}
        >
          <Typography color='#415A4C'component="span">Netzwerktechnik</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
          <Typography color='#5E644F'>Basics in Netzplanung, Routing/ Switching, Konfiguration und Dienstprogrammen</Typography> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C",backgroundColor: "#BCCCAB" }}
          >
          <Typography color='#415A4C' component="span">Hardware und Zugehöriges </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
        <Typography color='#5E644F'>Basics im Hardwareaufbau von PCs und Servern sowie in Betriebs- und  Storagesystemen</Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
    </div>
    </Box>
    <Box sx={{boxShadow: 2}} backgroundColor= "#415A4C" width={1/2} borderRadius={1}padding={"1em"}>
        <div>
        <Typography variant="h2"  color="#D9E2D2" textAlign={"center"}>Interessen</Typography>
        <Box display={{display:"column"}} backgroundColor={"#6A8E7A"} sx={{boxShadow: 2}} borderRadius={1}>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          sx={{borderBottom: 1, borderColor:"#415A4C",backgroundColor: "#BCCCAB"}}
        >
          <Typography color='#415A4C' component="span">Scripting/Automatisierung</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
          <Typography color='#5E644F'></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C",backgroundColor: "#BCCCAB" }}
        >
          <Typography color='#415A4C'component="span">Aufgaben mit Programmieranteil/Scripting</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
          <Typography color='#5E644F'></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C",backgroundColor: "#BCCCAB" }}
        >
          <Typography color='#415A4C' component="span">Prozessoptimierung/Testmanagement</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
          <Typography color='#5E644F'></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='#415A4C'
          Box sx={{borderBottom: 1, borderColor:"#415A4C",backgroundColor: "#BCCCAB" }}
        >
          <Typography color='#415A4C' component="span">It-Sicherheit & Virtualisierung</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "#D9E2D2"}}>
        <Typography color='#5E644F'></Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      {/* </Stack> */}
    </div>
    </Box>
    </Stack>
   </> 
  );
}
