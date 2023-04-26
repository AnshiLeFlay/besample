import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

const Holder = (props: { children: ReactNode | string }) => {
    return (
        <Box
            sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px 10px 6px 6px",
                gap: "8px",
                background: "#F5F7F7",
                border: "1px solid #E1EAED",
                borderRadius: "50px",
                width: "fit-content",
                margin: "0 auto",
                marginBottom: "1rem",
            }}
        >
            {props.children}
        </Box>
    );
};

export default Holder;
