import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, updateFilter } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch()

  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <Tabs defaultValue="all" className="flex justify-end">
          <TabsList>
            <TabsTrigger 
            onClick={() => dispatch(updateFilter("all"))}
            value="all">All</TabsTrigger>
            <TabsTrigger 
            onClick={() => dispatch(updateFilter("low"))}
            value="low">Low</TabsTrigger>
            <TabsTrigger 
            onClick={() => dispatch(updateFilter("medium"))}
            value="medium">Medium</TabsTrigger>
            <TabsTrigger 
            onClick={() => dispatch(updateFilter("high"))}
            value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
