// CREATED BY: ANSARI KAMAL

import { useState, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";

import { signUp } from "../../Services/api";

import { style } from "./Auth.style";

const SignUp = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		password: "",
		showPassword: false,
		showConfirmPassword: false,
	});

	useEffect(() => {
		const auth = localStorage.getItem('user');
		if (auth) {
			navigate("/")
		}
	}, []);


	const handleClickShowPassword = (value: any) => {
		if (value === "password") {
			setValues({ ...values, showPassword: !values.showPassword });
		} else {
			setValues({
				...values,
				showConfirmPassword: !values.showConfirmPassword,
			});
		}
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(10, "Name must be less or equal 10 Characters.")
				.required("Name is required."),
			email: Yup.string()
				.email("Incorrect Email")
				.required("Email is required."),
			password: Yup.string().required("Password is required"),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Confirm Password is required"),
		}),

		onSubmit: async (values) => {
			const data = {
				name: values.name,
				email: values.email,
				password: values.password,
			}

			const res = await signUp(data);
			if (res?.status === 200) {
				navigate("/")
			}
		},
	});

	return (
		<Container component="main" maxWidth="xs" sx={style.signupContainer}>
			<Box>
				<Typography component="h1" variant="h5" sx={{ my: 2 }}>
					Create Account
				</Typography>
				<Box component="form" onSubmit={formik.handleSubmit} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="name"
								label="Name"
								value={formik.values.name}
								onChange={formik.handleChange}
								error={formik.touched.name && formik.errors.name ? true : false}
								helperText={formik.touched.name && formik.errors.name}
								onBlur={formik.handleBlur}
								fullWidth
							/>
						</Grid>
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
												onClick={() => handleClickShowPassword("password")}
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
						<Grid item xs={12}>
							<TextField
								id="confirmPassword"
								name="confirmPassword"
								label="Confirm Password"
								value={formik.values.confirmPassword}
								type={values.showConfirmPassword ? "text" : "password"}
								onChange={formik.handleChange}
								error={
									formik.touched.confirmPassword &&
										formik.errors.confirmPassword
										? true
										: false
								}
								helperText={
									formik.touched.confirmPassword &&
									formik.errors.confirmPassword
								}
								onBlur={formik.handleBlur}
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleClickShowPassword}>
												{values.showConfirmPassword ? (
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
					<Button type="submit" fullWidth variant="contained" sx={style.button}>
						Register
					</Button>
					<Grid container justifyContent="center">
						<Grid item>
							<Link to="/signin">Already have an account? Sign in</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default SignUp;
