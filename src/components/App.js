import { Layout } from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import { Tasks } from "../pages/Tasks/Tasks";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";

export const App = () => {

  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? (<h4>Loading....</h4>) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/register" element={<RestrictedRoute component={Register} redirectTo="/tasks"/>}/>
        <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/tasks"/>}/>
        <Route path="/tasks" element={<PrivateRoute component={Tasks} redirectTo="/login"/>}/>
      </Route>
    </Routes>
    // <Layout>
    //   <AppBar />
    //   <TaskForm />
    //   <TaskList />
    // </Layout>
  );
};