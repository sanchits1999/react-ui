import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import MobileNumber from "./components/MobileNumber/MobileNumber"
import OtpVerification from "./components/OtpVerification/OtpVerification"


const App = (props) => {

  return (
    <BrowserRouter>
      <div style={{ width: "100%", height: "100vh" }}>

        <Switch>
          <Route path="/verify" exact component={OtpVerification} />
          <Route path="/" exact component={MobileNumber} />
          <Redirect to="/" />
        </Switch>

      </div>
    </BrowserRouter>
  )
}


export default App 
