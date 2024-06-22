import React from 'react'
import { Stack, Avatar, Typography } from '@mui/material'
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon
} from '@mui/icons-material'
import moment from "moment"

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={
          {
            width: 200,
            height: 200,
            marginBottom: "1rem",
            objectFit: "contain",
            border: "5px solid white",
          }
        }
      />
      <ProfileCard text={"dsfa dfja"} heading={"Bio"} />
      <ProfileCard text={"swetasahu"} heading={"Username"} icon={<UserNameIcon/>}/>
      <ProfileCard text={"sweta sahu"} heading={"Name"} icon={<FaceIcon/>} />
      <ProfileCard text={moment('2024-01-05T00:00:00.000Z').fromNow()} heading={"Joined"} icon={<CalenderIcon/>} />
    </Stack>
  )
  
}
const ProfileCard = ({ text, icon, heading }) => {
  return (
    <>
      <Stack
        spacing={"1rem"}
        direction={"row"}
        alignItems={"center"}
        color={"white"}
        textAlign={"center"}
      >
        {
          icon && icon
        }
        <Stack>
          <Typography variant={"body1"}>{text}</Typography>
          <Typography color={"gray"} variant={"caption"}>
            {heading}
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Profile
