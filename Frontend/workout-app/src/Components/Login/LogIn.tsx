// import Logo from "../../Images/SignInLogo.jpg";
// import BG from "../../Images/gym-pic-Background.jpg";
import { useForm } from "react-hook-form";
import InputTextField from "../Molecule/InputTextField";
import { Link } from "react-router-dom";

type formValues = {
  email: string;
  password: string;
};

const LogIn: React.FC = () => {
  const form = useForm<formValues>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // console.log("error", errors);
  const onSubmit = (data: formValues) => {
    console.log("submitted", data);
  };
  return (
    <>
      <div
        className="bg-cover bg-center "
        style={
          {
            // backgroundImage: `url(${BG})`,
            // mixBlendMode: "overlay",
          }
        }
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              // src={Logo}
              className="mx-auto h-20 w-auto rounded-full"
            />
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-black">
              Log In to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="space-y-6"
              noValidate
            >
              <div>
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
                <InputTextField
                  title="Email ID"
                  type="email"
                  name="email"
                  register={register}
                />
              </div>

              <div>
                {errors.password && (
                  <p className="text-red-500">password is required</p>
                )}
                <InputTextField
                  title="Password"
                  type="password"
                  name="password"
                  register={register}
                />
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log In
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              {/* <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </a> */}
              <Link
                to="/signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
