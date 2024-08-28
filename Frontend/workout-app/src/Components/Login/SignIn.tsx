import React from "react";
import { useForm } from "react-hook-form";
import InputTextField from "../Molecule/InputTextField";
import Button from "../Atom/Button";
import DatePicker from "../Molecule/DatePicker";

type formValues = {
  email: string;
  password: string;
  gender: string;
};

const SignIn: React.FC = () => {
  const form = useForm<formValues>();

  const { register, handleSubmit, reset } = form;
  const onSubmit = (data: formValues) => {
    console.log("submitted", data);
    reset();
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-400">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="space-y-6"
            noValidate
          >
            <InputTextField
              title="First Name"
              type="text"
              name="firstName"
              register={register}
            />

            <InputTextField
              title="Last Name"
              type="text"
              name="lastName"
              register={register}
            />

            <InputTextField
              title="Email ID"
              type="email"
              name="email"
              register={register}
            />

            <InputTextField
              title="Password"
              type="password"
              name="password"
              register={register}
            />
            <InputTextField
              title="Mobile No"
              type="tel"
              name="mobileNo"
              register={register}
            />

            <div className="flex">
              <div className="w-1/2 pl-2">
                <DatePicker
                  title="Date Of Birth"
                  type="date"
                  name="dateOfBirth"
                  register={register}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="Gender"
                  className="block w-1/2 text-sm font-medium leading-6  text-black"
                >
                  Gender
                </label>
                <select
                  title="Gender"
                  // name="gender"
                  {...register("gender", {
                    required: `Please enter a valid Gender`,
                  })}
                  className="block w-full rounded-md border-0 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select the value</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <Button type="submit" title="Sign In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
