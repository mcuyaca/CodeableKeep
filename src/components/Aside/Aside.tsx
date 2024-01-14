type props = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};
function Aside({ page, setPage }: props) {
  const classFocus = `bg-[#E5E5E5] rounded-r-[25px]`;
  const classPage =
    "text-lg pl-5 pr-auto h-[48px] gap-5 flex flex-row justify-start items-center";
  const newClassPage = `${classPage} ${classFocus}`;

  const iconNotes = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
    >
      <path
        d="M4.55674 16C2.524 15.4495 1.50762 14.1823 1.50762 12.1982V10.5712C1.50762 9.42121 1.00508 8.84614 0 8.84614V7.15379C0.982498 7.15379 1.48503 6.61147 1.50762 5.52681V3.79355C1.50762 2.78521 1.76171 1.97036 2.2699 1.349C2.77809 0.72764 3.54037 0.27798 4.55674 0L5.03105 1.3163C4.60192 1.46891 4.27724 1.73599 4.05703 2.11752C3.83681 2.49361 3.72106 3.01686 3.70976 3.68726V5.40418C3.70976 6.636 3.2044 7.4999 2.19367 7.99589C3.2044 8.49731 3.70976 9.36669 3.70976 10.604V12.3373C3.738 13.6127 4.17842 14.392 5.03105 14.6755L4.55674 16ZM14.969 14.6755C15.8272 14.3811 16.2676 13.5908 16.2902 12.3045V10.5712C16.2902 9.33944 16.8069 8.48373 17.8402 8.00407C16.8069 7.52442 16.2902 6.65507 16.2902 5.396V3.68726C16.2676 2.4173 15.8272 1.62698 14.969 1.3163L15.4433 0C16.454 0.272529 17.2134 0.719463 17.7216 1.34082C18.2298 1.95673 18.4867 2.76613 18.4923 3.76902V5.52681C18.515 6.61147 19.0174 7.15379 20 7.15379V8.84614C18.9949 8.84614 18.4923 9.41572 18.4923 10.5549V12.3291C18.4472 14.2368 17.4308 15.4604 15.4433 16L14.969 14.6755Z"
        fill="#18181B"
      />
    </svg>
  );

  const iconTrash = (
    <svg
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

  function handlerChange(page: string) {
    setPage(page);
  }
  console.log("me ejecuto 1 vez Aside ");

  return (
    <section className="inset-0 flex min-h-[100%] w-full max-w-[280px] flex-col border-r border-[#E5E5E5]">
      <div className="sticky top-[70px] flex w-full flex-col pt-4">
        <div
          onClick={() => handlerChange("notes")}
          className={page === "notes" ? newClassPage : classPage}
        >
          {iconNotes}
          Notes
        </div>
        <div
          onClick={() => handlerChange("trash")}
          className={page === "trash" ? newClassPage : classPage}
        >
          {iconTrash}
          Trash
        </div>
      </div>
    </section>
  );
}

export default Aside;
