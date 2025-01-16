import ResponsiveDrawer from "./containers/ResponsiveDrawer";
import { FilterProvider } from "./context/FilterContext";
import { LayoutProvider } from "./context/LayoutContext";
import { TaskProvider } from "./context/TaskContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <TaskProvider>
        <LayoutProvider>
          <FilterProvider>
            <ResponsiveDrawer />
          </FilterProvider>
        </LayoutProvider>
      </TaskProvider>
    </ThemeContextProvider>
  );
}

export default App;
