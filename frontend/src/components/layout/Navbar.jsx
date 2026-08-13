import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm text-slate-500">Welcome back</p>

        <p className="font-semibold text-slate-900">{user?.name || "User"}</p>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;