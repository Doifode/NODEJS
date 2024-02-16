import { Field, ErrorMessage } from "formik";
type inputProps = {
    name: string,
    type: string,
    placeholder: string,
    label: string
}
const FormikInput = ({ name, type, placeholder, label }: inputProps) => {
    return <>
        <div className="row my-2">
            <label htmlFor="" className="mb-1">{label}</label>
            <Field name={name} className="form-control" type={type} placeholder={placeholder} />
            <small className="text-danger"> <ErrorMessage name={name}></ErrorMessage></small>
        </div>
    </>

}

export default FormikInput