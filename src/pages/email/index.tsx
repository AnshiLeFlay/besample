"use client";
// ** React Imports
import React, { ReactNode, useState } from "react";

// ** MUI Components
import Box from "@mui/material/Box";
import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";
import RegisterLayout from "src/layouts/RegisterLayout";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { BACKEND_ENDPOINT } from "src/utils/endpoints";

const BACKEND_ENDPOINT_LOCAL = "http://localhost:8000";

const EmailPage = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [ans, setAns] = useState("");

    const handleSend = async () => {
        setAns("");
        setLoading(true);
        try {
            const response = await axios.get(
                `${BACKEND_ENDPOINT}/api/auth/domaincheck/?email=${email}`
            );
            console.log(response.data);
            let ans = `${response.data?.answer?.type}`;
            if (response.data?.answer?.type !== "manual") ans = `${ans} - true`;
            else ans = `${ans} - false`;

            setAns(ans);
            setLoading(false);
        } catch (arr: any) {
            setLoading(false);
        }
    };

    return (
        <Card style={{ marginTop: "150px" }}>
            <CardContent>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography>{ans}</Typography>
                        <TextField
                            disabled={loading}
                            size="medium"
                            fullWidth
                            label="email"
                            sx={{ mb: 4 }}
                            placeholder="example@uni.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Box mt={4} mb={8}>
                            <LoadingButton
                                sx={{ height: "56px" }}
                                size="large"
                                fullWidth
                                onClick={handleSend}
                                loading={loading}
                                loadingIndicator="Loading…"
                                variant="contained"
                            >
                                <span>Check email</span>
                            </LoadingButton>
                        </Box>
                        <Typography>
                            university_domain - найден в базе доменов
                            университетов
                            <br />
                            <br />
                            edu/ac - национальный домен или домен .edu / .ac
                            <br />
                            <br />
                            whitelist - найден в бд в разрешенных адресах
                            <br />
                            <br />
                            manual - ожидание ручной проверка
                        </Typography>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
};

EmailPage.getLayout = (page: ReactNode) => (
    <BlankLayout>
        <RegisterLayout>{page}</RegisterLayout>
    </BlankLayout>
);

EmailPage.guestGuard = true;

export default EmailPage;
