import React, { memo } from 'react'
import { ListItem, Stack, Avatar, Typography, IconButton } from '@mui/material'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'

const UserItem = ({ user, handler, handlerIsLoading, isAdded = false,styling={} }) => {
    return (
        <ListItem >
            <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={"1rem"}
                width={"100%"}
                {...styling}
            >
                <Avatar />
                <Typography
                    variant='body1'
                    sx={{
                        flexGrow: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        display: "-webkit-box",
                    }}

                >
                    {user.name}
                </Typography>
                <IconButton
                    size="small"
                    sx={{
                        bgcolor: isAdded ? "error.main" : "primary.main",
                        color: "white",
                        "&:hover": {
                            bgcolor: isAdded ? "error.dark" : "primary.dark",
                        },

                    }}
                    onClick={() => handler(user._id)}
                    disabled={handlerIsLoading}
                >
                    {
                        (isAdded) ? <RemoveIcon /> : <AddIcon />
                    }

                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem);
