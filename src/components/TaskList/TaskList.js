import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
import { selectTasks } from "redux/tasks/selectors";
import css from "./TaskList.module.css";


export const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
