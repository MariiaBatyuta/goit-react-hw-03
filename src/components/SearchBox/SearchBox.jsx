import { Field, Formik } from "formik";
import css from "./SearchBox.module.css"

export default function SearchBox({value, onFilter}) {
    return (
        <>
            <Formik initialValues={""}>
                <div className={css.container}>
                    <label className={css.label}>Find Contacts By Name</label>
                    <Field className={css.input} type="text" name="filter" value={value} onChange={(e) => onFilter(e.target.value)} />
                </div>
            </Formik>
        </>
    )
}