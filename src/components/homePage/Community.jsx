import React from "react";
import "./community.css";

const Community = () => {
  return (
    <section className="community-section">
      <div className="community-decor left">
        <img src="/assets/hat-icon.png" alt="hat" className="icon-top" />
        <img src="/assets/cloud-icon.png" alt="cloud" className="icon-shadow" />
      </div>

      <div className="community-content">
        <img src="/assets/cloud-icon.png" alt="cloud" className="cloud-top" />
        <h2 className="community-title">
          Join Our
          <br />
          Community Banner
        </h2>
        <button className="community-btn">Join now</button>
      </div>

      <div className="community-decor right">
        <img src="/assets/cloud-icon.png" alt="cloud" className="icon-shadow" />
        <img
          src="/assets/monitor-icon.png"
          alt="monitor"
          className="icon-top"
        />
      </div>
    </section>
  );
};

export default Community;
