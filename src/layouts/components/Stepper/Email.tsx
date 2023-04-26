import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Holder from "./Holder";

const Email = (props: { children: string }) => {
    return (
        <Holder>
            <Box
                sx={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#2F454D",
                    color: "white",
                    borderRadius: "50%",
                }}
            >
                E
            </Box>
            <Typography>{props.children}</Typography>
        </Holder>
    );
};

export default Email;
