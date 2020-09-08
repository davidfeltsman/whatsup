import React from 'react';
import "./Chat.css";
import { Avatar, IconButton, } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons'
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">

        <p className="chat__message">
          <span className="chat__name">Spnny</span>
            Lorem ipsum dolor sit amet consectetur adipisicing.
            <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Spnny</span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dignissimos blanditiis architecto error non veniam adipisci nihil laborum repellat rem.
            <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
          />
          <button
            type="submit"
          >
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat;