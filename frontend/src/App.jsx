import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

import AppLayout from "./layouts/AppLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddMoney from "./pages/AddMoney";
import AddMoneyConfirm from "./pages/AddMoneyConfirm";
import SendMoney from "./pages/SendMoney";
import SendMoneyConfirm from "./pages/SendMoneyConfirm";
import PaymentResult from "./pages/PaymentResult";
import Transactions from "./pages/Transactions";
import TransactionDetails from "./pages/TransactionDetails";
import Security from "./pages/Security";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/wallet" element={<div>Wallet</div>} />

              <Route path="/payments" element={<div>Payments</div>} />

              <Route path="/transactions" element={<Transactions />} />

              <Route
                path="/transactions/:transactionId"
                element={<TransactionDetails />}
              />

              <Route path="/analytics" element={<div>Analytics</div>} />

              <Route path="/profile" element={<div>Profile</div>} />

              <Route path="/wallet/add-money" element={<AddMoney />} />

              <Route
                path="/wallet/add-money/confirm"
                element={<AddMoneyConfirm />}
              />

              <Route path="/payments/send" element={<SendMoney />} />

              <Route
                path="/payments/send/confirm"
                element={<SendMoneyConfirm />}
              />

              <Route path="/payments/result" element={<PaymentResult />} />

              <Route path="/security" element={<Security />} />
            </Route>
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route
            path="*"
            element={
              <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-2xl font-bold">404 — Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;