type label = {
  title: string;
  //   name: string;
};

const Label = ({ title }: label) => {
  return (
    <label
      htmlFor={title}
      className="block text-sm font-medium leading-6 text-gray-200"
    >
      {title}
    </label>
  );
};

export default Label;
