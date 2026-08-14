const LoadingSpinner = ({ size = "md" }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={`${sizes[size]} animate-spin rounded-full border-4 border-slate-200 border-t-slate-900`}
      role="status"
      aria-label="Loading"
    />
  );
};

export default LoadingSpinner;