"use server";

import { db } from "@/lib/db";
import * as z  from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
const validatedFields  = RegisterSchema.safeParse(values);

if(!validatedFields.success){
    return { error :"Invalid-fields!"};
}

const { email, password, name} = validatedFields.data;
const hashPassword = await bcrypt.hash(password, 10);

const userexists = await getUserByEmail(email);

if(userexists){
    return {error: "Email taken"};
}

await  db.user.create({
  data:
   {
    name,
    email,
    password: hashPassword,
}
})

return { success: "User created"};
};