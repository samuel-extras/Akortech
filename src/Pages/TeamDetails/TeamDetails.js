import React, { Fragment } from "react";

import { TeamLeader, TeamPageHeader, } from "./Component";
import { TeamContainer, QualityContainer } from "../../Containers";




const TeamDetails = ()=>(
    <Fragment>
    
    <TeamPageHeader/>
    <TeamLeader/>
    <TeamContainer/>
    <hr style={{width: "600px", height: "2px", backgroundColor: "orange" }}/>
    <QualityContainer/>
    </Fragment>
)

export default TeamDetails