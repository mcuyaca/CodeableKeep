import { API_URL } from "../../App";
import { WelcomeProps } from "../../models/types";

function Welcome(props: WelcomeProps) {
  const { username, setUsername, setIsUser, setNotes } = props;

  if (username === null) {
    setUsername("");
  }
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/${username}/notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

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
        className="mb-[13px] flex h-[32px] w-[241px] rounded-2xl border border-[#18181B] px-4 py-2 text-base text-[#737373] "
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

      <div className=" mt-12 flex min-w-fit justify-center gap-4 rounded-lg border border-[#18181B]  p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-info alert__icon flex"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
        <div className="flex w-[270px] flex-col gap-1 text-[#18181B] ">
          <h5 className="font-semibold text-[#18181B] ">
            Servidor en ahorro de energía{" "}
          </h5>
          <p className="text-light text-balance text-sm font-light text-gray-500">
            Espera 30 segundos para que se inicie. Puedes forzar el encendido{" "}
            <a
              className="text-semibold font-bold text-[#18181B] underline underline-offset-2 "
              href={API_URL}
            >
              aquí
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
