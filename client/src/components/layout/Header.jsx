import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, Tooltip } from '@mui/material'
import { orange } from '../constants/color'
import { Add, Group, Logout, Menu, Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const handleMobile = () => {
        console.log("mobile")
    }
    const openSearchDialog = () => {
        console.log("openSearchDialog")
    }
    const openNewGroup = () => {
        console.log("openNewGroup")
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
                            <Iconbtn title="LogOut" icon={<Logout />} onClick={logoutHandler} />

                        </Box>


                    </Toolbar>
                </AppBar>
            </Box >
        </>
    )
}

const Iconbtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size="large" onClick={{ onClick }}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header
