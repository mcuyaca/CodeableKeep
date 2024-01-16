import { HeadersProps } from "../../models/types";

function Header(props: HeadersProps) {
  console.log("me ejecuto 1 vez Header ");
  const { username, setIsUser } = props;
  return (
    <div className="sticky top-0 z-10 flex h-[70px] w-full flex-row items-center justify-between border-b border-[#E5E5E5] bg-[#fafafa] px-8 py-3 text-lg">
      <p>
        Welcome to Codeable Keep{" "}
        <strong className="font-bold">{username}</strong>
      </p>
      <button
        onClick={() => {
          setIsUser(false);
          localStorage.clear();
        }}
        className="text-lg font-bold leading-[18px] tracking-[0.25px]"
      >
        Exit
      </button>
    </div>
  );
}

export default Header;
