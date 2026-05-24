export default function FormMessage({ type, message }) {
  if (!message) return null;

  const isSuccess = type === "success";
  
  return (
    <div className={isSuccess ? "alert-success" : "alert-error"} id="form-feedback-message">
      <span className="alert-icon">
        {isSuccess ? "✅" : "⚠️"}
      </span>
      <span className="alert-text">{message}</span>
    </div>
  );
}
