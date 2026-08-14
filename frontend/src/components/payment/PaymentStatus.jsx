const PaymentStatus = ({ status, message }) => {
  const states = {
    PROCESSING: {
      title: "Processing payment",
      description: message || "Please wait while we process your payment.",
      icon: (
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
      ),
    },

    SUCCESS: {
      title: "Payment successful",
      description: message || "Your payment has been completed successfully.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
          ✓
        </div>
      ),
    },

    FAILED: {
      title: "Payment failed",
      description: message || "We couldn't complete this payment.",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl font-bold text-red-600">
          !
        </div>
      ),
    },
  };

  const current = states[status] || states.PROCESSING;

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center">
      {current.icon}

      <h2 className="mt-5 text-xl font-bold text-slate-900">{current.title}</h2>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        {current.description}
      </p>
    </div>
  );
};

export default PaymentStatus;