import React from "react";
import { Svg } from "../../assets";

export const MobileFilterChip = ({title, active, handleClick}) => {
  return(
      <div onClick={handleClick} className='mobile-filter-chip' style={{background: active ? '#49B776' : '#FFF' }}>
        <p style={{color: active ? '#FFF' :  '#273357'}}>{title}</p>
        {active ?
          <img src={Svg.filterDownWhite} alt="icon" />
          :
          <img src={Svg.filterDown} alt="icon" />
        }
      </div>
  )
}