import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { SampleNotifications } from '../constants/Sampledata'

const Notifications = () => {

    const friendRequestHandler = ({ _id, accept }) => {

    }
    return (
        <Dialog open>
            <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
                <DialogTitle>Notifications</DialogTitle>
                {
                    SampleNotifications.length > 0 ? (
                        SampleNotifications.map((i) => {
                            return (
                                <NotificationItem key={i._id} sender={i.sender} _id={i._id}
                                    handler={friendRequestHandler}
                                />
                            )
                        })
                    ) :
                        (
                            <Typography textAlign={"center"}>No Notifications</Typography>
                        )
                }
            </Stack>
        </Dialog>

    )
}

const NotificationItem = memo(({ sender, _id, handler }) => {
    return (
        <>
            <ListItem >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={"1rem"}
                    width={"100%"}
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
                        {`${sender.name} sent you a friend request.`}
                    </Typography>
                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}>
                        <Button onClick={() => {
                            handler({ _id, accept: true })
                        }}>
                            Accept
                        </Button>
                        <Button color="error" onClick={() => {
                            handler({ _id, accept: false })
                        }}>
                            Reject
                        </Button>
                    </Stack>
                </Stack>
            </ListItem>
        </>
    )
})

export default Notifications
