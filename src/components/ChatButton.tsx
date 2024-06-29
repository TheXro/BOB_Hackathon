//using floating action button to open chat
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

export default function ChatButton() {
  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <Fab color="primary" aria-label="chat">
        <ChatIcon />
      </Fab>
    </Box>
  );
}
