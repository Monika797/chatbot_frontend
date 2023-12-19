import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {" "}
      <img src="openai.png" alt="open ai" width="30px" height={"30px"} className="image-inverted" />
      <Link to="/">
        <Typography
          sx={{
            display: {
              md: "block",
              sm: "none",
              xs: "none",            
            },
            textShadow: "2px 2px 20px #000",
            fontWeight:"800",
            mr :'auto',
            border :'2px solid green',
            color:'white'
          }}
        >
          <span style={{ fontSize: "20px" ,fontWeight :"800"}}>MERN</span>-GPT
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
