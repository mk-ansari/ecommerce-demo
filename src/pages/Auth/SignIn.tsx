// CREATED BY: ANSARI KAMAL

import React from "react";
import {
    Box,
    TextField,
    Container,
    Grid,
    Button,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"

import { signIn } from "../Services/api";

import {style} from "./Auth.style"

const SignIn = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Incorrect Email")
                .required("Email is required."),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: async(values) => {
            const res = await signIn(values);
            console.log(res);
            // console.log("Form Submitted", values);
        },
    });

    return (
        <>
            <Container component="main" maxWidth="xs" sx={style.signinContainer} >
                <Box>
                    <Typography component="h1" variant="h5" sx={{ my: 2 }}>
                        Sign-In
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.email && formik.errors.email ? true : false
                                    }
                                    helperText={formik.touched.email && formik.errors.email}
                                    onBlur={formik.handleBlur}
                                    autoComplete="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={formik.values.password}
                                    type={values.showPassword ? "text" : "password"}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.password && formik.errors.password
                                            ? true
                                            : false
                                    }
                                    helperText={formik.touched.password && formik.errors.password}
                                    onBlur={formik.handleBlur}
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {values.showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={style.button}
                        >
                            Signin
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to="/signup" >
                                    New to amazon? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SignIn