import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../constants/Sampledata'

import { useInputValidation } from '6pp'
import UserItem from '../shared/UserItem'



const NewGroup = () => {
  
  const submitHandler=()=>{

  }

  const closeHandler = ()=>{
    
  }

  const [members,setMembers] = useState(sampleUsers);
  const [selectedMembers,setSelectedMembers] = useState([]);
  
  const selectMemberHandler = (_id) => {
    setSelectedMembers((prev)=>(
      prev.includes(_id)?(prev.filter((currEle)=>(currEle !== _id))):
      [...prev,_id]
    ))
  }

  const groupName = useInputValidation("");
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>
        <TextField label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}>

        </TextField>
        <Typography variant='body1'>
          Members
        </Typography>
        <Stack >
          {
            sampleUsers.map((user) => {
              return (
                <UserItem user={user} key={user._id}
                  handler={selectMemberHandler} isAdded={(selectedMembers.includes(user._id)?true:false)}
                />
              )

            })
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>

          <Button variant='text' color='error' >
            Cancel
          </Button>
          <Button variant="contained" onClick={submitHandler} >
            Create Group
          </Button>
        </Stack>
      </Stack>
    </Dialog>

  )
}

export default NewGroup
