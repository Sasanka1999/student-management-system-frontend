import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import instance from "../../services/axiosOrder";
import { Toast } from "../../common/function";
import { useState } from 'react';

export default function UpdateFormDialog({ open, student, onClose, onUpdate }) {
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const [address, setAddress] = useState(student.address);
  const [contact, setContact] = useState(student.contact);

  const handleUpdate = () => {
    const data = {
      student_name: name,
      student_age: age,
      student_address: address,
      student_contact: contact,
    };

    instance
      .put(`/student/update/${student.id}`, data)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Student updated successfully",
        });
        onUpdate();  
        onClose();   
      })
      .catch(() => {
        Toast.fire({
          icon: "error",
          title: "Failed to update student",
        });
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Student</DialogTitle>
      <DialogContent>
        <TextField
          label="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Student Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Student Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Student Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleUpdate}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
}


