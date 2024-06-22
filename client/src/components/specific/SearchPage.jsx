import React, { useState } from 'react'
import { Dialog, DialogTitle, TextField, InputAdornment, Stack, List, ListItem } from '@mui/material'
import { useInputValidation } from '6pp'
import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../constants/Sampledata'
const SearchPage = () => {
  const search = useInputValidation("");

  let isLoadingSendFriendRequest = false;
  const [users, setUsers] = useState(sampleUsers)

  const addFriendHandler = () => {
    console.log(id)
  }
  return (
    <>
      <Dialog open>
        <Stack p={"2rem"} direction="column" width={"25rem"}>
          <DialogTitle textAlign={"center"}>Find People</DialogTitle>
          <TextField
            label=""
            value={search.value}
            onChange={search.changeHandler}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          >

          </TextField>
          <List>
            {
              users.map((user) => {
                return (
                  <UserItem user={user} key={user._id}
                    handler={addFriendHandler}
                    handlerIsLoading={isLoadingSendFriendRequest}
                  />
                )

              })
            }
          </List>
        </Stack>
      </Dialog>
    </>
  )
}

export default SearchPage
