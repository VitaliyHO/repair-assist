import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTasks } from "../../redux/tasks/selectors";

export const TaskCounter = () => {

  const tasks = useSelector(selectTasks);

  const count = tasks.items.reduce(
    (acc, tasks) => {
      if(tasks.completed){
        acc.completed += 1;
      }else{
        acc.active += 1;
      }
      return acc;
    }, 
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
