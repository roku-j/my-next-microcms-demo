import { createClient } from "microcms-js-sdk";

console.log(process.env.API_KEY);

export const client = createClient({
    serviceDomain: "ifzxltclc7",    
    apiKey: process.env.API_KEY
    

})