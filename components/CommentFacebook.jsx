import React, { useEffect } from "react"


const CommentsFacebook =(props) => {
   console.log("render CommentsFacebook")

   useEffect(() => {

    if(window.FB){
        window.FB.XFBML.parse();
    }

      console.log("load facebook script")
      const facebookScript = document.createElement("script");
      facebookScript.async = true;
      facebookScript.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=230429605515246&autoLogAppEvents=1`;
      document.body.appendChild(facebookScript);
   },[]);

   return (
      <React.Fragment>
         <div id="fb-root"></div>
         <div className="fb-comments" datahref="http://localhost:3000/blog/ssg-ssr" datawidth="100%" datanumposts="3"></div> 
      </React.Fragment>
   );
};

export default CommentsFacebook;