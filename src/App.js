import { useState } from "react";
import cepDataContext from "./contexts/cepDataContext";
import isLoadingContext from "./contexts/isLoadingContext"

import Layout from "./pages/Layout"

function App() {
  const [cepData, setCepData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  return ( 
    <cepDataContext.Provider value={{cepData, setCepData}}>
      <isLoadingContext.Provider value={{isLoading, setIsLoading}} >
        <Layout />
      </isLoadingContext.Provider>
    </cepDataContext.Provider> 
  );
}

export default App;
