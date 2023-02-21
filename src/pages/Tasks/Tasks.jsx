import { StatusFilter } from "../../components/StatusFilter/StatusFilter";
import { TaskCounter } from "../../components/TaskCounter/TaskCounter";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { TaskList } from "../../components/TaskList/TaskList";

export const Tasks = () => {
  return (
    <>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
      <TaskForm/>
      <TaskList/>
    </>
  );
};
