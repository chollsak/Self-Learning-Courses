import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avartar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/400768761_1757055368091165_4989315950563692150_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHlO1mOrBFZauIq1HAqxUwKW7Gmt4sficdbsaa3ix-Jx6KeP7lpukthqiuo1sX469QQroC3kulWV9TdluANxIJ3&_nc_ohc=5eANvftckPMAX9dS3bL&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&oh=00_AfAy1e8mSnotc1zIAJato1_GtNlN7JRl9v_tn9FrwAzDYQ&oe=65D85DEE" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
