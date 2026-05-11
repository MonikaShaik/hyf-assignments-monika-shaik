
import styles from "./AboutUsPage.module.css";
export const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1 [DONE]
  // Create the "Our Crew section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/crew.
  // Some inspiration ideas can be found in /data/inspiration_about_us.

const crewMembers = [
  {
  name: "Sarah Vega",
  role: "Captain",
  description: "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  image: "/crew/image-anousheh-ansari.png",
},
{
  name: "Dr. Leo Redding",
  role: "Chief astrophysicist",
  description: "Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  image: "/crew/image-mark-shuttleworth.png",
},

{
  name: "Hana Lee",
  role: "Chief Engineer",
  description: "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  image: "/crew/image-anousheh-ansari.png",
},

{
  name: "Alex Santos",
  role: "Mission Specialist",
  description: "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  image: "/crew/image-victor-glover.png",
},

{
  name: "Maya Patel",
  role: "Crew Member",
  description: "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  image: "/crew/image-anousheh-ansari.png",
}
];


  return (
    <section>
      
      <div id= "description">
      <h4> Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</h4>
    </div>
      <div className={styles.container}>
        {crewMembers.map((member) => (
          <div className={styles.membersCard} key={member.name}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};