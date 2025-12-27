import React from "react";

interface Props {
  title: string;
}

const Welcome: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>tes dulu</h2>
      </div>
    </>
  );
};

export default Welcome;
