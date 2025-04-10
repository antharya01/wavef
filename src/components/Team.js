import React from "react";
import "./Team.css";

const committeeMembers = [
  // 4th Year (11)
  { name: "Shubham Ghosh", img: "/f2.jpg", year: "4th Year" },
  { name: "Nabina Layek", img: "/f8.jpg", year: "4th Year" },
  { name: "Debashish Panigrahi", img: "/f9.jpg", year: "4th Year" },
  { name: "Vineet Jeengar", img: "/f11.jpg", year: "4th Year" },
  { name: "Kens Venkateshwarulu", img: "/f5.jpg", year: "4th Year" },
  { name: "Rajeev Kumar Yadav", img: "/f3.jpg", year: "4th Year" },
  { name: "Ainket Kamble", img: "/f6.jpg", year: "4th Year" },
  { name: "Sumit Rastogi", img: "/f10.jpg", year: "4th Year" },
  { name: "Priyal Bhalerao", img: "/f4.jpg", year: "4th Year" },
  { name: "Dharma Teja", img: "/f1.jpg", year: "4th Year" },
  { name: "Basab Lekhri", img: "/f7.jpg", year: "4th Year" },

// 3rd Year (20)
{ name: "Jayant Mandal", img: "/Jayant.jpg", year: "3rd Year" },
{ name: "Kirthika S", img: "/Kirthika.jpg", year: "3rd Year" },
{ name: "Mohammed Asif", img: "/Mohammed.jpg", year: "3rd Year" },
{ name: "Ramya Akalankam", img: "/ramya.jpg", year: "3rd Year" },
{ name: "Kartikeya", img: "/kartik.jpg", year: "3rd Year" },
{ name: "Pranesh Rao K", img: "/PRANESH.jpg", year: "3rd Year" },
{ name: "Rupali Kumari", img: "/Rupali.3f1978e5.jpg", year: "3rd Year" },
{ name: "Arnab Banerjee", img: "/Arnab Banerjee.79320dab.jpg", year: "3rd Year" },
{ name: "Anshika Goswami", img: "/Anshika.27c6b3f8.jpg", year: "3rd Year" },
{ name: "Sai Sahil", img: "/SAI SAHIL.b582a455.JPG", year: "3rd Year" },
{ name: "Sarmistha Naskar", img: "/Sarmistha.64a9a910.jpg", year: "3rd Year" },
{ name: "Sk Raj Ali", img: "/raj.jpg", year: "3rd Year" },
{ name: "Anshul Kumar", img: "/anushul", year: "3rd Year" },
{ name: "MMSS Manikanta", img: "/mohan.jpeg", year: "3rd Year" },
{ name: "Kumar Shankar", img: "/kumar.jpg", year: "3rd Year" },
{ name: "Md Toufeeque Khan", img: "/toufeeeue.jpeg", year: "3rd Year" },
{ name: "Sivala Rishitha", img: "/rishitha.jpg", year: "3rd Year" },
{ name: "Deepsika Bishoye", img: "/deepiska.jpg", year: "3rd Year" },
{ name: "Sanjib Maity", img: "/sanjib.jpeg", year: "3rd Year" },
{ name: "Harshada Pawar", img: "/harshada.jpg", year: "3rd Year" },


  // 2nd Year (24)
{ name: "Debasmita Saha", img: "/DebasmitaSaha.jpg", year: "2nd Year" },
{ name: "Anurag Ray", img: "/anurag.jpg", year: "2nd Year" },
{ name: "Antharya J", img: "/antharya.jpg", year: "2nd Year" },
{ name: "Swastik Roy", img: "/swastik.jpg", year: "2nd Year" },
{ name: "MMK Lechler", img: "/flora.jpg", year: "2nd Year" },
{ name: "Animesh", img: "/animesh.JPG", year: "2nd Year" },
{ name: "Sayantan Banerjee", img: "/SayantanBanerjee.jpg", year: "2nd Year" },
{ name: "Suraj Kumar", img: "/suraj.JPG", year: "2nd Year" },
{ name: "Sashwata Ghosh", img: "/Shaswata.jpg", year: "2nd Year" },
{ name: "Basudev Pal", img: "/basudev.jpg", year: "2nd Year" },
{ name: "Vishu J", img: "/vishu.jpg", year: "2nd Year" },
{ name: "Utkarsh A", img: "/utkarsh.jpg", year: "2nd Year" },
{ name: "Darshit R", img: "/darshit.jpg", year: "2nd Year" },
{ name: "Aman Shaw", img: "/aman.jpg", year: "2nd Year" },
{ name: "Pulkit Sepat", img: "/pulkit.jpeg", year: "2nd Year" },
{ name: "Shambhabi Gupta", img: "/shambabi.jpg", year: "2nd Year" },
{ name: "Gopeshwar Kumar", img: "/Gopeshwar.jpg", year: "2nd Year" },
{ name: "Md Huzaifah Alam", img: "/huzafia.jpg", year: "2nd Year" },
{ name: "Rishab Soni", img: "/rishab.jpg", year: "2nd Year" },
{ name: "Sai Bhavana", img: "/bahvana.jpg", year: "2nd Year" },
{ name: "Aditya Shaw", img: "/aditya.jpg", year: "2nd Year" },
{ name: "Shrutisadhan Mudly", img: "/mudly.jpg", year: "2nd Year" },
{ name: "Debjoyti shil", img: "/deb.jpg", year: "2nd Year" },
{ name: "Srijian", img: "/srijian.jpg", year: "2nd Year" },
{ name: "Soumyadeep dey", img: "/soum.jpg", year: "2nd Year" },

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
  const years = ["4th Year", "3rd Year", "2nd Year"];

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
