import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask } from "redux/tasks/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));


  return (
    <div className={css.wrapper}>
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
