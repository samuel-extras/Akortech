import React from "react";
import TeamCard from "../../Components/TeamDetailCard";
import team from "../../Pages/TeamDetails/TeamData"

const TeamContainer = () => (
  <section className="container">
  
  
    <div className="section-content ">
      <div className="row" >
      {
        team.map((member, i)=><TeamCard 
        key={i}
        name={member.name}
        image={member.image}
        profession={member.profession}
        
        />)
      }
      
      </div>
    </div>
 
  </section>
);
export default TeamContainer;
