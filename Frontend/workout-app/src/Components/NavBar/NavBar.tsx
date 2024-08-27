import { NavLink } from "react-router-dom";
// import {
//   navigationItems,
//   navigationItemsAdminLogin,
// } from "../../Utils/Constant";
import { useState } from "react";

interface NavItemProps {
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? "text-blue-700 font-bold" : "text-gray-200"
    }
  >
    {label}
  </NavLink>
);

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigationItems = [
    { label: "SignIn", to: "/signin" },
    { label: "LoginIn", to: "/login" },
  ];
  const navigationItemsAdminLogin = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  const login = false;
  const navigation = login ? navigationItemsAdminLogin : navigationItems;
  // const navigation = navigationItems;
  return (
    <>
      <nav className="w-1/2 flex justify-end text-gray-200">
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <NavItem
              key={item.to}
              label={item.label}
              to={item.to}
              // isActive={item?.isActive}
            />
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? "<" : ">"}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full  text-gray-200">
          {navigation.map((item) => (
            <NavItem
              key={item.to}
              label={item.label}
              to={item.to}
              isActive={item?.isActive}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
