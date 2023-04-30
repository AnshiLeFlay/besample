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
import RegisterLayout from "src/layouts/RegisterLayout";

import StepperSignUp from "src/layouts/components/Stepper/StepperSignUp";

import { PrismaClient } from "@prisma/client";

const Register = (props: any) => {
    const universities = props.data;

    return <StepperSignUp universities={universities} />;
};

Register.getLayout = (page: ReactNode) => (
    <BlankLayout>
        <RegisterLayout>{page}</RegisterLayout>
    </BlankLayout>
);

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
