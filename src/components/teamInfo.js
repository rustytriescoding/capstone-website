import React from "react";
import TeamData from "../project_Data/TeamData";
import "../styles/teamPage.css";
import linkedin from "../assets/linkedin.png";
import githubLogo from "../assets/Octicons-mark-github.svg";

const MemberCard = ({ info }) => {
  return (
    <div className="Team-Container">
      {info.map((data) => (
        <div key={data.key} className="Team-Entrie">
          <div className="Team-Member-Info">
            <div className="Team-Member-Name-Contact">
              <p className="Team-Member-Name">{data.memberName}</p>
              {data.linkedin !== "" ? (
                <a href={data.linkedin}>
                  <img
                    className="Team-link-Logo"
                    src={linkedin}
                    alt="Linkedin Logo"
                  />
                </a>
              ) : (
                ""
              )}
              {data.github !== "" ? (
                <a href={data.github}>
                  <img
                    className="Team-link-Logo"
                    src={githubLogo}
                    alt="Github Logo"
                  />
                </a>
              ) : (
                ""
              )}
            </div>
            <p className="Team-Member-Content">{data.content}</p>
          </div>
          <img
            className="Team-Entrie-photo"
            src={data.image}
            alt={`${data.memberName} pic`}
          />
        </div>
      ))}
    </div>
  );
};

function TeamInfo() {
  console.log(TeamData);
  return <MemberCard info={TeamData} />;
}

export default TeamInfo;
