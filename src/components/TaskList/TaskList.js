import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { selectTasks } from "../../redux/tasks/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasks/operations";
import { getStatusFilter } from "../../redux/filter/selectors";
import { statusFilters } from "../../redux/filter/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.items.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.items.filter((task) => task.completed);
    default:
      return tasks.items;
  }
};

export const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const tasks = useSelector(selectTasks);

  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
