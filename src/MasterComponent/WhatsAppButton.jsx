import React from 'react';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip } from "@mui/material";

const WhatsAppButton = ({ message }) => {
    return (
        <a
        href={`https://wa.me/+917010361660?text=${encodeURIComponent(message)}`}
        target="_blank"
        className="drop-shadow-2xl"
        style={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
        }}
      >
        <Tooltip title="Chat with us now" followCursor>
          <div
            style={{
              backgroundColor: "#25D366",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <WhatsAppIcon fontSize="large" style={{ color: "#fff" }} />
          </div>
        </Tooltip>
  
        {/*   <span style={{ fontWeight: "bold" }}>Chat with us now</span> */}
      </a>
    );
};

export default WhatsAppButton;