import { TaskEditor } from "components/TaskEditor/TaskEditor";
import { TaskList } from "components/TaskList/TaskList";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/tasks/operations";
import { selectIsLoading } from "redux/tasks/selectors";

export default function Tasks() {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
        }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your tasks</title>
            </Helmet>
            <TaskEditor />
            <div>{isLoading && "Request in progress..."}</div>
            <TaskList/>
        </>
    )
};