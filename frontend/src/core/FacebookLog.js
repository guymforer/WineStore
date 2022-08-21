import React, { useState } from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  //   const [accsesToken, setAccsesToken]= useState("")

  //   const componentClicked = data => {
  //       console.log("data ", data);
  //   }

  // const responseFacebook = response => {
  // //  console.log(response.accessToken);
  //   setAccsesToken(response.accessToken);

  // };

  return (
    <div>
      <div>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100084310570754&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1128816011320310"
          width={900}
          height={500}
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder={0}
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default Facebook;
