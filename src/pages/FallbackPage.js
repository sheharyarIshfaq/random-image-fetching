import React from "react";

const FallbackPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h4>We couldn't find what you were looking for.</h4>
      <p>
        Please contact the owner of the site that linked you to the original URL
        and let them know their link is broken.
      </p>
    </div>
  );
};

export default FallbackPage;
