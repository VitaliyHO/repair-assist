import { TaskCounter } from "../TaskCounter/TaskCounter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import css from "./AppBar.module.css";
import { Navigation } from "../Navigation/Navigation";

export const AppBar = () => {
  return (
    <header>
      <Navigation/>
    </header>
  );
};