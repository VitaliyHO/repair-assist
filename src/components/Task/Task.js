import { useDispatch } from "react-redux";
// import { toggleCompleted } from "../../redux/tasksSlice";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, updateTask } from "../../redux/tasks/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  const handleToggle = (e) => {
    console.log(e.target.checked);
    const status = e.target.checked;
    dispatch(updateTask({id: task._id, status}))};

  return (
    <div className={css.wrapper}>
      <input
        onChange={handleToggle}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} type="button" className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
