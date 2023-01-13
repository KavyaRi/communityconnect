import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import ChatContainer from "./ChatContainer";
import Contacts from "./Contacts";
import Welcome from "./Welcome";
import { ReactSession } from 'react-client-session';

function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(async () => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem("chat-app-user")
        )
      );
    }
  }, []);
  const mentee = ReactSession.get("Registernum")
  useEffect(async () => {
    if (currentUser) {
      const data = await axios.post(`http://localhost:3001/AllUsers`, {
      mentee,
      }).then(response =>{
        return response;
        //console.log(response);
      });
      setContacts(data.data);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io('http://localhost:3001/');
      socket.current.emit("add-user", currentUser[0]._id);
    }
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container>
        <div className="Box">
        <Contacts contacts={contacts} changeChat={handleChatChange}/>
        {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket}/>
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width:auto;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #512DA8;
  .Box {
    width:90%;
    height:85vh;
    background-color: black;
    /*border: 2px solid #00000076;*/
    display: grid;
    grid-template-columns:25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
export default Chat;