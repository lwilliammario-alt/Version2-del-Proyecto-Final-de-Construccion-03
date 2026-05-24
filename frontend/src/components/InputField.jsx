export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  min,
  max,
  step
}) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-input"
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}
