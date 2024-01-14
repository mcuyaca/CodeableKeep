import "./App.css";
// Libraries
import { useEffect, useState } from "react";
// Components
import NotesContainer from "./components/NotesContainer";
import Welcome from "./components/Welcome/";

function App() {
  //states
  const [username, setUsername] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [notes, setNotes] = useState([]);

  //useEfect
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
        isUser={isUser}
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
