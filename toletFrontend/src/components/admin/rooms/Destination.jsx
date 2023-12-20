
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DestinationManage2 from './DestinationManage';
import NewDestination2 from './NewDestination';
import EastIcon from '@mui/icons-material/East';

export default function Destination2() {
  const [value, setValue] = React.useState('Rent');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>

    <div className='mt-12 md:mt-2  flex items-center gap-3 mb-2'>
    <h3 className='font-bold text-xl uppercase '>Manage The Rents </h3>
      <span><EastIcon style={{color:"blue"}} /></span>
    </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Rent" value="Rent" />
            <Tab label="Add New" value="Add New" />

          </TabList>
        </Box>
        <TabPanel value="Rent"><DestinationManage2/></TabPanel>
        <TabPanel value="Add New"><NewDestination2/></TabPanel>

      </TabContext>
    </Box>
  );
}
