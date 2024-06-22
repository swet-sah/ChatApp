import React, { memo } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { Link } from '../Styles/StyledComponents'
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0'
import AvatarCard from './AvatarCard'

const ChatItem = ({


    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert = [{
        chatId:"",
        count:0
    }],
    index = 0,
    handleDeleteChat,
}

) => {
    return (
        <Link to={`/chat/${_id}`}
            sx={{
                padding:"0"
            }}
            onContextMenu={(e) => {
                handleDeleteChat(e, _id, groupChat);
            }}>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "1rem",
                    backgroundColor: sameSender ? "black" : "unset",
                    color: sameSender ? "white" : "unset",
                    position: "relative",
                }}
            >
                {/* Avatar card */}

                <AvatarCard avatar={avatar}/>
                <Stack>
                    <Typography>
                        {name}
                    </Typography>
                    {
                        
                        newMessageAlert > 0 && (
                            
                            <Typography>
                                {
                                    console.log(newMessageAlert)
                                }
                                {newMessageAlert.count} New Message
                            </Typography>
                        )
                    }
                </Stack>
                {
                    isOnline &&
                    <Box
                        sx={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "green",
                            position: "absolute",
                            top: "50%",
                            right: "1rem",
                            transform: "translateY(-50%)"
                        }}
                    />
                }
            </div>
        </Link>
    )
}

export default memo(ChatItem);
