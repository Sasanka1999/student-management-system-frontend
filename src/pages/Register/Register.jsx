import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useState } from "react";
import instance from "../../services/axiosOrder";
import { useNavigate } from "react-router-dom";
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

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comPassword, setComPassword] = useState('');

  const SubmitRegister = () => {
    if (password === comPassword) {

      const data = {
        name: name,
        email: email,
        password: password,
      }

      instance.post('/register', data)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Registed in successfully"
          });
          setTimeout(function () {
            navigate('/login')
          }, 1000)
        })
        .catch(() => {
          Toast.fire({
            icon: "error",
            title: "Registed in failed"
          });
        });

    } else {
      Toast.fire({
        icon: "error",
        title: "Conform password invalide"
      });

    }

  }

  return (
    <div style={{ marginTop: "140" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <PaperContainer>
          <AvatarStyled sx={{ bgcolor: '#0d47a1' }}>
            <LockOutlinedIcon />
          </AvatarStyled>
          <Typography component="h1" variant="h5">
            REGISTER
          </Typography>
          <FormStyled noValidate>
            <TextField
              onChange={(val) => setName(val.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              onChange={(val) => setEmail(val.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              onChange={(val) => setPassword(val.target.value)}
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
            <TextField
              onChange={(val) => setComPassword(val.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="confirm-password"
            />
            <FormControlLabel
              control={<Checkbox value="terms" color="primary" />}
              label="I accept the terms and conditions"
            />
            <Button
              onClick={() => SubmitRegister()}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, marginBottom: 1 }} // Using the sx prop for styles
            >
              Register
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p> {"Already have an account? Go to"}</p>
              <Link href="/login" variant="body2">
                {"  ."}{" Log In"}
              </Link>
            </div>
          </FormStyled>
        </PaperContainer>
      </Container>
    </div>
  );
}
