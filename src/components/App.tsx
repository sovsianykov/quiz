import React, {FunctionComponent } from 'react';

import {useTypesSelector} from "../hooc/useTypesSelector";
import {Verb} from "../content/verbs";
import Header from "./Header/Header";




const App:FunctionComponent = () => {
  // const dispatch = useDispatch()
  // useEffect(() =>{
  //   dispatch(GetVerbsAction)
  // },[dispatch]);
  // const { cards } = useTypesSelector((state) => state.verbsReducer);

  return (

    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
