import React, { createContext, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main.jsx";
import run from "./config/gemini.jsx";
 export const context = createContext();
const App = () => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setprevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setresultData] = useState("");


  const onSend = async (prompt) => {
    await run(input);
  };

  const contextValue = {
    input,
    setInput,
    prevPrompts,
    setprevPrompts,
    recentPrompt,
    setRecentPrompt,
    onSend,
    showResult,
    loading,
    resultData,
  };


  return (
    <context.Provider value={contextValue}> 
      <Sidebar />
      <Main/>
    </context.Provider>
  );
};

export default App;
