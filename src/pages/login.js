import React, { useRef } from "react"
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
import { UserContext } from "../components/UseToken"

// import { navigate } from '@reach/router'
import { callApi } from "../../utils/auth"
import LoggedIn from "../components/LoggedIn"
// import LoadingSkelton from "../components/LoadingSkelton"

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  skelton: {
    width: 300,
  },
}))

export default function SignIn() {
  const { token, setToken } = React.useContext(UserContext)

  const classes = useStyles()
  const [email, setEmail] = React.useState("")
  const [pass, setPass] = React.useState("")
  const [errorMsg, setErrorMsg] = React.useState("")
  console.log(token)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMsg(null)
    try {
      const response = await callApi("/auth/local", "POST", {
        identifier: email,
        password: pass,
      })
      console.log(response)
      if (response.user) {
        setToken(response.jwt)

        navigate("/profile")
      } else {
        console.log(response.data[0].messages[0].message)
        // throw "Can't login, Please try again"
        setErrorMsg(response.data[0].messages[0].message)
      }
    } catch (err) {
      setErrorMsg(err)
    }
  }
  return (
    <>
      {token ? (
        <LoggedIn />
      ) : (
        <Container
          component="main"
          maxWidth="xs"
          style={{ margin: "100px auto" }}
        >
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
              Sign in
            </Typography>
            <form className={classes.form} validate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      )}
    </>
  )
}
