// import React from 'react';
// import { Container, Grid, TextField, Button, Avatar, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableRow } from '@mui/material';
// import { Dashboard, FitnessCenter, School, CalendarToday, MusicNote, RecordVoiceOver, AttachMoney, Settings, HelpOutline, ExitToApp, Edit, CheckCircle, VisibilityOff } from '@mui/icons-material';

// const DashboardComponent = () => {
//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={3}>
//         {/* Sidebar */}
//         <Grid item xs={3} sx={{ backgroundColor: '#f5f5f5', padding: 2 }}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Avatar sx={{ width: 56, height: 56, mb: 2, bgcolor: 'yellow' }}>HB</Avatar>
//             <Typography variant="h6" sx={{ color: 'black', fontSize: 14 }}>HowBee</Typography>
//             <List sx={{ width: '100%', mt: 4, color: 'grey' }}>
//             <ListItem button>
//                 <ListItemText primary="MENU" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><Dashboard /></ListItemIcon>
//                 <ListItemText primary="Dashboard" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><FitnessCenter /></ListItemIcon>
//                 <ListItemText primary="Posture Routine" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><School /></ListItemIcon>
//                 <ListItemText primary="Classroom" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><CalendarToday /></ListItemIcon>
//                 <ListItemText primary="Calendar" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><MusicNote /></ListItemIcon>
//                 <ListItemText primary="Music" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><RecordVoiceOver /></ListItemIcon>
//                 <ListItemText primary="Recordings" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><AttachMoney /></ListItemIcon>
//                 <ListItemText primary="Earnings" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><Settings /></ListItemIcon>
//                 <ListItemText primary="Settings" />
//               </ListItem>
//               <ListItem button sx={{mt: 16}}>
//                 <ListItemIcon><HelpOutline /></ListItemIcon>
//                 <ListItemText primary="Help and Support" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemIcon><ExitToApp /></ListItemIcon>
//                 <ListItemText primary="Logout" />
//               </ListItem>
//             </List>
//           </Box>
//         </Grid>

//         {/* Main Content */}
//         <Grid item xs={9}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2, width: '100%' }}>
//               <Edit sx={{ mr: 1 }} />
//               <Typography variant="h4">Profile</Typography>
//             </Box>
//               <Avatar sx={{ width: 150, height: 150, mb: 2, bgcolor: 'grey', display:'flex', justifyContent:'center' }}></Avatar> 
//             <Grid container spacing={2}>
//               {/* Left Column */}
//               <Grid item xs={6}>
//                 <Typography variant="h6" sx={{ mt: 4 }}>About</Typography>
//                 <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 1 }}>
//                   <Typography variant="body1">Mehrab Bozorgi</Typography>
//                 </Box>
//                 <Typography variant="h6" sx={{ mt: 4 }}>Pricing</Typography>
//                 <Table>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>Thrice a week</TableCell>
//                       <TableCell>$___</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Twice a week</TableCell>
//                       <TableCell>$___</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Monday to Friday</TableCell>
//                       <TableCell>$___</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Elderly Batch</TableCell>
//                       <TableCell>$___</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </Grid>

//               {/* Right Column */}
//               <Grid item xs={6}>
//                 <TextField fullWidth label="Name" defaultValue="Mehrab Bozorgi" sx={{ mb: 2 }} />
//                 <TextField fullWidth label="Email" defaultValue="mehrabbozorgi.business@gmail.com" InputProps={{ endAdornment: <CheckCircle color="success" /> }} sx={{ mb: 2 }} />
//                 <TextField fullWidth label="Contact Number" defaultValue="58077.79" sx={{ mb: 2 }} />
//                 <TextField fullWidth label="DOB" defaultValue="Bozorgi" sx={{ mb: 2 }} />
//                 <TextField fullWidth label="User ID" defaultValue="33062 Zboncak isle" sx={{ mb: 2, mt: 2 }} />
//                 <TextField fullWidth label="Password" type="password" defaultValue="sbdfbnd65sfdvb s" InputProps={{ endAdornment: <VisibilityOff /> }} sx={{ mb: 2, mt: 2 }} />
//               </Grid>
//             </Grid>
//             <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
//               <Button variant="outlined" sx={{ mr: 2 }}>Cancel</Button>
//               <Button variant="contained" color="primary">Save</Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default DashboardComponent;

import React from 'react';
import { Container, Grid, TextField, Button, Avatar, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableRow, Divider } from '@mui/material';
import { Dashboard, FitnessCenter, School, CalendarToday, MusicNote, RecordVoiceOver, AttachMoney, Settings, HelpOutline, ExitToApp, Edit, CheckCircle, VisibilityOff } from '@mui/icons-material';

const DashboardComponent = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item xs={3} sx={{ backgroundColor: '#f5f5f5', padding: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ width: 56, height: 56, mb: 2, bgcolor: 'yellow' }}>HB</Avatar>
            <Typography variant="h6" sx={{ color: 'black', fontSize: 14 }}>HowBee</Typography>
            <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />
            <List sx={{ width: '100%', mt: 4, color: 'grey' }}>
              <ListItem button>
                <ListItemText primary="MENU" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><Dashboard /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><FitnessCenter /></ListItemIcon>
                <ListItemText primary="Posture Routine" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><School /></ListItemIcon>
                <ListItemText primary="Classroom" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><CalendarToday /></ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><MusicNote /></ListItemIcon>
                <ListItemText primary="Music" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><RecordVoiceOver /></ListItemIcon>
                <ListItemText primary="Recordings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><AttachMoney /></ListItemIcon>
                <ListItemText primary="Earnings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><Settings /></ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button sx={{ mt: 16 }}>
                <ListItemIcon><HelpOutline /></ListItemIcon>
                <ListItemText primary="Help and Support" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><ExitToApp /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={9}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2, width: '100%' }}>
              <Edit sx={{ mr: 1 }} />
              <Typography variant="h4">Profile</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, width: '100%' }}>
              <Avatar sx={{ width: 150, height: 150, bgcolor: 'grey', display: 'flex', justifyContent: 'center', mr: 2 }} />
            </Box>
            <Grid container spacing={2}>
              {/* Left Column */}
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ mt: 4}}>About</Typography>
                <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 1 , height:'150px'}}>
                  <Typography variant="body1">Mehrab Bozorgi</Typography>
                </Box>
                <Typography variant="h6" sx={{ mt: 4 }}>Pricing</Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Thrice a week</TableCell>
                      <TableCell>$___</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Twice a week</TableCell>
                      <TableCell>$___</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Monday to Friday</TableCell>
                      <TableCell>$___</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Elderly Batch</TableCell>
                      <TableCell>$___</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>

              {/* Right Column */}
              <Grid item xs={6} sx={{mt: -16}}>
                <TextField fullWidth label="Name" defaultValue="Mehrab Bozorgi" sx={{ mb: 2 }} />
                <TextField fullWidth label="Email" defaultValue="mehrabbozorgi.business@gmail.com" InputProps={{ endAdornment: <CheckCircle color="success" /> }} sx={{ mb: 2 }} />
                <TextField fullWidth label="Contact Number" defaultValue="58077.79" sx={{ mb: 2 }} />
                <TextField fullWidth label="DOB" defaultValue="Bozorgi" sx={{ mb: 2 }} />
                <TextField fullWidth label="User ID" defaultValue="33062 Zboncak isle" sx={{ mb: 2, mt: 2 }} />
                <TextField fullWidth label="Password" type="password" defaultValue="sbdfbnd65sfdvb s" InputProps={{ endAdornment: <VisibilityOff /> }} sx={{ mb: 2, mt: 2 }} />
                <TextField fullWidth label="Class Categories" defaultValue="Yoga for flexibility, elderly, beginner level classes for all." sx={{ mb: 2, mt: 2}} />
                <TextField fullWidth label="Available Timings" defaultValue="7-10 AM , 4-7 PM" InputProps={{ endAdornment: <VisibilityOff /> }} sx={{ mb: 2, mt: 2 }} />
              </Grid>
            </Grid>
            <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" sx={{ mr: 2 }} color="warning">Cancel</Button>
              <Button variant="contained" color="warning">Save</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardComponent;
