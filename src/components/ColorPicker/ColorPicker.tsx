import { ColorPickerProps } from "../../models/types";

function ColorPicker({
  setColor,
  url,
  username,
  setCurrentNotes,
  id,
}: ColorPickerProps) {
  const urlGet = `https://codeable-keep-api-production.up.railway.app/api/${username}/notes`;

  function handleUpdate() {
    console.log("Soy handleUpdate");
    fetch(urlGet)
      .then((response) => response.json())
      .then((data) => setCurrentNotes(data.notes));

    console.log("Me ejecuto 1 vez, soy runEffect en note");
  }

  function handlerPickColor(color: string) {
    console.log(color);
    setColor(color);

    const newColor = { color: color };

    if (id !== "") {
      console.log(id);
      const optionsPatch = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newColor),
      };

      fetch(url, optionsPatch)
        .then((response) => response.json)
        .then(() => handleUpdate());
    }
  }

  return (
    <div className="absolute bottom-[35px] right-[-60px] h-[65px] w-[155px] rounded-lg bg-white p-[5px] shadow-md">
      <ul className="grid grid-cols-5 grid-rows-2 gap-[5px] ">
        <li
          onClick={() => handlerPickColor("#FFF")}
          className="h-[25px] w-[25px] rounded-full border border-[#999B9E] "
        ></li>
        <li
          onClick={() => handlerPickColor("#F28B82")}
          className="h-[25px] w-[25px] rounded-full bg-[#F28B82] "
        ></li>
        <li
          onClick={() => handlerPickColor("#FBBC04")}
          className="h-[25px] w-[25px] rounded-full bg-[#FBBC04] "
        ></li>
        <li
          onClick={() => handlerPickColor("#FFF475")}
          className="h-[25px] w-[25px] rounded-full bg-[#FFF475] "
        ></li>
        <li
          onClick={() => handlerPickColor("#CCFF90")}
          className="h-[25px] w-[25px] rounded-full bg-[#CCFF90] "
        ></li>
        <li
          onClick={() => handlerPickColor("#A7FFEB")}
          className="h-[25px] w-[25px] rounded-full bg-[#A7FFEB] "
        ></li>
        <li
          onClick={() => handlerPickColor("#CBF0F8")}
          className="h-[25px] w-[25px] rounded-full bg-[#CBF0F8] "
        ></li>
        <li
          onClick={() => handlerPickColor("#AECBFA")}
          className="h-[25px] w-[25px] rounded-full bg-[#AECBFA] "
        ></li>
        <li
          onClick={() => handlerPickColor("#D7AEFB")}
          className="h-[25px] w-[25px] rounded-full bg-[#D7AEFB] "
        ></li>
        <li
          onClick={() => handlerPickColor("#FDCFE8")}
          className="h-[25px] w-[25px] rounded-full bg-[#FDCFE8] "
        ></li>
      </ul>
    </div>
  );
}

export default ColorPicker;
