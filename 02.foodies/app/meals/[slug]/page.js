import React from "react";

const SlugPage = ({ params }) => {
  return (
    <div>
      <h1>SlugPage</h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default SlugPage;
