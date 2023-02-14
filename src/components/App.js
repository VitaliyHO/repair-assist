import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../redux/tasks/operations";

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};