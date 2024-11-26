const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-4">
        <h1 className="flex justify-center text-color-primary font-bold text-2xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderMenu;
