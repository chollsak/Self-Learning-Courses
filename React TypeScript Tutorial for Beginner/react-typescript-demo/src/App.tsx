import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const personName = {
    firstName: "Cristiano",
    lastName: "Ronaldo"
  }

  const personList = [
    {
      firstName: "Marcus",
      lastName: "Rashford"
    },
    {
      firstName: "Christian",
      lastName: "Eriksen"
    },
    {
      firstName: "Andre",
      lastName: "Onana"
    },
    {
      firstName: "Bruno",
      lastName: "Fernandes"
    },
  ]

  return (
    <div className="App">
      <Greet name={'Chollasak'} massageCount={359} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={personList} />
    </div>
  );
}

export default App;
