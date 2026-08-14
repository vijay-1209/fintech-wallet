import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-xl px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
    >
      Logout
    </button>
  );
};

export default LogoutButton;