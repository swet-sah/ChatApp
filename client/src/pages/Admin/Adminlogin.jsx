import React from 'react'
import { CameraAlt } from '@mui/icons-material';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { useFileHandler, useInputValidation } from '6pp';
import { bgGradient } from '../../components/constants/color';


const Adminlogin = () => {

  const secretKey = useInputValidation("")

  const submitHandler = () => {
    e.preventDefault();
    console.log("submit")
  }

  const isAdmin = false;

  if(isAdmin) return <Navigate to ="/admin/dashboard"/>

  return (
    <div
      style={{
        backgroundImage: bgGradient
      }}
    >
      <Container component={"main"} maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography variant='h5'>
            Admin Login
          </Typography>
          <form style={{
            width: "100%",
            marginTop: "1rem"

          }}
            onSubmit={submitHandler}>
            <TextField
              required
              fullWidth
              label="secret key"
              type='password'
              margin='normal'
              variant='outlined'
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />
            <Button
              sx={{
                marginTop: "1rem"
              }}
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
            >Login</Button>
          </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Adminlogin
