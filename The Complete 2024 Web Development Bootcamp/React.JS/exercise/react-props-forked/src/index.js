import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imgSrc} alt="avatar_img" />
      <p>{props.tell}</p>
      <p>{props.gmail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      imgSrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tell="+123 456 789"
      gmail="b@beyonce.com"
    />
    <Card
      name="Chollasak"
      imgSrc="https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/400768761_1757055368091165_4989315950563692150_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHlO1mOrBFZauIq1HAqxUwKW7Gmt4sficdbsaa3ix-Jx6KeP7lpukthqiuo1sX469QQroC3kulWV9TdluANxIJ3&_nc_ohc=5eANvftckPMAX9dS3bL&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&oh=00_AfAy1e8mSnotc1zIAJato1_GtNlN7JRl9v_tn9FrwAzDYQ&oe=65D85DEE"
      tell="+99 712 2060"
      gmail="65010195@kmitl.ac.th"
    />
  </div>,
  document.getElementById("root")
);
