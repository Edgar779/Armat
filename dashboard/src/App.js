import { organizationActions } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DrawerMenu } from "./fragments";
import { FindLoad } from "./utils";
import { Images } from "./assets";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('access-token');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
     dispatch(organizationActions.getOrganizationsByUser());
     if(!token && !userInfo){
       window.location.replace('/')
     }
  }, []);

  const loader = FindLoad('GET_ORG_BY_USER')

  return (
    <div className="App">
      {loader?.length ?
        <div className="splash-screen">
          <img src={Images.ArmatImage} alt="Armat" />
        </div>
        :
        <DrawerMenu />
      }
    </div>
  );
}

export default App;
