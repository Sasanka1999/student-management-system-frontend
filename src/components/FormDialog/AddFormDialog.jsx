import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import instance from '../../services/axiosOrder';
import { Toast } from "../../common/function";


export default function AddFormDialog(loadData) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();

  const saveStudent = ()=>{
    if(name !== '' && age !== '' && address !== '' && contact !== '' ){
      const data = {
        student_name: name,
        student_age: age,
        student_address: address,
        student_contact: contact,
    };
    instance.post('/student/save', data)
        .then((res) => {
          console.log(res);          
          Toast.fire({
            icon: "success",
            title: "Student added in successfully"
          });
          loadData();
        })
        .catch(() => {
          Toast.fire({
            icon: "error",
            title: "Student added in failed"
          });
        });
    }else{
      Toast.fire({
        icon: "error",
        title: "Please fill all fields"
      });
    }
  }

  return (
    <React.Fragment>
      <Button sx={{ fontWeight: 'bold', position: 'absolute', right: '20px' }} variant="outlined" onClick={handleClickOpen}>
        Add New Student
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const name = formJson.name;
            const age = formJson.age;
            const address = formJson.address;
            const contact = formJson.contact;
            
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new student fill bellow form
          </DialogContentText>
          <TextField
            onChange={(val) => setName(val.target.value)}
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Enter Student Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(val) => setAge(val.target.value)}
            autoFocus
            required
            margin="dense"
            id="age"
            name="age"
            label="Enter Student Age"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(val) => setAddress(val.target.value)}
            autoFocus
            required
            margin="dense"
            id="address"
            name="address"
            label="Enter Student Address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(val) => setContact(val.target.value)}
            autoFocus
            required
            margin="dense"
            id="contact"
            name="contact"
            label="Enter Student Contact"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => saveStudent()} type="submit">Save Student</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
