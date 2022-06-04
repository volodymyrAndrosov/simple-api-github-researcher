import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const { username, reponame } = useParams();

  console.log(username);
  console.log(reponame);

  return (
    <div
      onClick={() => {
        navigate(-1);
      }}>
      Back
    </div>
  );
};

export default Card;
