import React from "react";
import TeamData from "../project_Data/TeamData";
import "../styles/teamPage.css";

const MemberCard = ({ info }) => {
  return (
    <div className="Team-Container">
      {info.map((data) => (
        <div key={data.key} className="Team-Entrie">
          <div className="Team-Member-Info">
            <div className="Team-Member-Name-Contact">
              <p className="Team-Member-Name">{data.memberName}</p>
              <a href={data.linkedin}>Linkedin </a>|
              <a href={data.github}> Github</a>
            </div>
            <p className="Team-Member-Content">{data.content}</p>
          </div>
          <img src={data.image} alt={`${data.memberName} pic`} />
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
