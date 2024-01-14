import { notesSchema } from "../../models/notes";
import Note from "../Note";
type props = {
  setCurrentNotes: React.Dispatch<React.SetStateAction<notesSchema>>;
  currentNotes: notesSchema;
  username: string;
};
function PinnedNotes({ setCurrentNotes, currentNotes, username }: props) {
  console.log("me ejecuto 1 vez PinnedNotes ");
  const orderNotes = [...currentNotes].reverse();
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold leading-7">PINNED </h2>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
          {orderNotes.map(
            (note) =>
              note.pinned === true &&
              note.deleted === false && (
                <Note
                  key={note.id}
                  data={note}
                  username={username}
                  setCurrentNotes={setCurrentNotes}
                />
              ),
          )}
        </ul>
      </div>
    </>
  );
}

export default PinnedNotes;
