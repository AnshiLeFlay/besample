const BACKEND_ENDPOINT = "http://localhost:8000";

/* Authentication endpoints */
export const API_REG: string = `${BACKEND_ENDPOINT}/api/auth/register`; //POST
export const API_USER: string = `${BACKEND_ENDPOINT}/api/users/me`; //GET
export const API_LOGIN: string = `${BACKEND_ENDPOINT}/api/auth/login`; //POST
export const API_REFRESH: string = `${BACKEND_ENDPOINT}/api/auth/refresh`; //GET
export const API_LOGOUT: string = `${BACKEND_ENDPOINT}/api/auth/logout`; //GET
