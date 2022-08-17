const EmailInput = ({ label, type, value, onChange }) => {
  return (
    <>
      <label>{label}:</label>
      <input type={type} value={value} onChange={onChange} />
    </>
  );
};

export default EmailInput;
