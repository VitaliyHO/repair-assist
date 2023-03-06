import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/filter/constants";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { getStatusFilter } from "../../redux/filter/selectors";
import { setStatusFilter } from "../../redux/filter/slice";

export const StatusFilter = () => {

  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
