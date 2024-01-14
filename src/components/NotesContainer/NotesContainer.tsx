import { useState, useEffect } from "react";
import Aside from "../Aside";
import NotesForm from "../NotesForm";
import PinnedNotes from "../PinnedNotes";
import TrashNotes from "../TrashNotes";
import Header from "../Header";
import OtherNotes from "../OtherNotes";
import Message from "../Message";
import { notesSchema } from "../../models/notes";

interface NotesContainerProps {
  username: string;
  notes: notesSchema;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}

function NotesContainer(props: NotesContainerProps) {
  const { username, notes, setIsUser } = props;
  const [currentNotes, setCurrentNotes] = useState(notes);
  const [page, setPage] = useState("notes");
  const url = `https://codeable-keep-api-production.up.railway.app/api/${username}/notes`;

  useEffect(() => {
    console.log("Haciendo el fetch inicial");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCurrentNotes(data.notes));
  }, [url]);

  return (
    <>
      <Header setIsUser={setIsUser} username={username} />
      <div className="flex min-h-[calc(100vh-70px)] flex-row">
        <Aside page={page} setPage={setPage} />
        <div className="mx-auto flex flex-col items-center justify-start gap-12 px-4 py-12">
          {page === "notes" && (
            <NotesForm
              url={url}
              setCurrentNotes={setCurrentNotes}
              username={username}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-4">
            {notes.length === 0 && <Message message={"NO NOTES"}></Message>}
            {notes.length !== 0 && page === "notes" && (
              <>
                <PinnedNotes
                  currentNotes={currentNotes}
                  setCurrentNotes={setCurrentNotes}
                  username={username}
                />
                <OtherNotes
                  currentNotes={currentNotes}
                  setCurrentNotes={setCurrentNotes}
                  username={username}
                />
              </>
            )}
            {notes.length !== 0 && page === "trash" && (
              <TrashNotes
                currentNotes={currentNotes}
                setCurrentNotes={setCurrentNotes}
                username={username}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesContainer;
