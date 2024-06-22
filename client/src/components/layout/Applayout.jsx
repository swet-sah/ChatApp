import { React } from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../specific/ChatList'
import { SampleChats } from '../constants/Sampledata'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'

const Applayout = () => (WrappedComponent) => {
    return (props) => {
        const params = useParams();
        const chatId = params.chatId;
        const handleDeleteChat = (e, _id, groupChat) => {
            e.preventDefault();

            console.log(`delete chat ${_id} ${groupChat}`)
        }

        return (
            <>
                <Title />
                <Header />
                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid
                        item
                        sm={4}
                        md={3}
                        sx={{
                            display: { xs: "none", sm: "block" }
                        }}
                        height={"100%"}
                    >
                        {/* chatlist in left */}
                        <ChatList
                            chats={SampleChats}
                            chatId={chatId}
                            onlineUsers={["1", "2"]}
                            handleDeleteChat={handleDeleteChat}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
                        {/* home and chat in middle */}
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid
                        item
                        nd={4}
                        lg={3}
                        height={"100%"}
                        sx={{
                            display: { xs: "none", md: "block" },
                            padding: "2rem",
                            bgcolor: "rgba(0,0,0,0.85)"
                        }}
                    >
                        {/* profile in the right */}
                        <Profile />
                    </Grid>
                </Grid>

            </>

        )
    }
}

export default Applayout
