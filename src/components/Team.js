import React from "react";
import "./Team.css";

const committeeMembers = [
  // 4th Year (11)
  { name: "Shubham Ghosh", img: "/f2.jpg", year: "4th Year" },
  { name: "Nabina Layek", img: "/f8.jpg", year: "4th Year" },
  { name: "Debashish Panigrahi", img: "/f9.jpg", year: "4th Year" },
  { name: "Member 4", img: "/sample1.jpg", year: "4th Year" },
  { name: "Member 5", img: "/sample2.jpg", year: "4th Year" },
  { name: "Member 6", img: "/sample3.jpg", year: "4th Year" },
  { name: "Member 7", img: "/sample4.jpg", year: "4th Year" },
  { name: "Member 8", img: "/sample5.jpg", year: "4th Year" },
  { name: "Member 9", img: "/sample6.jpg", year: "4th Year" },
  { name: "Member 10", img: "/sample7.jpg", year: "4th Year" },
  { name: "Member 11", img: "/sample8.jpg", year: "4th Year" },

  // 3rd Year (15)
  { name: "Vineet Jeengar", img: "/f11.jpg", year: "3rd Year" },
  { name: "Kens Venkateshwarulu", img: "/f5.jpg", year: "3rd Year" },
  { name: "Rajeev Kumar Yadav", img: "/f3.jpg", year: "3rd Year" },
  { name: "Ananya Sharma", img: "/sample1.jpg", year: "3rd Year" },
  { name: "Rohit Verma", img: "/sample2.jpg", year: "3rd Year" },
  { name: "Member 6", img: "/sample3.jpg", year: "3rd Year" },
  { name: "Member 7", img: "/sample4.jpg", year: "3rd Year" },
  { name: "Member 8", img: "/sample5.jpg", year: "3rd Year" },
  { name: "Member 9", img: "/sample6.jpg", year: "3rd Year" },
  { name: "Member 10", img: "/sample7.jpg", year: "3rd Year" },
  { name: "Member 11", img: "/sample8.jpg", year: "3rd Year" },
  { name: "Member 12", img: "/sample9.jpg", year: "3rd Year" },
  { name: "Member 13", img: "/sample10.jpg", year: "3rd Year" },
  { name: "Member 14", img: "/sample11.jpg", year: "3rd Year" },
  { name: "Member 15", img: "/sample12.jpg", year: "3rd Year" },

  // 2nd Year (20)
  { name: "Sumit Rastogi", img: "/f10.jpg", year: "2nd Year" },
  { name: "Priyal Bhalerao", img: "/f4.jpg", year: "2nd Year" },
  { name: "Dharma Teja", img: "/f1.jpg", year: "2nd Year" },
  { name: "Sakshi Patel", img: "/sample3.jpg", year: "2nd Year" },
  { name: "Tanishq R", img: "/sample4.jpg", year: "2nd Year" },
  { name: "Member 6", img: "/sample5.jpg", year: "2nd Year" },
  { name: "Member 7", img: "/sample6.jpg", year: "2nd Year" },
  { name: "Member 8", img: "/sample7.jpg", year: "2nd Year" },
  { name: "Member 9", img: "/sample8.jpg", year: "2nd Year" },
  { name: "Member 10", img: "/sample9.jpg", year: "2nd Year" },
  { name: "Member 11", img: "/sample10.jpg", year: "2nd Year" },
  { name: "Member 12", img: "/sample11.jpg", year: "2nd Year" },
  { name: "Member 13", img: "/sample12.jpg", year: "2nd Year" },
  { name: "Member 14", img: "/sample13.jpg", year: "2nd Year" },
  { name: "Member 15", img: "/sample14.jpg", year: "2nd Year" },
  { name: "Member 16", img: "/sample15.jpg", year: "2nd Year" },
  { name: "Member 17", img: "/sample16.jpg", year: "2nd Year" },
  { name: "Member 18", img: "/sample17.jpg", year: "2nd Year" },
  { name: "Member 19", img: "/sample18.jpg", year: "2nd Year" },
  { name: "Member 20", img: "/sample19.jpg", year: "2nd Year" },

  // 1st Year (20)
  { name: "Yashika Gupta", img: "/sample5.jpg", year: "1st Year" },
  { name: "Arjun Meena", img: "/sample6.jpg", year: "1st Year" },
  { name: "Sneha Iyer", img: "/sample7.jpg", year: "1st Year" },
  { name: "Karan Das", img: "/sample8.jpg", year: "1st Year" },
  { name: "Member 5", img: "/sample9.jpg", year: "1st Year" },
  { name: "Member 6", img: "/sample10.jpg", year: "1st Year" },
  { name: "Member 7", img: "/sample11.jpg", year: "1st Year" },
  { name: "Member 8", img: "/sample12.jpg", year: "1st Year" },
  { name: "Member 9", img: "/sample13.jpg", year: "1st Year" },
  { name: "Member 10", img: "/sample14.jpg", year: "1st Year" },
  { name: "Member 11", img: "/sample15.jpg", year: "1st Year" },
  { name: "Member 12", img: "/sample16.jpg", year: "1st Year" },
  { name: "Member 13", img: "/sample17.jpg", year: "1st Year" },
  { name: "Member 14", img: "/sample18.jpg", year: "1st Year" },
  { name: "Member 15", img: "/sample19.jpg", year: "1st Year" },
  { name: "Member 16", img: "/sample20.jpg", year: "1st Year" },
  { name: "Member 17", img: "/sample21.jpg", year: "1st Year" },
  { name: "Member 18", img: "/sample22.jpg", year: "1st Year" },
  { name: "Member 19", img: "/sample23.jpg", year: "1st Year" },
  { name: "Member 20", img: "/sample24.jpg", year: "1st Year" },
];
const TeamRow = ({ year, members }) => {
  const scrollingMembers = [...members, ...members]; // doubles the list for seamless loop

  return (
    <div className="team-row">
      <h2 className="team-year">{year}</h2>
      <div className="marquee-container">
        <div className="marquee">
          {scrollingMembers.map((member, index) => (
            <div className="elem" key={`${member.name}-${index}`}>
              <img src={member.img} alt={member.name} />
              <div className="elemword">
                <h4>{member.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


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
