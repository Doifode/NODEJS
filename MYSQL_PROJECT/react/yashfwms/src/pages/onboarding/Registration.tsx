import { Formik, Form } from "formik";
import FormikInput from "../reusables/FormikInput";
import { registerValidation } from "../../helpers/Yup";
import { UserDetails } from "../../helpers/models";
import axios from "axios";
import { toast } from "react-toastify";

const Registration = () => {
    const userDetails: UserDetails = {
        username: "",
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        createdtime: new Date()
    }
    const submitForm = async (values: UserDetails) => {
        const data = await axios.post("http://localhost:2304/addUser", values)
        if (data.data.status) {
            toast(data.data.message)
        } else {
            toast(data.data.message)
        }

    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header p-3 ">
                    <h1>Register</h1>
                </div>
                <div className="card-body">
                    <Formik validationSchema={registerValidation}
                        initialValues={userDetails} onSubmit={(values: UserDetails) => { submitForm(values) }}>{() =>
                            <Form>
                                <FormikInput name="firstname" type="text" placeholder="Enter first name" label="First Name" />
                                <FormikInput name="lastname" type="text" placeholder="Enter last name" label="Last Name" />
                                <FormikInput name="email" type="email" placeholder="Enter user email" label="Email" />
                                <FormikInput name="password" type="password" placeholder="Enter user password" label="Password" />
                                <FormikInput name="username" type="text" placeholder="Enter username" label="User Name" />
                                <button type="submit" className="btn btn-sm btn-success">submit</button>
                            </Form>

                        }
                    </Formik>
                </div>
            </div>

        </div>
    )
}

export default Registration