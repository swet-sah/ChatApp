import React, { Suspense, lazy, useState } from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, Tooltip, Backdrop } from '@mui/material'
import { orange } from '../constants/color'
import { Add, Group, Logout, Menu, Notifications, Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const SearchPage = lazy(()=>import("../specific/SearchPage"));
    const NotificationDialog = lazy(()=>import("../specific/Notifications"));
    const NewGroupDialog = lazy(()=>import("../specific/NewGroup"));

    const handleMobile = () => {
        setIsMobile((prev) => !prev)
    }
    const openSearchDialog = () => {
        setIsSearch((prev) => !prev);
    }
    const openNewGroup = () => {
        setIsNewGroup((prev) => !prev);
    }

    const openNotification = () => {
        setIsNotification((prev) => !prev);
    }

    const navigateToGroup = () => {
        navigate("/groups")
    }
    const logoutHandler = () => {

    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position='static' sx={{
                    bgcolor: orange
                }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{
                                display: { xs: "none", sm: "block" }
                            }}
                        >ChattApp

                        </Typography>
                        <Box
                            sx={{
                                display: { xs: "block", sm: "none" }
                            }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <Menu />
                            </IconButton>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1
                            }}
                        />
                        <Box>

                            <Iconbtn title="Search" icon={<Search />} onClick={openSearchDialog} />
                            <Iconbtn title="New Group" icon={<Add />} onClick={openNewGroup} />
                            <Iconbtn title="Manage Group" icon={<Group />} onClick={navigateToGroup} />
                            <Iconbtn title="Notifications" icon={<Notifications />} onClick={openNotification} />
                            <Iconbtn title="LogOut" icon={<Logout />} onClick={logoutHandler} />

                        </Box>


                    </Toolbar>
                </AppBar>
            </Box >
            {
                isSearch && (
                    <Suspense fallback={<Backdrop open/>}><SearchPage /></Suspense>

                )
            }
             {
                isNotification && (
                    <Suspense fallback={<Backdrop open/>}><NotificationDialog /></Suspense>

                )
            }
             {
                isNewGroup && (
                    <Suspense fallback={<Backdrop open/>}><NewGroupDialog /></Suspense>

                )
            }
        </>
    )
}

const Iconbtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header
