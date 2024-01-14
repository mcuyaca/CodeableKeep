type Props = { message: string };
const Message = (props: Props) => {
  const { message } = props;
  return (
    <div className="py-12 text-4xl font-bold">
      <p>{message}</p>
    </div>
  );
};

export default Message;
