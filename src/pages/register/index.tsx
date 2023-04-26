// ** React Imports
import { ReactNode } from "react";

// ** Next Import
//import Link from 'next/link'
import Image from "next/image";

//import background from '../public/background.svg'

// ** MUI Components
import Box from "@mui/material/Box";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";
import Header from "src/layouts/components/Header/Header";
import Footer from "src/layouts/components/Footer/Footer";
import StepperSignUp from "src/layouts/components/Stepper/StepperSignUp";

import { PrismaClient } from '@prisma/client';

const Register = (props: any) => {

    const universities = props.data;

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
                <StepperSignUp universities={universities} />
            </Box>
            <Footer />
        </Box>
    );
};

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

Register.guestGuard = true;

export async function getStaticProps() {
    const prisma = new PrismaClient();

    //const someData = await prisma.$queryRawUnsafe('SELECT * FROM Universities WHERE Domains = "acu.edu";');
    
    const someData = await prisma.universities.findMany();

    return {
      props: {
        data: someData,
      },
    };
  }

export default Register;
