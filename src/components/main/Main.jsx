import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { context } from "../../App";

const Main = () => {
  const {
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
  } = useContext(context);

  return (
    <div className="main">
      <div className="nav">
        {/* nav  title */}
        <div className="dropdown">
          <a
            className="btn nav-title dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gemini
          </a>

          <ul className="dropdown-menu " style={{ backgroundColor: "#F8F9FA" }}>
            <li style={{ display: "flex" }}>
              <img
                style={{ width: "14px", height: "14px" }}
                src={assets.gemini_blue}
                alt=""
              />
              <a className="dropdown-item" href="#">
                Gemini
              </a>
              <span style={{ paddingRight: "2px", cursor: "pointer" }}>
                <CheckCircleOutlineIcon />
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <img
                style={{ width: "14px", height: "14px" }}
                src={assets.gemini_purple}
                alt=""
              />

              <a className="dropdown-item" href="#">
                Gemini Advanced
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ fontSize: "13px", padding: "3px", marginRight: "2px" }}
              >
                Upgrade
              </button>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-img-with-btn">
          <button
            type="button"
            className="btn "
            style={{
              fontSize: "13px",
              padding: "3px",
              marginRight: "2px",
              backgroundColor: "#e6eaf1",
            }}
          >
            <img
              style={{ width: "14px", height: "14px" }}
              src={assets.gemini_purple}
              alt=""
            />{" "}
            Try Gemini Advanced
          </button>
          <img src={assets.profile} alt="" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <h1>
                <span>Hello, Dev.</span>
              </h1>
              <h1>How can I help you today?</h1>
            </div>{" "}
            <div className="cards-main">
              <div className="card-single">
                <p>Explain how something works like an engineer</p>
                <div className="logo-card">
                  <div className="logo-card-wrapper">
                    <img
                      src={assets.mic_icon}
                      style={{ width: "25px" }}
                      alt=""
                      
                    />
                  </div>{" "}
                </div>
              </div>
              <div className="card-single">
                <p>Come up with a recipe for an upcoming event</p>
                <div className="logo-card">
                  <div className="logo-card-wrapper">
                    <img
                      src={assets.bulb_icon}
                      style={{ width: "25px" }}
                      alt=""
                   
                    />
                  </div>{" "}
                </div>
              </div>
              <div className="card-single">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <div className="logo-card">
                  <div className="logo-card-wrapper">
                    <img
                      src={assets.compass_icon}
                      style={{ width: "25px" }}
                      alt=""
                     
                    />
                  </div>{" "}
                </div>
              </div>
              <div className="card-single">
                <p>Help me understand American football</p>
                <div className="logo-card">
                  <div className="logo-card-wrapper">
                    <img
                      src={assets.code_icon}
                      style={{ width: "25px" }}
                      alt=""
                     
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.profile} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <div>
                <img src={assets.gemini_blue} className={loading ? `result-data-logo` :`result-data-logo2`}  alt="" />
              </div>
             
              {loading  ? <div className="loader"><hr /><hr /><hr /></div> :  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
             
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt=""/>
             {input ? <img
                onClick={() => onSend()}
                src={assets.send_icon}
                 style={{cursor: "pointer"}}
              /> : null}
            </div>
          </div>
          <div className="bottom-info">
            <p className="bottom-P-onlarge">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.
              <span>Your privacy & Gemini Apps</span>
            </p>
            <p className="bottom-P-onsmall">
              Gemini may display info, so
              double-check its responses.
              <span>Your privacy & Gemini Apps</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
