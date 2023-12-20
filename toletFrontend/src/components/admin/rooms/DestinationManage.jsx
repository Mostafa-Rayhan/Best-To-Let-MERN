
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastError, ToastSuccess } from "../../../hooks/others";
import {  base, deleteRoom  } from "../../../hooks/api";
import EditIcon from '@mui/icons-material/Edit';
import { useRootContext } from '../../../context';
import DestinationEdit from './DestinationEdit';


export default function DestinationManage2() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    maxWidth:"700px",
    bgcolor: 'background.paper',
    maxHeight:"90vh",
    overflow:"auto",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [rooms, setRooms]=React.useState()
  const [open, setOpen] = React.useState(false);
const [singleT, setSingleT]=React.useState()
  const {editId, setEditId}=useRootContext()
  const [refresh, setRefresh]=React.useState(false)


  const handleOpen = (id) => {
    const single=rooms?.find(t=>t._id==id)
    setSingleT(single)
    // setEditId(id)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  React.useEffect(()=>{
    axios.get(`${base}/room`)
    .then(data=>{
      console.log("data", data?.data);
      setRooms(data.data)
    })
    .catch(err=>{
      console.log("err", err );
    })
  },[refresh])

  const handledeleteRoom=async(id)=>{
    const deleteRes = await deleteRoom(id);
    if(deleteRes){
      console.log("res delete", deleteRes );
      ToastSuccess("Successfully deleted")
    }
    setRefresh(!refresh);
  }

  return (
    <div>
      {/* modal  */}

    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
            Edit Rent Info
          </Typography>
        <DestinationEdit singleT={singleT} setOpen={setOpen} />
        </Box>
      </Modal>
    </div>

      {/* modal end */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image & Title</TableCell>
            <TableCell align="right">Building Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Rent</TableCell>


            <TableCell align="right">Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <p style={{display:"flex",alignItems:"center",marginBottom:0}}>
                <img style={{height:"35px", width:"auto", marginRight:"10px" }} src={row?.image} alt="" />
                <span>{row?.name}</span>
               </p>
              </TableCell>
              <TableCell align="right">{row?.buildingName}</TableCell>
              <TableCell align="right">{row?.address}</TableCell>
              <TableCell align="right">{row?.rent}</TableCell>

              <TableCell align="right">
                <button onClick={()=>handleOpen(row._id)} style={{backgroundColor:"transparent", border:"none", padding:"5px", borderRadius:"5px"}}><EditIcon style={{color:"#1976D2"}}/></button>
                <button onClick={()=>handledeleteRoom(row._id)} style={{backgroundColor:"transparent", border:"none", padding:"5px", borderRadius:"5px"}}><DeleteIcon style={{color:"Dc3545"}}/></button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
