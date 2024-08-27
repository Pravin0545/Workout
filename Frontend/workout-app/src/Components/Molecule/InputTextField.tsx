import InputText from "../Atom/InputText";
import Label from "../Atom/Label";

type inputTextField = {
  title: string;
  type: string;
  name: string;
  register: any;
};

const InputTextField = ({ title, type, register, name }: inputTextField) => {
  return (
    <div>
      <Label title={title} />
      <InputText title={title} type={type} register={register} name={name} />
    </div>
  );
};

export default InputTextField;
