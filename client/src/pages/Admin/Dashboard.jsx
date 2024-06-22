import React from 'react'
import Adminlayout from '../../components/layout/Adminlayout'
import { Container, Paper, Stack, Typography, Box } from '@mui/material'
import { AdminPanelSettings, Group, Message, Notifications, Person, Remove } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField } from '../../components/Styles/StyledComponents'
import { matBlack } from '../../components/constants/color'





const Dashboard = () => {

    const Appbar = (
        <Paper
            elevation={3}
            sx={{
                padding: "2rem",
                margin: "2rem 0",
                borderRadius: "1rem"
            }}
        >
            <Stack direction={"row"} alignItem={"center"} spacing={"1rem"}>
                <AdminPanelSettings sx={{ fontSize: "3rem" }} />
                <SearchField placeholder='Search...' />
                <CurveButton>Search</CurveButton>
                <Box flexGrow={1} />
                <Typography
                    display={{
                        xs: "none",
                        lg: "block",
                    }}
                    color={"rgba(0,0,0,0.7"}
                    textAlign={"center"}
                >
                    {moment().format("dddd, D MMMM YYYY")}
                </Typography>
                <Notifications />
            </Stack>
        </Paper>
    );

    const Widgets = (
        <Stack
            direction={{
                xs: "column",
                sm: "row",
            }}
            spacing="2rem"
            justifyContent="space-between"
            alignItems={"center"}
            margin={"2rem 0"}

        >
            <Widget title={"Users"} value={34} Icon={<Person />} />
            <Widget title={"Chats"} value={3} Icon={<Group />} />
            <Widget title={"Messages"} value={453} Icon={<Message />} />
        </Stack>
    );

    return (
        <Adminlayout>
            <Container component={"main"}>
                {Appbar}
                <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
                    <Paper
                        elevation={3}
                        sx={
                            {
                                padding: "2rem 3.5rem",
                                borderRadius: "1rem",
                                width: "100%",
                                maxWidth: "45rem",
                            }
                        }

                    >
                        <Typography>
                            Last Message
                        </Typography>
                        {"Chat"}

                    </Paper>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "1rem",
                            borderRadius: "1rem",
                            width: { xs: "100%", sm: "50%" },
                            maxWidth: "25rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            position: "relative",
                        }}

                    >
                        {"Dought chart"}
                        <Stack
                            position={"absolute"}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            spacing={"0.5rem"}
                            width={"100%"}
                            height={"100%"}
                        >
                            <Group />
                            <Typography>Vs</Typography>
                            <Person />
                        </Stack>
                    </Paper>
                </Stack>
                {Widgets}
            </Container>
        </Adminlayout>
    )
}

const Widget = ({ title, value, Icon }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                padding: "2rem",
                borderRadius: "1rem",
                width: "20rem",
                margin: "2rem 0"
            }}
        >
            <Stack alignItems={"center"} spacing={"1rem"}>
                <Typography
                    sx={
                        {
                            color: "rgba(0,0,0,0.7)",
                            borderRadius: "50%",
                            border: `5px solid ${matBlack}`,
                            width: "5rem",
                            height: "5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                        }
                    }>
                    {value}
                </Typography>
                <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
                    {Icon}
                    <Typography>
                        {title}
                    </Typography>
                </Stack>
            </Stack>

        </Paper>
    )
}
export default Dashboard
