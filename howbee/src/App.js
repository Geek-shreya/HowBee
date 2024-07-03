import React from 'react'
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import DashboardComponent from './components/Dashboard/Dashboard';

const App =() =>{

    return (
      <div>
          <SignUp/>
          <LogIn/>
          <DashboardComponent/>
      </div>
    )
}

export default App;

