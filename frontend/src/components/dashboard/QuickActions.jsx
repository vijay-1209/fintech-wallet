import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900">Quick actions</h3>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => navigate("/payments/send")}
          className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-slate-900 hover:bg-slate-50"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
            →
          </div>

          <p className="text-sm font-semibold text-slate-900">Send money</p>

          <p className="mt-1 text-xs text-slate-500">Pay another user</p>
        </button>

        <button
          type="button"
          onClick={() => navigate("/wallet/add-money")}
          className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-slate-900 hover:bg-slate-50"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-900">
            +
          </div>

          <p className="text-sm font-semibold text-slate-900">Add money</p>

          <p className="mt-1 text-xs text-slate-500">Add funds to wallet</p>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;