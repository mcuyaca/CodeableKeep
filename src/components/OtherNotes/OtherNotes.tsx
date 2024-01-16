import { OtherNotesProps } from "../../models/types";
import Note from "../Note";

function OtherNotes({
  setCurrentNotes,
  currentNotes,
  username,
}: OtherNotesProps) {
  const orderNotes = [...currentNotes].reverse();
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold leading-7 ">OTHERS</h2>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
          {orderNotes.map(
            (note) =>
              note.pinned === false &&
              note.deleted === false && (
                <Note
                  username={username}
                  key={note.id}
                  data={note}
                  setCurrentNotes={setCurrentNotes}
                />
              ),
          )}
        </ul>
      </div>
    </>
  );
}

export default OtherNotes;
