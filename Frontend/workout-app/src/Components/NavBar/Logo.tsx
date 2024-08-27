import { Link } from "react-router-dom";
import LogoImg from "../../Images/SignInLogo.jpg";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          alt="Your Company"
          src={LogoImg}
          className="mx-auto h-10 w-10 rounded-full "
        />
      </Link>
    </div>
  );
};

export default Logo;
