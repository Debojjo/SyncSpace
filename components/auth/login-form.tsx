"use client";

import {useForm} from "react-hook-form";
import * as z  from "zod";

import{useState, useTransition} from "react";
import { zodResolver} from "@hookform/resolvers/zod";
import { LogInSchema } from "@/schemas";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import{
Form,
FormControl,
FormDescription,
FormItem,
FormMessage,
FormLabel,
FormField
}from "@/components/ui/form"

import { CardWrapper } from "@/components/auth/card-wrapper"
import { login } from "@/actions/login";
import { FormError } from "@/components/error";
import { FormSuccess } from "@/components/success";


export const LoginForm = () => {

    const [ error, setError] = useState<string | undefined>("");
    const [ success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LogInSchema>>({
        resolver : zodResolver(LogInSchema),
        defaultValues : {
            email : "",
            password : "",
        },
    });

    const onSubmit = (values: z.infer<typeof LogInSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })  
    }

    return(
        <CardWrapper
        headerLabel="Welcome-Back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>
             <form 
             onSubmit={form.handleSubmit(onSubmit)}
             className="space-y-5"   
                >
                    <div className="space-y-4">
                       <FormField
                       control = {form.control}
                       name="email"
                       render={({field}) =>(
                          <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input {...field}
                                disabled={isPending}
                                placeholder="abc@email.com"
                                type="email"
                                >
                                </Input>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                       )}
                       /> 
                       <FormField
                       control = {form.control}
                       name="password"
                       render={({field}) =>(
                          <FormItem>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input {...field}
                                disabled = {isPending}
                                placeholder="********"
                                type="password"
                                >
                                </Input>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                       )}
                       /> 
                    </div>
                    <FormError message={error}></FormError>
                    <FormSuccess message={success}></FormSuccess>
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full "
                    >
                        LogIn
                    </Button>
             </form>

            </Form>
        </CardWrapper>
    )
}