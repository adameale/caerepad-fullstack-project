import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.  eyJpZCI6IjY0OTJhYTU0YTAxNjQzZGZlM2Y5ZjUzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTgzNTA1MCwiZXhwIjoxNjkwMjY3MDUwfQ.YnnbgwvW-V1SYF4_obwZvtxSizLiqhfnEjfoST50xJg"
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "")
export const publicRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer${TOKEN}` },
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    
})

