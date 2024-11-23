import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Box from '@mui/material/Box';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useState } from "react";
import instance from "../../services/axiosOrder";
import { Toast } from "../../common/function";


const PaperContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const FormStyled = styled("form")(({ theme }) => ({
  width: "100%", // Fix IE 11 issue.
  marginTop: theme.spacing(1),
}));

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function LoginAction(){
      instance.post('/login',{
        email:email,
        password:password,
      })
      .then(function (responce){
        localStorage.setItem('iap-token', responce.data.token);
        Toast.fire({
          icon: "success",
          title: "Login in successfully"
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(function(){
        Toast.fire({
          icon: "error",
          title: "Invalied user name or password"
        });
      })

    }
  
    
  return (
    <div style={{marginTop:'140px'}}>
      <Container component="main" maxWidth="xs">                
        <CssBaseline />
        <PaperContainer>
          <AvatarStyled sx={{bgcolor:'#0d47a1'}}>
            <LockOutlinedIcon />
          </AvatarStyled>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <FormStyled noValidate>
            <TextField
              onChange={(val)=>setEmail(val.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(val)=>setPassword(val.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={()=> LoginAction()}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, marginBottom: 1 }} // Using the sx prop for styles
           
            >
              Log In
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p> {'Don&apos;t have an account? Go to' }</p>
              <Link href="/register" variant="body2">
                {"  ."}{" Register"}
              </Link>
            </div>
          </FormStyled>
        </PaperContainer>
      </Container>
    </div>
  );
}
