// ** React Imports
import { ReactNode } from "react";

// ** Next Import
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";
import { Card, CardContent, Grid, Typography } from "@mui/material";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";
import RegisterLayout from "src/layouts/RegisterLayout";

const ResetPage = () => {
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
                            Reset page
                        </Typography>
                        <Typography mb={2.5} variant="body1"></Typography>
                        <Typography mb={2.5} variant="body1"></Typography>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
};

ResetPage.getLayout = (page: ReactNode) => (
    <BlankLayout>
        <RegisterLayout>{page}</RegisterLayout>
    </BlankLayout>
);

ResetPage.guestGuard = true;

export default ResetPage;
