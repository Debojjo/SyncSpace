"use server";

import * as z  from "zod";

import { signIn, signOut } from "@/auth";
import { LogInSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LogInSchema>) => {
const validatedFields  = LogInSchema.safeParse(values);

if(!validatedFields.success){
    return { error :"Invalid-fields!"};
}

const {email,password} = validatedFields.data;
try{
await signIn("credentials",
    {
     email,
     password,
     redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
} catch(error){
if(error instanceof AuthError) {
    switch(error.type){
        case "CredentialsSignin":
            return{ error : "Invalid!"}
            default : 
            return { error: "something went wrong!"}
    }
}
throw error;
}
};