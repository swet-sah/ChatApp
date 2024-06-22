import React, { useState } from 'react'
import { Dialog, Stack, DialogTitle, Button,Typography } from '@mui/material'
import { sampleUsers } from '../constants/Sampledata'
import UserItem from '../shared/UserItem'


const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectMemberHandler = (_id) => {
        setSelectedMembers((prev) => (
            prev.includes(_id) ? (prev.filter((currEle) => (currEle !== _id))) :
                [...prev, _id]
        ))
    }

    const addMemberSubmitHandler = () => {
        closeHandler();
    }

    const closeHandler = () => {
        setSelectedMembers([]);
        setMembers([]);
    }

    return (
        <>
            <Dialog open onClose={closeHandler}>
                <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
                    <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
                    <Stack>
                        {
                            members.length > 0 ? (members.map((i, index) => {
                                return (
                                    <UserItem user={i} handler={selectMemberHandler} key={index}
                                        isAdded={selectedMembers.includes(i._id)}
                                    />
                                )

                            })) : (
                                <Typography textAlign={"center"}>
                                    No Friends
                                </Typography>
                            )
                        }
                    </Stack>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                    >
                        <Button color='error' onClick={closeHandler}>Cancel</Button>
                        <Button variant='contained' onClick={addMemberSubmitHandler}
                            disabled={isLoadingAddMember}>Submit Changes</Button>
                    </Stack>

                </Stack>
            </Dialog>
        </>
    )
}

export default AddMemberDialog
