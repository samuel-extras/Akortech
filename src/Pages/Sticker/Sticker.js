import React, { Fragment } from "react";

import { SubPagePattern } from "../../Components";
import stickerData from "./StickerData";


const Sticker=()=>(
    <Fragment>
    
        <SubPagePattern
         name={stickerData.name}
         logo={stickerData.image}
         details={stickerData.details}
         lh={"45px"}
         />
    
    </Fragment>
)
export default Sticker