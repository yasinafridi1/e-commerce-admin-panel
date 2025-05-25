import defaultImg from "@images/user.png";

const Avatar = ({ imgSrc }: { imgSrc: string | null | undefined }) => {
  return (
    <img
      className="ml-3 h-[30px] w-[30px] rounded-full bg-inherit object-cover"
      src={
        imgSrc ? `${import.meta.env.VITE_API_IMAGE_URL}/${imgSrc}` : defaultImg
      }
      alt="Avatar"
      loading="lazy"
    />
  );
};

export default Avatar;
