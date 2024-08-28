type label = {
  title: string;
  //   name: string;
};

const Label = ({ title }: label) => {
  return (
    <label
      htmlFor={title}
      className="block w-1/2 text-sm font-medium leading-6  text-black"
    >
      {title}
    </label>
  );
};

export default Label;
