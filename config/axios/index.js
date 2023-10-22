import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import errorHandler from "@/config/axios/errorHandler";

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`
});

instance.interceptors.response.use((response) => response.data, errorHandler)

export default instance