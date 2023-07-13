import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTJhYTU0YTAxNjQzZGZlM2Y5ZjUzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTA2NDU3NywiZXhwIjoxNjg5NDk2NTc3fQ.EGRLupUdRGMtdR5wT4b6BWs7NcPTT0qvaQjzo5h6SYY"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer${TOKEN}` },
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    
})

