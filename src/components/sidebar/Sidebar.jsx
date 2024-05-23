import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  const [extended, setExtended]= useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {extended ? (
          <div className="menu-icon" onClick={()=>setExtended(prev=>!prev)}>
            <img src={assets.menu_icon} />
            
          </div>
        ) : (
          <div className="menu-icon"               onClick={()=>setExtended(prev=>!prev)}

          alt="">
            <img
              src={assets.menu_icon}
              
            />
          </div>
        )}

        <div className="" style={{ margin: "9px" }}>
          <div className="sidebar-chat">
            <img src={assets.plus_icon} />
            {extended ? <p>New chat</p> : null}
          </div>
          {extended ? (
            <div className="sidebar-recent">
              <p className="recent-title ">Recent</p>
              <div className="recentEntry">
                <img src={assets.message_icon} alt="" />
                <p>what is react.....</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="sidebar-bottom">
        <div>
          <div className="bottomItem recentEntry">
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottomItem recentEntry">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottomItem recentEntry">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

