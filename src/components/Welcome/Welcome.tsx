import { WelcomeProps } from "../../models/types";

function Welcome(props: WelcomeProps) {
  const { username, setUsername, setIsUser, setNotes } = props;

  if (username === null) {
    setUsername("");
  }
  const handleLogin = async () => {
    try {
      const response = await fetch(
        `https://codeable-keep-api-production.up.railway.app/api/${username}/notes`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.ok) {
          localStorage.setItem("username", username);
          localStorage.setItem("isUser", "true");
          setIsUser(true);
          localStorage.setItem("notes", JSON.stringify(data.notes));
          setNotes(data.notes);
        }
      } else {
        console.error("No se pudo autenticar");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center  text-[#18181B] ">
      <h1 className="mt-[144px]  text-4xl font-bold leading-10 tracking-[0.25px]">
        Welcome to Codeable Keep
      </h1>

      <p className="mb-[4px] mt-[74px] flex justify-center text-lg font-bold leading-7 tracking-[0.25px]">
        username
      </p>
      <input
        className="mb-[13px] flex  h-[32px] w-[241px] rounded-2xl border border-[#18181B] px-4 py-2 text-base text-[#737373] "
        type="text"
        placeholder="some-user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className=" flex h-[34px] w-[241px] items-center justify-center rounded-2xl bg-black px-4 py-2 text-lg font-semibold tracking-[0.5px] text-white"
        onClick={handleLogin}
      >
        Enter
      </button>
    </div>
  );
}

export default Welcome;
