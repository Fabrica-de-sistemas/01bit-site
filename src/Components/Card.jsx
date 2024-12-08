const Card = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col justify-center items-center w-[250px] mx-auto bg-otherColors-01 shadow-boxShadow rounded-3xl py-8 px-8 gap-[15px] select-none card">
      <div className="w-[90px] h-[90px] mx-auto rounded-full bg-grayColors-01 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm text-secondary-01 text-center mb-1">
          {title}
        </h4>
        <p className="font-normal text-xs text-secondary-02 text-center mb-1">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Card;
