import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("../pages/home-page"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* <Route path="/sign-in" element={<SignInPage />} /> */}
      {/* <Route path="/sign-up" element={<SignUpPage />} /> */}

      {/* <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;
