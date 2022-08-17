const PasswordInput = ({
  label,
  type,
  value,
  minLength,
  maxLength,
  onChange,
}) => {
  return (
    <>
      <label>{label}:</label>
      <input
        type={type}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
      />
    </>
  );
};

export default PasswordInput;
