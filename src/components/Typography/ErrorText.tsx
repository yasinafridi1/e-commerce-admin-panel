const ErrorText = ({
  text,
}: {
  text: string;
}) => {
  return (
    <p className="poppins-500 mt-1 ml-3 text-[13px] text-red-700">
      {text}
    </p>
  );
};

export default ErrorText;
