import React from "react";
import { Link } from "react-router-dom";
import "./community.css";

const Community = () => {
  return (
    <section className="community-section">
      <div className="community-decor left">
        <img src="/icon/hat-icon.png" alt="hat" className="icon-top" />
        <img src="/icon/cloud-icon.png" alt="cloud" className="icon-shadow" />
      </div>

      <div className="community-content">
        <img src="/icon/cloud-icon.png" alt="cloud" className="cloud-top" />
        <h2 className="community-title">
          Join Our
          <br />
          Community Banner
        </h2>
        <Link to="/ourCommunity">
          {" "}
          <button className="community-btn">Join now</button>
        </Link>
      </div>

      <div className="community-decor right">
        <img src="/icon/cloud-icon.png" alt="cloud" className="icon-shadow" />
        <img src="/icon/monitor-icon.png" alt="monitor" className="icon-top" />
      </div>
    </section>
  );
};

export default Community;
