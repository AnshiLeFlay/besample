//const BACKEND_ENDPOINT = "http://localhost:8000";
//const BACKEND_ENDPOINT = "http://167.99.242.35:8000";
export const BACKEND_ENDPOINT = "https://bsmpl.musorilo.ru";

/* Authentication endpoints */
export const API_REG: string = `${BACKEND_ENDPOINT}/api/auth/register`; //POST
export const API_USER: string = `${BACKEND_ENDPOINT}/api/users/me`; //GET
export const API_LOGIN: string = `${BACKEND_ENDPOINT}/api/auth/login`; //POST
export const API_REFRESH: string = `${BACKEND_ENDPOINT}/api/auth/refresh`; //GET
export const API_LOGOUT: string = `${BACKEND_ENDPOINT}/api/auth/logout`; //GET

export const API_EMAIL_VERIFY: string = `${BACKEND_ENDPOINT}/api/auth/verifyemail`; //GET

export const API_FORGOT_PASS: string = `${BACKEND_ENDPOINT}/api/auth/forgotpassword`; //POST
export const API_RESET_PASS: string = `${BACKEND_ENDPOINT}/api/auth/resetpassword`; //PATCH
