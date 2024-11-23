import { Box } from "@mui/material";
import StuCard from "../../components/student/Student";
import instance from "../../services/axiosOrder";
import { useEffect, useState } from "react";

export default function ViewStudent() {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        instance.get('/student/getAll')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
            {
                data.map((val, index) => (
                    <StuCard
                        key={index}
                        name={val.student_name}
                        address={val.student_address}
                        age={val.student_age}
                        contact={val.student_contact}
                    />
                ))
            }
        </Box>
    )
}