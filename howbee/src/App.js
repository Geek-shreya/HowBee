import React from 'react'
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import DashboardComponent from './components/Dashboard/Dashboard';
import JoinNow from './components/JoinNow/JoinNow'

const App =() =>{

    return (
      <div>
          <SignUp/>
          <LogIn/>
          <DashboardComponent/>
          <JoinNow/>
      </div>
    )
}

export default App;

