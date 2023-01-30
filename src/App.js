import React, { useState } from "react";
import image from "./Images/Watch.jpg";

const App = () => {
  // Set variable "time" to display the time
  let time = new Date().toLocaleTimeString('en-US');
  // ctime is current time and setctime is calling the set current time
  const [ctime, setCtime] = useState(time);
  
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
// calling the function everytime in 1000ms
  setInterval(UpdateTime,1000)
  return (
    <>
      
      {/* <div className="content"> */}
      <img className="img" src={image}/>
      <div className="Clock">
      <h1>{time}</h1>
      </div>
    {/* </div> */}

    {/* //stop watch // */}



    </>
  );
};
export default App;
