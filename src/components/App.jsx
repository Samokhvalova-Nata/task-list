import { Layout } from "components/Layout/Layout";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    isRefreshing ? ('Refreshing data...') : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/tasks"/>} />
        <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/tasks"/>} />
        <Route path="/tasks" element={<PrivateRoute component={TasksPage} redirectTo="/login"/>} />
      </Route>
    </Routes>
  ));
};