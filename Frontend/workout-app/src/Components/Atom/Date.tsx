type inputText = {
  title: string;
  type: string;
  name: string;
  register: any;
};
const Date = ({ title, type, register, name }: inputText) => {
  return (
    <>
      <input
        id={title}
        type={type}
        {...register(name, {
          required: `Please enter a valid ${title}`,
        })}
        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </>
  );
};

export default Date;
