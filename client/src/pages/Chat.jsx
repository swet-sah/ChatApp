import React, { useRef } from 'react'
import Applayout from '../components/layout/Applayout'
import { Stack, IconButton } from '@mui/material'
import { grayColor, orange } from '../components/constants/color';
import { AttachFile, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/Styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../components/constants/Sampledata';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {
  const containerRef = useRef(null);
  const user = {
    _id: "dfa",
    name: "sweta",
  }
  return (
    <>
      <Stack ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Message Render */}

        {
          sampleMessage.map((msg,index) => {
            return (
              <MessageComponent message={msg} user={user} key={index} />

            )
          })
        }
      </Stack>
      <form style={{
        height: "10%",
      }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >

          <IconButton
            sx={{
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFile />
          </IconButton>

          <InputBox placeholder='Type Message Here...' />

          <IconButton type='submit'
            sx={{
              rotate: "-30deg",
              backgroundColor: orange,
              color: "white",
              marginLeft: "1rem",
              paddingLeft: "0.5rem",
              "&:hover": {
                backgroundColor: "error.dark",
                color: "white",
              }
            }}>
            <SendIcon />
          </IconButton>

        </Stack>

      </form>

      {/* <FileMenu /> */}

    </>
  )
}

export default Applayout()(Chat);
