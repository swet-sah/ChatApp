import React, { Suspense, lazy, memo, useEffect, useState } from 'react'
import { Grid, Tooltip, IconButton, Box, Drawer, Stack, Typography, TextField, Button, Backdrop } from '@mui/material'
import { Add, Delete, Done, Edit as EditIcon, KeyboardBackspace, Menu as MenuIcon } from '@mui/icons-material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Link } from '../components/Styles/StyledComponents'
import AvatarCard from '../components/shared/AvatarCard'
import { SampleChats, sampleUsers } from '../components/constants/Sampledata'
import UserItem from '../components/shared/UserItem'
const Groups = () => {

  const ConfirmDeleteDialog = lazy(() =>
    import('../components/dialogs/ConfirmDeleteDialog')
  )

  const AddMemberDialog = lazy(() =>
    import('../components/dialogs/AddMemberDialog')
  )

  const [isAddMember, setIsAddMember] = useState(false)
  const chatId = useSearchParams()[0].get("group")
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate('/')
  }
  const [isEdit, setIsEdit] = useState(false);
  const [recentGroupName, setRecentGroupName] = useState("");
  const [updatedGroupName, setUpdatedGroupName] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleMobile = () => { setIsMobileMenuOpen((prev) => !prev) };
  const handleMobileClose = () => { setIsMobileMenuOpen(false) };

  const confirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete Group");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };
  const deleteHandler = () => {
    console.log("Delete Group");
  }
  const openAddMemberHandler = () => {
    setIsAddMember(true);
    console.log("Add Member");
  };

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(updatedGroupName)
  }

  const removeMemberHandler = (id) => {
    console.log(`Remove Member ${id}`);
  };
  useEffect(() => {
    if (chatId) {
      setRecentGroupName(`Group Name ${chatId}`);
      setUpdatedGroupName(`Group Name ${chatId}`);
    }

    return (() => {
      setIsEdit(false);
      setRecentGroupName("");
      setUpdatedGroupName("");
    })
  }, [chatId]);

  const IconBtns = (
    <>
      <Box sx={{
        display: {
          xs: "block",
          sm: "none",
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }
      }}>

        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            color: "white",
            bgcolor: "rgba(0,0,0,0.8)",
            ":hover": {
              bgcolor: "rgba(0,0,0,1)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );


  const GroupName = (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={"1rem"}
        padding={"3rem"}
      >
        {
          isEdit ?
            <>
              <TextField value={updatedGroupName}
                onChange={(e) => {
                  setUpdatedGroupName(e.target.value);
                }}
              />
              <IconButton onClick={updateGroupName}>
                <Done />
              </IconButton>

            </> :
            <>
              <Typography variant='h4'>
                {recentGroupName}
              </Typography>
              <IconButton onClick={() => { setIsEdit(true) }} >
                <EditIcon />
              </IconButton>
            </>
        }
      </Stack>
    </>
  )

  const ButtonGroup = (
    <>
      <Stack
        direction={{
          sm: "row",
          xs: "column-reverse",
        }}
        spacing={"1rem"}
        p={{
          xs: "0",
          sm: "1rem",
          md: "1rem 4rem",
        }}
      >
        <Button size='large' color='error' variant='outlined' startIcon={<Delete />}
          onClick={confirmDeleteHandler}>
          Delete Group
        </Button>
        <Button size='large' variant='contained' startIcon={<Add />}
          onClick={openAddMemberHandler}>
          Add Member
        </Button>
      </Stack>
    </>
  )

  return (
    <Grid container height={"100vh"} >
      <Grid item
        sx={{
          display: { xs: "none", sm: "block" }
        }}
        sm={4}
        bgcolor={"bisque"}
      >
        <GroupList myGroups={SampleChats} />
      </Grid>
      <Grid item xs={12} sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }} >
        {
          IconBtns
        }
        {
          recentGroupName && (
            <>
              {GroupName}
              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant='body1'
              >
                Members
              </Typography>
              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: 0,
                  md: "1rem,4rem",
                }}
                spacing={"2rem"}
                height={"50vh"}
                overflow={"auto"}
              >
                {

                  sampleUsers.map((i, index) => {
                    return (
                      <UserItem key={index} user={i} isAdded styling={{
                        boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                        padding: "1rem 2rem",
                        borderRadius: "1rem",
                      }}
                        handler={removeMemberHandler}
                      />
                    )
                  })
                }
              </Stack>
              {
                ButtonGroup
              }
            </>

          )
        }
      </Grid>
      {
        isAddMember && (
          <>
            <Suspense fallback={<Backdrop open />}>
              <AddMemberDialog />
            </Suspense>
          </>
        )
      }

      {
        confirmDeleteDialog && (
          <>
            <Suspense fallback={<Backdrop open />}>
              <ConfirmDeleteDialog
                open={confirmDeleteDialog}
                handleClose={closeConfirmDeleteHandler}
                deleteHandler={deleteHandler}
              />
            </Suspense>
          </>
        )
      }

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          overflow: "auto",


        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList w={"60vw"} myGroups={SampleChats} />
      </Drawer>

    </Grid>
  )
}

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <>
      <Stack width={w}
        sx={{
          backgroundColor: "bisque",
          height: "100vh"
        }}
        overflow={"auto"}
      >
        {
          myGroups.length > 0 ? (
            myGroups.map((group, index) => {
              return <GroupListItem group={group} chatId={chatId} key={index} />
            }
            )) : (
            <Typography textAlign={"center"} padding="1rem">
              No Groups
            </Typography>
          )
        }
      </Stack>
    </>
  )

}

const GroupListItem = memo(({ group, chatId }) => {
  const {
    name, avatar, _id
  } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack
        padding={"1rem"}
        direction={"row"}
        spacing={"2rem"}
        alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>
          {name}
        </Typography>
      </Stack>
    </Link>
  )

})

export default Groups
