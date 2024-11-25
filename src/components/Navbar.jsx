const Navbar = () => {
  return (
    <div className="">
      {/* LOGO */}
      <div className="">
        <img src="/logo.png" className="w-30 h-20" alt="" />
        {/* <span>Heaven's Perspective</span> */}
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">M</div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        D
      </div>
    </div>
  );
};

export default Navbar;
