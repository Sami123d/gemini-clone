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
 const newChat = () => {setLoading(false);setShowResult(false)}
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setresultData((prev) => prev + nextWord);
    }, 95 * index);
  };

  const onSend = async (prompt) => {
    setresultData("");
    setLoading(true);
    setShowResult(true);
    let getRes;
    if (prompt !== undefined) {
      getRes = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setprevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      getRes= await run(input)
    }

    let responseArray = getRes.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    setresultData(newResponse2);
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const NextWord = newResponseArray[i];
      delayPara(i, NextWord + " ");
    }
    setInput("");
    setLoading(false);
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
    newChat
  };

  return (
    <context.Provider value={contextValue}>
      <Sidebar />
      <Main />
    </context.Provider>
  );
};

export default App;
