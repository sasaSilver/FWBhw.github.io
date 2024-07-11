import React from "react";
export const runtime = "edge";
const page = () => {
  return (
    <div className="global-header">
      Aleksandr Mikhailov
      <img src="images/pfp.jpg" alt="me" className="global-pfp" />
    </div>
  );
};

export default page;
