import * as Yup from "yup";

export const registerValidation = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    username: Yup.string().min(4).required(),
    password: Yup.string().min(6).required(),
    email: Yup.string().email().required()
})