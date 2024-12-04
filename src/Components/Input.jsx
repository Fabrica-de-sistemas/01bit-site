const Input = ({
  id,
  value,
  type,
  label,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      {label ? (
        <label className="text-primary-01" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        name={id}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="screen320px:w-[75%] mx-auto screen414px:w-[100%] my-5 py-[10px] px-4 rounded-lg border-1 border border-secondary-02 border-opacity-30 text-secondary-02 placeholder-secondary-02  placeholder-opacity-30 focus:outline-none focus:border-primary-02"
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
