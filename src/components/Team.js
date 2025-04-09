import React from "react";
import "./Team.css";

const committeeMembers = [
  { name: "Shubham Ghosh", role: "President", img: "/f2.jpg" },
  { name: "Nabina Layek", role: "Vice President", img: "/f8.jpg" },
  { name: "Debashish Panigrahi", role: "General Secretary", img: "/f9.jpg" },
  { name: "Vineet Jeengar", role: "Treasurer", img: "/f11.jpg" },
  { name: "Kens Venkateshwarulu", role: "Convenor", img: "/f5.jpg" },
  { name: "Rajeev Kumar Yadav", role: "Tech Head", img: "/f3.jpg" },
  { name: "Aniket Kamble", role: "Logistics Head", img: "/f6.jpg" },
  { name: "Sumit Rastogi", role: "Fest Head", img: "/f10.jpg" },
  { name: "Priyal Bhalerao", role: "Event Head", img: "/f4.jpg" },
  { name: "Dharma Teja", role: "Publicity Head", img: "/f1.jpg" },
  { name: "Basab Lekri", role: "Webdev Head", img: "/f7.jpg" },
];

const Team = () => {
  return (
    <div className="oc">
      <h2 className="oc-title">Organizing Committee</h2>
      <div id="marquepics">
        <div className="marque">
          {committeeMembers.map((member, index) => (
            <div className="elem" key={index}>
              <img src={member.img} alt={member.name} />
              <div className="elemword">
                <h4>{member.name}</h4>
                <h4>{member.role}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
