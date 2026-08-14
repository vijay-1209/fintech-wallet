const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
      <h3 className="font-semibold text-red-800">Something went wrong</h3>

      <p className="mt-2 text-sm text-red-600">
        {message || "Unable to complete the request."}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;