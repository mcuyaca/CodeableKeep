import { useState, useEffect } from "react";
import Aside from "../Aside";
import NotesForm from "../NotesForm";
import PinnedNotes from "../PinnedNotes";
import TrashNotes from "../TrashNotes";
import Header from "../Header";
import OtherNotes from "../OtherNotes";
import Message from "../Message";
import { NotesContainerProps } from "../../models/types";
import { API_URL } from "../../App";

function NotesContainer(props: NotesContainerProps) {
  const { username, notes, setIsUser, setNotes } = props;

  const [page, setPage] = useState("notes");
  const url = `${API_URL}/${username}/notes`;

  useEffect(() => {
    console.log("Haciendo el fetch inicial");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNotes(data.notes));
  }, [url, setNotes]);

  return (
    <>
      <Header setIsUser={setIsUser} username={username} />
      <div className="flex min-h-[calc(100vh-70px)] flex-row">
        <Aside page={page} setPage={setPage} />
        <div className="mx-auto flex flex-col items-center justify-start gap-12 px-4 py-12">
          {page === "notes" && (
            <NotesForm url={url} setNotes={setNotes} username={username} />
          )}
          <div className="flex flex-col items-center justify-center gap-4">
            {notes.length === 0 ? (
              <Message message={"NO NOTES"} />
            ) : (
              page === "notes" && (
                <>
                  <PinnedNotes
                    currentNotes={notes}
                    setNotes={setNotes}
                    username={username}
                  />
                  <OtherNotes
                    currentNotes={notes}
                    setNotes={setNotes}
                    username={username}
                  />
                </>
              )
            )}
            {notes.length !== 0 && page === "trash" && (
              <TrashNotes
                currentNotes={notes}
                setNotes={setNotes}
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
