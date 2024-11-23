import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UpdateFormDialog from "../FormDialog/UpdateFormDialog";
import CustomButton from "../../common/components/Button";
import Stack from "@mui/material/Stack";
import AddFormDialog from "../FormDialog/AddFormDialog";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import instance from "../../services/axiosOrder";

export default function StdTable() {
  const [rows, setRows] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);  
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);  

  useEffect(() => {
    loadData();
  }, []);

  const deleteStudent = (id) => {
    console.log(id);
    instance
      .delete(`/student/delete/${id}`)
      .then(() => {
        alert("Deleted successfully");
        setRows(rows.filter((row) => row.id !== id)); 
      })
      .catch((err) => {
        console.error("Failed to delete student:", err);
      });
  };

  const loadData = () => {
    instance
      .get("/student/getAll")
      .then((res) => {
        const data = res.data.map((val) => ({
          id: val.id, 
          name: val.student_name,
          age: val.student_age,
          address: val.student_address, 
          contact: val.student_contact,
        }));
        setRows(data);
      })
      .catch((err) => {
        console.error("Failed to load students:", err);
      });
  };

  const handleUpdateClick = (student) => {
    setSelectedStudent(student); 
    setOpenUpdateDialog(true); 
  };

  return (
    <Box>
      <Box sx={{ paddingBottom: "40px" }}>
        <AddFormDialog loadData={loadData} />
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, bgcolor: "#e3f2fd" }}
          aria-label="student table"
        >
          <TableHead>
            <TableRow sx={{ bgcolor: "#64b5f6" }}>
              <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>AGE</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>ADDRESS</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>CONTACT</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <CustomButton
                        variant="outlined"
                        color="primary"
                        onClick={() => handleUpdateClick(row)} 
                      >
                        Update
                      </CustomButton>
                      <CustomButton
                        variant="outlined"
                        color="error"
                        onClick={() => deleteStudent(row.id)}
                      >
                        Delete
                      </CustomButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No Students Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedStudent && (
        <UpdateFormDialog
          open={openUpdateDialog}
          student={selectedStudent}
          onClose={() => setOpenUpdateDialog(false)}
          onUpdate={loadData} 
        />
      )}
    </Box>
  );
}
