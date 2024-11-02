import * as z  from "zod";

export const LogInSchema = z.object({
    email : z.string().email({
        message : "Invalid Email",
    }),
    password : z.string().min(1,{
        message :" Password needed",
    }),

});

export const RegisterSchema = z.object({
    email : z.string().email({
        message : "Invalid Email",
    }),
    password : z.string().min(8,{
        message :"Minimum 6 characters required",
    }),
    name: z.string().min(1, {
        message:"Enter your name",
    })
});


