import Label from "../Atom/Label";
import Date from "../Atom/Date";

type inputText = {
  title: string;
  type: string;
  name: string;
  register: any;
};

const DatePicker = ({ title, type, register, name }: inputText) => {
  return (
    <div>
      <Label title={title} />
      <Date title={title} type={type} register={register} name={name} />
    </div>
  );
};

export default DatePicker;
