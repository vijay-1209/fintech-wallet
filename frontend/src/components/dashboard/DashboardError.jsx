const DashboardError = ({
  message,
  onRetry,
}) => {
  return (
    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium text-red-800">
            Unable to load wallet data
          </p>

          <p className="mt-1 text-sm text-red-600">
            {message}
          </p>
        </div>

        <button
          type="button"
          onClick={onRetry}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default DashboardError;