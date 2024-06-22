import { Grid, Box, IconButton, Drawer, Stack, Typography, styled } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon, Dashboard as DashboardIcon, ManageAccounts, Groups, Message, ExitToApp } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link as LinkComponent, useLocation , Navigate } from 'react-router-dom'
import { matBlack } from '../constants/color';

const Link = styled(LinkComponent)`
text-decoration: none;
border-radius: 2rem;
padding: 1rem 2rem;
color: black;
&:hover{
    color: rgba(0,0,0,0.54);
}
`;
const Sidebar = ({ w = "100%" }) => {
    const location = useLocation();

    const adminTabs = [
        {
            name: "Dashboard",
            path: "/Admin/dashboard",
            icon: <DashboardIcon />
        },
        {
            name: "Users",
            path: "/Admin/user-management",
            icon: <ManageAccounts />
        },
        {
            name: "Chats",
            path: "/Admin/chats-management",
            icon: <Groups />
        },
        {
            name: "Messages",
            path: "/Admin/messsages",
            icon: <Message />
        }
    ]

    const logoutHandler = () => {
        console.log("logout")
    }

    return (
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
            <Typography variant="h5" textTransform={"uppercase"}>
                ChattApp
            </Typography>
            <Stack spacing={"1rem"}>
                {
                    adminTabs.map((tab => {
                        return (
                            <Link key={tab.path} to={tab.path}
                                sx={
                                    location.pathname === tab.path && {
                                        bgcolor: matBlack,
                                        color: "white",
                                        ":hover": { color: "white" }
                                    }
                                }
                            >
                                <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                                    {tab.icon}
                                    <Typography>{tab.name}</Typography>
                                </Stack>
                            </Link>
                        )


                    }))
                }
                <Link onClick={logoutHandler} >
                    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                        <ExitToApp />
                        <Typography>Logout</Typography>
                    </Stack>
                </Link>
            </Stack>

        </Stack>
    )
}

const isAdmin = true;

const Adminlayout = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false)
    const handleMobile = () => {
        setIsMobile(!isMobile)
    }
    const handleClose = () => {
        setIsMobile(false)
    }

    if (!isAdmin) return <Navigate to="/admin" />

    return (
        <Grid container minHeight={"100vh"}>
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    top: "1rem",
                    right: "1rem",
                }}
            >
                <IconButton onClick={handleMobile}>
                    {
                        isMobile ? <CloseIcon /> : <MenuIcon />
                    }
                </IconButton>

            </Box>
            <Grid
                item
                md={4}
                lg={3}
                sx={{ display: { xs: "none", md: "block" } }}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "#f5f5f5", }}>
                {children}
            </Grid>
            <Drawer open={isMobile} onClose={handleClose}>

            </Drawer>

        </Grid>
    )
}

export default Adminlayout
