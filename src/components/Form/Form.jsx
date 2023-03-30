import { useState } from "react";

export { Form };

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Form = ({ title, handleClick }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    login: "",
    password: "",
    showPassword: false,
  });
  const [openRegistration, setOpenRegistration] = useState(false);

  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegistrationOpen = () => {
    setOpenRegistration(true);
  };

  const handleRegistrationClose = () => {
    setOpenRegistration(false);
  };

  // custom
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    //     <div>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="email"
    //       />
    //       <input
    //         type="password"
    //         value={pass}
    //         onChange={(e) => setPass(e.target.value)}
    //         placeholder="password"
    //       />
    //       <button onClick={() => handleClick(email, pass)}>{title}</button>
    //     </div>

    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        className={classes.textField}
        label="Login"
        variant="outlined"
        value={values.login}
        onChange={handleInputChange("login")}
      />
      <TextField
        className={classes.textField}
        label="Password"
        variant="outlined"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleInputChange("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClick(email, pass)}
      >
        Login
      </Button>
      <Link href="#" onClick={handleRegistrationOpen}>
        Don't have an account? Register now!
      </Link>
      {/* Компонент окна регистрации */}
      {/* <RegistrationDialog open={openRegistration} onClose={handleRegistrationClose} /> */}
    </form>
  );
};

export { Form };

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    login: "",
    password: "",
    showPassword: false,
  });
  const [openRegistration, setOpenRegistration] = useState(false);

  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegistrationOpen = () => {
    setOpenRegistration(true);
  };

  const handleRegistrationClose = () => {
    setOpenRegistration(false);
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        className={classes.textField}
        label="Login"
        variant="outlined"
        value={values.login}
        onChange={handleInputChange("login")}
      />
      <TextField
        className={classes.textField}
        label="Password"
        variant="outlined"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleInputChange("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Link href="#" onClick={handleRegistrationOpen}>
        Don't have an account? Register now!
      </Link>
      {/* Компонент окна регистрации */}
      {/* <RegistrationDialog open={openRegistration} onClose={handleRegistrationClose} /> */}
    </form>
  );
};

export default LoginForm;
