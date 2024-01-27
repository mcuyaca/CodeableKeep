import { TrashNotesProps } from "../../models/types";
import Note from "../Note";

function TrashNotes({ setNotes, currentNotes, username }: TrashNotesProps) {
  const orderNotes = [...currentNotes].reverse();
  return (
    <>
      <div className="flex flex-col gap-4  ">
        <h2 className=" text-lg font-bold leading-7">TrashNotes</h2>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
          {orderNotes.map(
            (note) =>
              note.deleted === true && (
                <Note
                  username={username}
                  key={note.id}
                  data={note}
                  setNotes={setNotes}
                />
              ),
          )}
        </ul>
      </div>
    </>
  );
}

export default TrashNotes;
