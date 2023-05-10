// ** React Imports
import { ReactNode, useEffect, useState } from "react";

// ** Next Import
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";
import { Card, CardContent, Grid, Typography } from "@mui/material";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";
import RegisterLayout from "src/layouts/RegisterLayout";
import { verifyEmail } from "src/store/apps/user";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import {
    academicStatus,
    changeEmail,
    checkedStatus,
    setStep,
    setUniversity,
} from "src/store/apps/stepper";

const Verify = () => {
    const [lock, setLock] = useState<boolean>(false);
    const verify = useSelector((state: RootState) => state.user.verify);
    const dispatch = useDispatch();

    const router = useRouter();
    const { code } = router.query;

    useEffect(() => {
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

    // @ts-ignore
    //return <>{verify?.message}</>;

    return (
        <Card>
            <CardContent>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography mb={2.5} variant="h5">
                            Email verify
                        </Typography>
                        <Typography mb={2.5} variant="body1">
                            message: "
                            {
                                // @ts-ignore
                                verify?.message
                            }
                            "
                        </Typography>
                        <Typography mb={2.5} variant="body1">
                            status: "
                            {
                                // @ts-ignore
                                verify?.status
                            }
                            "
                        </Typography>
                        {
                            // @ts-ignore
                            verify?.status === "success" && (
                                <Link
                                    onClick={() => {
                                        dispatch(setStep(1));
                                        dispatch(changeEmail(verify?.email));
                                        dispatch(
                                            setUniversity(
                                                verify?.universityName
                                            )
                                        );
                                        if (verify?.page === "waitlist") {
                                            dispatch(academicStatus(false));
                                        } else {
                                            dispatch(academicStatus(true));
                                        }
                                        dispatch(checkedStatus(true));
                                    }}
                                    href="/register"
                                >
                                    Next step
                                </Link>
                            )
                        }
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
};

Verify.getLayout = (page: ReactNode) => (
    <BlankLayout>
        <RegisterLayout>{page}</RegisterLayout>
    </BlankLayout>
);

Verify.guestGuard = true;

export default Verify;
