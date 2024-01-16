import { SyntheticEvent, useState } from "react";
import { useId } from "react";
import ColorPicker from "../ColorPicker";
import { NotesFormProps } from "../../models/types";

function NotesForm({ url, setCurrentNotes, username }: NotesFormProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pinned, setPinned] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [color, setColor] = useState("#FFF");
  const titleId = useId();

  const urlGet = `https://codeable-keep-api-production.up.railway.app/api/${username}/notes`;

  const colorPickerForm = color === "#FFF" ? `bg-white` : `bg-[${color}]`;
  const classNote =
    "justify-between rounded-lg text-[#737373] flex flex-col p-4 w-[592px] min-h-[164px]   tracking-[0.25px] gap-4  ";
  const classNewNote = `${classNote} ${colorPickerForm}`;

  const svgPin = (
    <svg
      onClick={handlerPinned}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill={pinned ? "#999B9E" : "none"}
    >
      <path
        d="M9.98153 7.61L10.0253 8.03343L10.4113 8.21291C11.9622 8.93398 13 10.1426 13 11.5312C13 11.583 12.9581 11.625 12.9063 11.625H8.12504H7.37504V12.375V15.9208L7.00002 16.6709L6.625 15.9208V12.375V11.625H5.875H1.09375C1.04197 11.625 1 11.583 1 11.5312C1 10.1556 2.02298 8.94086 3.58865 8.21291L3.97467 8.03344L4.01847 7.61L4.44861 3.45218L4.53418 2.625H3.70259H2.21875C2.16697 2.625 2.125 2.58303 2.125 2.53125V0.84375C2.125 0.791967 2.16697 0.75 2.21875 0.75H11.7812C11.833 0.75 11.875 0.791968 11.875 0.84375V2.53125C11.875 2.58303 11.833 2.625 11.7812 2.625H10.2974H9.46582L9.55139 3.45218L9.98153 7.61Z"
        stroke="#999B9E"
        strokeWidth="1.5"
      />
    </svg>
  );

  const svgColor = (
    <svg
      className="m-[6px]"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="#737373"
    >
      <path
        d="M7.18216 0.177016C3.68755 0.859058 0.871467 3.66809 0.182388 7.15213C-1.11842 13.7264 4.81258 18.6273 9.28104 17.9347C10.7295 17.7097 11.4397 16.0152 10.7752 14.7108C9.96309 13.1147 11.1233 11.2514 12.9163 11.2514H15.7183C16.9769 11.2514 17.9965 10.2108 18 8.95567C17.9824 3.41496 12.9409 -0.944486 7.18216 0.177016ZM3.37465 11.2514C2.75237 11.2514 2.24962 10.7487 2.24962 10.1264C2.24962 9.50412 2.75237 9.00138 3.37465 9.00138C3.99693 9.00138 4.49968 9.50412 4.49968 10.1264C4.49968 10.7487 3.99693 11.2514 3.37465 11.2514ZM4.49968 6.75134C3.8774 6.75134 3.37465 6.2486 3.37465 5.62632C3.37465 5.00405 3.8774 4.5013 4.49968 4.5013C5.12196 4.5013 5.6247 5.00405 5.6247 5.62632C5.6247 6.2486 5.12196 6.75134 4.49968 6.75134ZM8.99979 4.5013C8.37751 4.5013 7.87476 3.99856 7.87476 3.37629C7.87476 2.75401 8.37751 2.25127 8.99979 2.25127C9.62207 2.25127 10.1248 2.75401 10.1248 3.37629C10.1248 3.99856 9.62207 4.5013 8.99979 4.5013ZM13.4999 6.75134C12.8776 6.75134 12.3749 6.2486 12.3749 5.62632C12.3749 5.00405 12.8776 4.5013 13.4999 4.5013C14.1222 4.5013 14.6249 5.00405 14.6249 5.62632C14.6249 6.2486 14.1222 6.75134 13.4999 6.75134Z"
        fill="#737373"
      />
    </svg>
  );

  console.log("me ejecuto 1 vez NotesForm");

  function handleUpdate() {
    console.log("Soy handleUpdate");
    fetch(urlGet)
      .then((response) => response.json())
      .then((data) => setCurrentNotes(data.notes));
    setColor("#FFF");
  }

  function handlerPinned() {
    setPinned(!pinned);
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const newNote = { title, body, color, pinned };
    console.log(newNote);

    const options = {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then(() => handleUpdate());

    setTitle("");
    setBody("");
    setPinned(false);
  }

  function handlerClickColor() {
    setShowColor(!showColor);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={classNewNote}>
        <div className="relative">
          <label htmlFor={titleId}></label>
          <input
            id={titleId}
            type="text"
            name="title"
            placeholder="Título"
            className={`w-[532px] text-sm font-bold leading-5 text-[#737373] placeholder-[#737373] ${colorPickerForm}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="absolute right-0 top-0">{svgPin}</div>
        </div>
        <textarea
          name="body"
          className={`no-scrollbar resize-y text-lg leading-6 text-[#737373] placeholder-[#737373] ${colorPickerForm}`}
          placeholder="Your note..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={2}
        />
        <div className="flex flex-row justify-between">
          <div onClick={() => handlerClickColor()} className="relative">
            {svgColor}
            {showColor && (
              <ColorPicker
                url=""
                setColor={setColor}
                setCurrentNotes={setCurrentNotes}
                username={username}
                id={""}
              />
            )}
          </div>

          <button
            id={"2"}
            type="submit"
            className="text-lg font-bold leading-[18px] text-[#18181B] "
          >
            Keep it!
          </button>
        </div>
      </div>
    </form>
  );
}

export default NotesForm;
