// ** React Imports
import { ReactNode, useEffect, useState } from "react";

// ** Next Import
//import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";
import RegisterLayout from "src/layouts/RegisterLayout";
import { verifyEmail } from "src/store/apps/user";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "src/store";

const Verify = () => {
    const [lock, setLock] = useState<boolean>(false);
    const verify = useSelector((state: RootState) => state.user.verify);
    const dispatch = useDispatch();

    const router = useRouter();
    const { code } = router.query;

    useEffect(() => {
        console.log(typeof code);
        if (code === undefined || code === "undefined") console.log("yes");
        if (!lock) {
            if (code !== undefined && code !== "undefined") {
                // @ts-ignore
                dispatch(verifyEmail({ code: code }));
                setLock(true);
            }
        }
    }, [code]);

    if (code === undefined || code === null) {
        return <>code is null</>;
    }

    return <>{verify.toString()}</>;
};

Verify.getLayout = (page: ReactNode) => (
    <BlankLayout>
        <RegisterLayout>{page}</RegisterLayout>
    </BlankLayout>
);

Verify.guestGuard = true;

export default Verify;
