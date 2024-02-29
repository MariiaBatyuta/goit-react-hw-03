import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from 'nanoid'

export default function ContactForm({ onAdd }) {
    
    const handleContact = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        };
        onAdd(newContact);
        actions.resetForm();
    };

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().trim().min(2, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().max(10, "Too long!").required("Required"),
    });

    return (
        <div className={css.contactForm}>
            <Formik onSubmit={handleContact} initialValues={{ name: '', number: '' }} validationSchema={FeedbackSchema}>
                <Form className={css.card}>
                    <label className={css.label}>Name</label>
                    <Field className={css.input} type="text" name="name" />
                    <span className={css.error}>
                        <ErrorMessage  name="name" />
                    </span>

                    <label className={css.label}>Phone</label>
                    <Field className={css.input} type="text" name="number" />
                    <span className={css.error}>
                        <ErrorMessage  name="number" />
                    </span>

                    <button className={css.button} type="submit">Add Contact</button>
                </Form>
            </Formik>
        </div>
    )
}
