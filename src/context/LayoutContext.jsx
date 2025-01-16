import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState(
    sessionStorage.getItem("layout") || "list"
  );

  const toggleLayout = () => {
    const newLayout = layout === "grid" ? "list" : "grid";
    setLayout(newLayout);
    sessionStorage.setItem("layout", newLayout);
  };

  return (
    <LayoutContext.Provider value={{ layout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};
