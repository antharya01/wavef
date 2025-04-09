import React from "react";
import "./Team.css";

const committeeMembers = [
  // 4th Year
  { name: "Shubham Ghosh", role: "President", img: "/f2.jpg", year: "4th Year" },
  { name: "Nabina Layek", role: "Vice President", img: "/f8.jpg", year: "4th Year" },
  { name: "Debashish Panigrahi", role: "General Secretary", img: "/f9.jpg", year: "4th Year" },

  // 3rd Year
  { name: "Vineet Jeengar", role: "Treasurer", img: "/f11.jpg", year: "3rd Year" },
  { name: "Kens Venkateshwarulu", role: "Convenor", img: "/f5.jpg", year: "3rd Year" },
  { name: "Rajeev Kumar Yadav", role: "Tech Head", img: "/f3.jpg", year: "3rd Year" },
  { name: "Ananya Sharma", role: "PR Coordinator", img: "/sample1.jpg", year: "3rd Year" },
  { name: "Rohit Verma", role: "Operations Lead", img: "/sample2.jpg", year: "3rd Year" },

  // 2nd Year
  { name: "Sumit Rastogi", role: "Fest Head", img: "/f10.jpg", year: "2nd Year" },
  { name: "Priyal Bhalerao", role: "Event Head", img: "/f4.jpg", year: "2nd Year" },
  { name: "Dharma Teja", role: "Publicity Head", img: "/f1.jpg", year: "2nd Year" },
  { name: "Sakshi Patel", role: "Design", img: "/sample3.jpg", year: "2nd Year" },
  { name: "Tanishq R", role: "Social Media", img: "/sample4.jpg", year: "2nd Year" },

  // 1st Year
  { name: "Yashika Gupta", role: "Volunteer", img: "/sample5.jpg", year: "1st Year" },
  { name: "Arjun Meena", role: "Volunteer", img: "/sample6.jpg", year: "1st Year" },
  { name: "Sneha Iyer", role: "Content", img: "/sample7.jpg", year: "1st Year" },
  { name: "Karan Das", role: "Support", img: "/sample8.jpg", year: "1st Year" },
];

const TeamRow = ({ year, members }) => (
  <div className="team-row">
    <h2 className="team-year">{year}</h2>
    <div className="marquee-container">
      <div className="marquee">
        {members.map((member, index) => (
          <div className="elem" key={index}>
            <img src={member.img} alt={member.name} />
            <div className="elemword">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Team = () => {
  const years = ["4th Year", "3rd Year", "2nd Year", "1st Year"];

  return (
    <div className="oc">
      <h2 className="oc-title">Organizing Committee</h2>
      {years.map((year) => {
        const members = committeeMembers.filter((member) => member.year === year);
        return <TeamRow key={year} year={year} members={members} />;
      })}
    </div>
  );
};

export default Team;
