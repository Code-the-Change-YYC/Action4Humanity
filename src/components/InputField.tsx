interface inputFieldProps {
  htmlFor: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputField = (props: inputFieldProps) => {
  return (
    <>
      <label
        htmlFor={props.htmlFor}
        className="block text-xs font-medium text-gray-700"
      >
        {props.label}
      </label>

      <input
        type={props.type}
        id={props.htmlFor}
        placeholder={props.placeholder}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
      />
    </>
  );
};

export default InputField;