import React from "react";
import { MinLoader } from "components";
import { FindLoad, useModal } from "utils";

export const MobileHead =({ actionType, onSubmit, title, addButton }) => {
  const loader = FindLoad(actionType)
  const { close } = useModal()

  return(
    <div className="invite-swipe-header mobile-page-flex" >
      <button type='button' onClick={() => close()} className='cancel-mobile'>Cancel</button>
      <p className='mobile-head-title'>{title}</p>
      <button type='submit' onClick={onSubmit ? onSubmit : () => {}}  className='submit-mobile'>
        {loader?.length ?
          <MinLoader color={'#49B776'}/>
          :
          addButton
        }</button>
    </div>
  )
}