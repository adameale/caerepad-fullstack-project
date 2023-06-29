import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTJhYTU0YTAxNjQzZGZlM2Y5ZjUzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Nzg3NDU2MywiZXhwIjoxNjg4MzA2NTYzfQ.J8ascz7_8AfCH6Yo9LTEhsCc1uSPkDJOQ_tjCdUMKAA"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer${TOKEN}` },
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    
})

