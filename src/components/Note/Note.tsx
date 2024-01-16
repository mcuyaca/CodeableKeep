import { SyntheticEvent, useState } from "react";
import ColorPicker from "../ColorPicker";
import { NoteProps } from "../../models/types";

function Note({ setCurrentNotes, data, username }: NoteProps) {
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState(data.body);
  const [color, setColor] = useState(data.color);
  const [showColor, setShowColor] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const url = `https://codeable-keep-api-production.up.railway.app/api/${username}/notes/${data.id}`;
  const urlGet = `https://codeable-keep-api-production.up.railway.app/api/${username}/notes`;
  const colorNote = color === "#FFF" ? `bg-white` : `bg-[${color}]`;
  const classNote =
    "flex flex-col justify-between p-4 w-[252px] h-[226px] leading-5 tracking-[0.25px]   rounded-lg text-[#18181B]";
  const classColorNote = `${classNote} ${colorNote}`;

  const svgEdit = (
    <svg
      className="m-[6px]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.731 2.26906C21.2387 1.77687 20.5711 1.50037 19.875 1.50037C19.1789 1.50037 18.5113 1.77687 18.019 2.26906L16.862 3.42606L20.574 7.13806L21.731 5.98106C22.2232 5.48879 22.4997 4.82117 22.4997 4.12506C22.4997 3.42894 22.2232 2.76133 21.731 2.26906ZM19.513 8.19906L15.801 4.48706L7.40101 12.8871C6.78386 13.5039 6.33019 14.2648 6.08101 15.1011L5.28101 17.7861C5.24239 17.9156 5.23951 18.0532 5.27267 18.1843C5.30584 18.3154 5.37382 18.435 5.46943 18.5306C5.56503 18.6262 5.6847 18.6942 5.81577 18.7274C5.94684 18.7606 6.08444 18.7577 6.21401 18.7191L8.89901 17.9191C9.73524 17.6699 10.4962 17.2162 11.113 16.5991L19.513 8.19906Z"
        fill="#999B9E"
      />
      <path
        d="M5.25 5.25C4.45435 5.25 3.69129 5.56607 3.12868 6.12868C2.56607 6.69129 2.25 7.45435 2.25 8.25V18.75C2.25 19.5456 2.56607 20.3087 3.12868 20.8713C3.69129 21.4339 4.45435 21.75 5.25 21.75H15.75C16.5456 21.75 17.3087 21.4339 17.8713 20.8713C18.4339 20.3087 18.75 19.5456 18.75 18.75V13.5C18.75 13.3011 18.671 13.1103 18.5303 12.9697C18.3897 12.829 18.1989 12.75 18 12.75C17.8011 12.75 17.6103 12.829 17.4697 12.9697C17.329 13.1103 17.25 13.3011 17.25 13.5V18.75C17.25 19.1478 17.092 19.5294 16.8107 19.8107C16.5294 20.092 16.1478 20.25 15.75 20.25H5.25C4.85218 20.25 4.47064 20.092 4.18934 19.8107C3.90804 19.5294 3.75 19.1478 3.75 18.75V8.25C3.75 7.85218 3.90804 7.47064 4.18934 7.18934C4.47064 6.90804 4.85218 6.75 5.25 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6C11.25 5.80109 11.171 5.61032 11.0303 5.46967C10.8897 5.32902 10.6989 5.25 10.5 5.25H5.25Z"
        fill="#999B9E"
      />
    </svg>
  );

  const svgConfirm = (
    <svg
      className="m-[0px] my-[3px] rounded-full bg-[#E6E6E6] p-[4px]"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.603 3.799C9.02496 3.31223 9.54673 2.92195 10.1329 2.65468C10.719 2.3874 11.3558 2.24939 12 2.25C13.357 2.25 14.573 2.85 15.397 3.799C16.0397 3.75311 16.6847 3.84608 17.2883 4.07161C17.8919 4.29713 18.4399 4.64991 18.895 5.106C19.3509 5.56106 19.7036 6.10887 19.9291 6.71226C20.1546 7.31564 20.2477 7.96047 20.202 8.603C20.6886 9.02505 21.0787 9.54686 21.3458 10.133C21.6129 10.7191 21.7507 11.3559 21.75 12C21.7506 12.6442 21.6126 13.281 21.3453 13.8671C21.078 14.4533 20.6878 14.975 20.201 15.397C20.2467 16.0395 20.1536 16.6844 19.9281 17.2877C19.7026 17.8911 19.3499 18.4389 18.894 18.894C18.4389 19.3499 17.8911 19.7026 17.2877 19.9281C16.6844 20.1536 16.0395 20.2467 15.397 20.201C14.975 20.6878 14.4533 21.078 13.8671 21.3453C13.281 21.6126 12.6442 21.7506 12 21.75C11.3558 21.7506 10.719 21.6126 10.1329 21.3453C9.54673 21.078 9.02496 20.6878 8.603 20.201C7.96038 20.247 7.31538 20.1542 6.71181 19.9289C6.10824 19.7035 5.56023 19.3509 5.105 18.895C4.64897 18.4398 4.29622 17.8919 4.0707 17.2883C3.84518 16.6847 3.75218 16.0397 3.798 15.397C3.31141 14.9749 2.92133 14.4531 2.65423 13.867C2.38713 13.2809 2.24927 12.6441 2.25 12C2.25 10.643 2.85 9.427 3.799 8.603C3.75326 7.96047 3.8463 7.31561 4.07182 6.71222C4.29734 6.10883 4.65005 5.56102 5.106 5.106C5.56103 4.65005 6.10883 4.29734 6.71222 4.07182C7.31562 3.8463 7.96047 3.75326 8.603 3.799ZM15.61 10.186C15.67 10.1061 15.7134 10.0149 15.7377 9.91795C15.762 9.82098 15.7666 9.72014 15.7514 9.62135C15.7361 9.52257 15.7013 9.42782 15.6489 9.3427C15.5965 9.25757 15.5276 9.18378 15.4463 9.12565C15.3649 9.06753 15.2728 9.02624 15.1753 9.00423C15.0778 8.98221 14.9769 8.97991 14.8785 8.99746C14.7801 9.01501 14.6862 9.05205 14.6023 9.10641C14.5184 9.16077 14.4462 9.23135 14.39 9.314L11.154 13.844L9.53 12.22C9.38783 12.0875 9.19978 12.0154 9.00548 12.0188C8.81118 12.0223 8.62579 12.101 8.48838 12.2384C8.35097 12.3758 8.27226 12.5612 8.26883 12.7555C8.2654 12.9498 8.33752 13.1378 8.47 13.28L10.72 15.53C10.797 15.6069 10.8898 15.6662 10.992 15.7036C11.0942 15.7411 11.2033 15.7559 11.3118 15.7469C11.4202 15.738 11.5255 15.7055 11.6201 15.6519C11.7148 15.5982 11.7967 15.5245 11.86 15.436L15.61 10.186Z"
        fill="#999B9E"
      />
    </svg>
  );

  const svgPin = (
    <svg
      onClick={handlerPinned}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill={data.pinned ? "#999B9E" : "none"}
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
      fill="none"
    >
      <path
        d="M7.18216 0.177016C3.68755 0.859058 0.871467 3.66809 0.182388 7.15213C-1.11842 13.7264 4.81258 18.6273 9.28104 17.9347C10.7295 17.7097 11.4397 16.0152 10.7752 14.7108C9.96309 13.1147 11.1233 11.2514 12.9163 11.2514H15.7183C16.9769 11.2514 17.9965 10.2108 18 8.95567C17.9824 3.41496 12.9409 -0.944486 7.18216 0.177016ZM3.37465 11.2514C2.75237 11.2514 2.24962 10.7487 2.24962 10.1264C2.24962 9.50412 2.75237 9.00138 3.37465 9.00138C3.99693 9.00138 4.49968 9.50412 4.49968 10.1264C4.49968 10.7487 3.99693 11.2514 3.37465 11.2514ZM4.49968 6.75134C3.8774 6.75134 3.37465 6.2486 3.37465 5.62632C3.37465 5.00405 3.8774 4.5013 4.49968 4.5013C5.12196 4.5013 5.6247 5.00405 5.6247 5.62632C5.6247 6.2486 5.12196 6.75134 4.49968 6.75134ZM8.99979 4.5013C8.37751 4.5013 7.87476 3.99856 7.87476 3.37629C7.87476 2.75401 8.37751 2.25127 8.99979 2.25127C9.62207 2.25127 10.1248 2.75401 10.1248 3.37629C10.1248 3.99856 9.62207 4.5013 8.99979 4.5013ZM13.4999 6.75134C12.8776 6.75134 12.3749 6.2486 12.3749 5.62632C12.3749 5.00405 12.8776 4.5013 13.4999 4.5013C14.1222 4.5013 14.6249 5.00405 14.6249 5.62632C14.6249 6.2486 14.1222 6.75134 13.4999 6.75134Z"
        fill="#999B9E"
      />
    </svg>
  );

  const svgDelete = (
    <svg
      onClick={handlerDelete}
      className="m-[6px]"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M12.125 1V0H5.87496V1H0.666626V3H1.70829V16C1.70829 17.1 2.64579 18 3.79163 18H14.2083C15.3541 18 16.2916 17.1 16.2916 16V3H17.3333V1H12.125ZM14.2083 16H3.79163V3H14.2083V16Z"
        fill="#FCA5A5"
      />
      <path
        d="M5.875 5H7.95833V14H5.875V5ZM10.0417 5H12.125V14H10.0417V5Z"
        fill="#FCA5A5"
      />
    </svg>
  );

  const svgTrash = (
    <svg
      onClick={handlerTrash}
      className="m-[6px]"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M12.125 1V0H5.87496V1H0.666626V3H1.70829V16C1.70829 17.1 2.64579 18 3.79163 18H14.2083C15.3541 18 16.2916 17.1 16.2916 16V3H17.3333V1H12.125ZM14.2083 16H3.79163V3H14.2083V16Z"
        fill="#999B9E"
      />
      <path
        d="M5.875 5H7.95833V14H5.875V5ZM10.0417 5H12.125V14H10.0417V5Z"
        fill="#999B9E"
      />
    </svg>
  );

  const svgRecover = (
    <svg
      onClick={handlerRecover}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
    >
      <path
        d="M11.3983 4.20712L7.74329 0.269512C7.40984 -0.0895737 6.84062 -0.090101 6.50671 0.269512L2.85134 4.20712C2.35191 4.74501 2.73265 5.625 3.46963 5.625H5.71875V15.1875H2.76647C2.71107 15.1875 2.65621 15.1984 2.60503 15.2196C2.55384 15.2408 2.50734 15.2719 2.46817 15.3111L0.49942 17.2798C0.233639 17.5456 0.421865 18 0.797721 18H7.6875C8.1535 18 8.53125 17.6222 8.53125 17.1562V5.625H10.7801C11.514 5.625 11.8998 4.74719 11.3983 4.20712Z"
        fill="#999B9E"
      />
    </svg>
  );

  console.log("me ejecuto 1 vez Note ");

  function handleUpdate() {
    console.log("Soy handleUpdate");
    fetch(urlGet)
      .then((response) => response.json())
      .then((data) => setCurrentNotes(data.notes));

    console.log("Me ejecuto 1 vez, soy runEffect en note");
  }

  function handlerClickColor() {
    setShowColor(!showColor);
  }

  type Body = { [k: string]: string | boolean };
  function fetchPatch(url: string, body: Body) {
    const optionsPatch = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch(url, optionsPatch)
      .then((response) => response.json)
      .then(() => handleUpdate());
  }

  function handlerTrash() {
    const changeDelete = { deleted: true };
    fetchPatch(url, changeDelete);
  }

  function handlerDelete() {
    const options = {
      method: "DELETE",
    };

    fetch(url, options)
      .then((response) => console.log(response))
      .then(() => handleUpdate());
  }

  function handlerPinned() {
    const changePinned = { pinned: !data.pinned };

    fetchPatch(url, changePinned);
  }

  function handlerRecover() {
    const changeDeleted = { deleted: false };
    fetchPatch(url, changeDeleted);
  }

  async function handleEdit(event: SyntheticEvent) {
    event.preventDefault();

    const modifyNote = { title: title, body: body, color: color };

    const options = {
      method: "PATCH",
      body: JSON.stringify(modifyNote),
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (isEditable === true) {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    }
  }

  return (
    <li key={data.id} id={data.id} className={classColorNote}>
      <form onSubmit={handleEdit}>
        <div className=" relative flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`max-w-[200px] font-bold ${colorNote}`}
            disabled={isEditable}
          />
          <textarea
            className={`no-scrollbar h-[122px] max-h-[122px]  min-h-[122px] text-lg ${colorNote}`}
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            disabled={isEditable}
          />

          <div className=" absolute right-0 top-0">{svgPin}</div>
        </div>
        <div className=" flex flex-row items-center justify-start gap-[22px]">
          <div onClick={handlerClickColor} className="relative">
            {svgColor}
            {showColor && (
              <ColorPicker
                setColor={setColor}
                url={url}
                username={username}
                setCurrentNotes={setCurrentNotes}
                id={data.id}
              />
            )}
          </div>

          {data.deleted ? svgDelete : svgTrash}

          {data.deleted && svgRecover}
          <button type="submit" onClick={() => setIsEditable(!isEditable)}>
            {isEditable ? svgEdit : svgConfirm}
          </button>
        </div>
      </form>
    </li>
  );
}

export default Note;
