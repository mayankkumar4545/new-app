import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-header-row">
        <div className="skills-heading-block">
          <h2 className="skills-heading">
            Skills That
            <br />
            Shape Tomorrow
          </h2>
        </div>
      </div>

      <div className="skills-cards">
        {/* Card 1 */}
        <div className="skills-card red">
          <div className="card-top">
            <h3>
              Join My EdSkills
              <br />
              To Activate Your Learning
            </h3>
            <span className="arrow">→</span>
          </div>
          <img
            src="/assets/skills-student.webp"
            alt="Student"
            className="card-img"
          />
          <div className="badges">
            <span className="badge black">Original Designs</span>
            <span className="badge purple">Creativity</span>
            <span className="badge lime">Gamification</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="skills-card green">
          <div className="card-top">
            <h3>
              Join My EdSkills
              <br />
              To Activate Your Teaching
            </h3>
            <span className="arrow">→</span>
          </div>
          <img
            src="/assets/Teaching-skills.jpg"
            alt="Teacher"
            className="card-img"
          />
          <div className="meta">
            <div className="avatars">
              <img src="/icon/leaf-icon.png" alt="av1" />
              <img src="/icon/leaf-icon.png" alt="av2" />
              <img src="/icon/leaf-icon.png" alt="av3" />
              <img src="/icon/leaf-icon.png" alt="av4" />
            </div>
            <span className="duration">16:12</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="skills-card purple">
          <div className="card-top">
            <h3>
              Support Your Child’s
              <br />
              Learning Through My EdSkills
            </h3>
            <span className="arrow">→</span>
          </div>
          <img
            src="/assets/skills-student.webp"
            alt="Family"
            className="card-img"
          />
          <div className="badges">
            <span className="badge lime">Expert solutions</span>
            <span className="badge white">Parental nurturing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
