import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function creatCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(creatCard)}
    </div>
  );
}

export default App;
