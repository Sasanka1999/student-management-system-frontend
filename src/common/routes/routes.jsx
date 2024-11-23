import StdTable from "../../components/Table/Table";
import ViewStudent from "../../pages/ViewStudent/ViewStudent";
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import LogoutIcon from '@mui/icons-material/Logout';
import { LogOut } from "../../pages/Home/Home";



const route = [
    {
        name: 'View Student',
        path:'/card',
        element: <ViewStudent />,
        icon: <DashboardIcon />,
    },
    {
        name: 'Add Student ',
        path:'/add',
        element: <StdTable/>,
        icon: <PersonAddAlt1RoundedIcon />,
    },
    {
        name: 'Log Out',
        path:'/logout',
        element: <LogOut />,
        icon: <LogoutIcon />,
    },
    
];

export default route;

