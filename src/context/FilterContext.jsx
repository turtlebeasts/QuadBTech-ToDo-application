import React, { createContext, useContext, useState } from "react";
import { useTaskContext } from "./TaskContext";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { tasks } = useTaskContext();
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const today = new Date().toISOString().split("T")[0];

    switch (filter) {
      case "important":
        return task.important;
      case "today":
        return task.dueDate.split("T")[0] === today;
      case "planned":
        return task.dueDate.split("T")[0] !== today;
      case "all":
      default:
        return true;
    }
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter, filteredTasks }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
