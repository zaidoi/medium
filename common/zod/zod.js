import * as z from "zod";

const signupInput = z.object({
    name:z.string(),
    email:z.email(),
    password:z.string()
})

const signinInput = z.object({
    email:z.email(),
    password:z.string()
})

const createPostInput = z.object({
    title:z.string(),
    content:z.string()
})

const updatePostInput = z.object({
    title:z.string(),
    content:z.string()
})

export {signupInput,signinInput,createPostInput,updatePostInput}
