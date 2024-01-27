import "./App.css";

import { useEffect, useState } from "react";

import NotesContainer from "./components/NotesContainer";
import Welcome from "./components/Welcome/";
import { Note } from "./models/types";

export const API_URL = `https://codeable-keep.cyclic.app/`;

function App() {
  const [username, setUsername] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [notes, setNotes] = useState([] as Note[]);

  useEffect(() => {
    const storageIsuser = localStorage.getItem("isUser");
    setIsUser(storageIsuser === "true");
    const storageUsername = localStorage.getItem("username");
    setUsername(storageUsername || "");
    const storageNotes = JSON.parse(localStorage.getItem("notes")!);
    setNotes(storageNotes);
  }, []);

  if (isUser) {
    return (
      <NotesContainer
        username={username}
        setIsUser={setIsUser}
        notes={notes}
      ></NotesContainer>
    );
  }

  return (
    <>
      <Welcome
        username={username}
        setUsername={setUsername}
        setIsUser={setIsUser}
        setNotes={setNotes}
      />
    </>
  );
}

export default App;
