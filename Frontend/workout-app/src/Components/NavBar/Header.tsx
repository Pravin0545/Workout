import Logo from "./Logo";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <header className="bg-purple-900 flex-wrap  top-0 z-20 mx-auto flex w-full items-center justify-between border-gray-500 p-2">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
