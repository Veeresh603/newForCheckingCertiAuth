import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { navigate } from "gatsby"
import { callApi } from "../../utils/auth"
import { UserContext } from "../components/UseToken"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
export default function SignUp() {
  const classes = useStyles()
  const [user, setUser] = React.useState("")
  const [pass, setPass] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [errorMsg, setErrorMsg] = React.useState("")
  const { token } = React.useContext(UserContext)

  // const LoginButton = (props) => (
  //   <a href={`${backendURL}/connect/${props.providerName}`}>
  //     <button>Connect to {props.providerName}</button>
  //   </a>
  // )
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await callApi("/auth/local/register", "POST", {
        username: user,
        email: email,
        password: pass,
      })
      console.log(response)

      !response.user
        ? setErrorMsg(
            !response.message
              ? `Email or User is already taken`
              : `${response.data[0].messages[0].message} or First name is already taken`
          )
        : navigate("/email-confirm")

      // if (!response.user) {
      //   setErrorMsg(
      //     !response.message
      //       ? `Email or User is already taken`
      //       : response.message[0].messages[0].message
      //   )
      // } else {
      //   navigate("/email-confirm")
      // }
    } catch (err) {
      console.log(err)
    }
  }
  return token ? (
    <h2>you've already have an account</h2>
  ) : (
    <Container component="main" maxWidth="xs" style={{ margin: "100px auto" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h6
          style={{
            color: "red",
            fontSize: "1rem",
            fontWeight: "500",
            margin: "0",
            textAlign: "center",
          }}
        >
          {" "}
          {errorMsg}
        </h6>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* <h2 style={{ color: "red" }}>{errorMsg}</h2> */}

        <form className={classes.form} validate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {/* {providerNames.map((d, i) => (
          <ul style={{ listStyleType: "none" }}>
            <li key={d}>
              <LoginButton providerName={d} />
            </li>
          </ul>
        ))} */}
      </div>
    </Container>
  )
}
