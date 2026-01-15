const LoadingSpinner = ({
  message = "Loading user profile...",
}: {
  message: string;
}) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default LoadingSpinner;
