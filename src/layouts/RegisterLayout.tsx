import React, { ReactNode } from "react";

import Image from "next/image";

import Header from "src/layouts/components/Header/Header";
import Footer from "src/layouts/components/Footer/Footer";

import Box from "@mui/material/Box";

const RegisterLayout = (props: { children?: ReactNode | string }) => {
    return (
        <Box
            py={7.5}
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Image
                style={{
                    position: "absolute",
                    zIndex: "-1",
                    left: "219px",
                    top: "180px",
                }}
                width={1491}
                height={732}
                src="/background.svg"
                alt={""}
            />
            <Header />
            <Box sx={{ width: "100%", maxWidth: "560px" }}>
                {props.children}
            </Box>
            <Footer />
        </Box>
    );
};

export default RegisterLayout;
