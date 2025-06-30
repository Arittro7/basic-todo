import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "vKtfCy9a6hVFmuy88jweW",
      isCompleted: false,
      title: "test",
      description: "test task add",
      priority: "medium",
      dueDate: "2025-06-03T18:00:00.000Z",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      // only task id will took for action
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    updateFilter: (state, action: PayloadAction<"all" | "high" | "medium" | "low">) =>{
      state.filter = action.payload
    }
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter

  if(filter === "low"){
    return state.todo.tasks.filter((task) => task.priority === "low")
  } else if (filter === "medium"){
    return state.todo.tasks.filter((task) => task.priority === "medium")
  } else if (filter === "high"){
    return state.todo.tasks.filter((task) => task.priority === "high")
  } else {
    return state.todo.tasks;
  }

};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompletedState, deleteTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;
