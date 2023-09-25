import { getId } from "../index";

export const ORGMANAGER = 'ORGMANAGER'
export const ORGADMIN = 'ORGADMIN'

export const CheckUserType = (  ) => {

  const admin = JSON.parse(localStorage.getItem('userInfo'));

  const userOrganizations = admin?.orgs?.length && admin?.orgs?.filter((i) => i?.userType && i?.userType !== 'ORGMEMBER')

  const res = userOrganizations && userOrganizations?.find((i) => i?.org === getId )


  if(res){
    return res?.userType
  }else{
    return 'ORGMEMBER'
  }
}