const statusStyles = {
  COMPLETED: "bg-green-50 text-green-700",

  PENDING: "bg-yellow-50 text-yellow-700",

  PROCESSING: "bg-blue-50 text-blue-700",

  FAILED: "bg-red-50 text-red-700",

  CANCELLED: "bg-slate-100 text-slate-600",

  REFUNDED: "bg-purple-50 text-purple-700",
};

const TransactionStatus = ({ status }) => {
  const normalizedStatus = String(status || "PENDING").toUpperCase();

  const style = statusStyles[normalizedStatus] || "bg-slate-100 text-slate-600";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}
    >
      {normalizedStatus}
    </span>
  );
};

export default TransactionStatus;