import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import Modal from "./Modal";

const initialValues = {
  regnummer: "",
  bonus: "",
  dob: "",
  fornavn: "",
  etternavn: "",
  epost: "",
};

const onSubmit = (values) => {
  console.log(values);
  alert("Hei " + values.fornavn + ", Pris:1000");
};

const validationSchema = Yup.object({
  regnummer: Yup.string()
    .matches(/^[A-Za-z]{2}[0-9]{5}$/, "F.eks AB12345")
    .required("Må fylles"),
  bonus: Yup.string().required("Må fylles"),
  dob: Yup.string()
    .matches(/^[0-9]{11}$/, "11-sifre nummer")
    .required("Må fylles"),
  fornavn: Yup.string().required("Må fylles"),
  etternavn: Yup.string().required("Må fylles"),
  epost: Yup.string()
    .email("Skriv inn en gyldig epostadresse")
    .required("Må fylles"),
});

function RegForm() {
  const [isOpen, setIsOpen] = useState("false");
  const toggleModal = (event) => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form-wrapper">
        <div className="form-control">
          <label htmlFor="regnummer">Bilens regitreringsnummer</label>
          <Field
            type="text"
            name="regnummer"
            id="regnummer"
            placeholder="AB 12345"
            className={ErrorMessage ? "small " : "small error-input"}
          />
          <ErrorMessage
            name="regnummer"
            className="error"
            component={TextError}
          />
        </div>
        <div className="form-control">
          <Modal show={!isOpen} onClose={toggleModal}>
            Noen info tekst om din bonus
          </Modal>
          <label htmlFor="bonus">
            Din bonus{" "}
            <span className="info-icon" onClick={toggleModal}>
              i
            </span>
          </label>
          <Field
            type="text"
            name="bonus"
            id="bonus"
            as="select"
            className={ErrorMessage ? "form-select" : "form-select error-input"}
          >
            <option value="">Velg din bonus</option>
            <option key={1} value={1}>
              Valg 1
            </option>
            <option key={2} value={2}>
              Valg 2
            </option>
          </Field>
          <ErrorMessage name="bonus" className="error" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="dob">Fødselsnummer</label>
          <Field
            type="text"
            name="dob"
            id="dob"
            className={ErrorMessage ? "small " : "small error-input"}
          />
          <ErrorMessage name="dob" className="error" component={TextError} />
        </div>

        <div className="form-names">
          <div className="form-control form-names-first">
            <label htmlFor="fornavn">Fornavn</label>
            <Field
              type="text"
              name="fornavn"
              id="fornavn"
              className={ErrorMessage ? null : "error-input"}
            />
            <ErrorMessage
              name="fornavn"
              className="error"
              component={TextError}
            />
          </div>
          <div className="form-control form-names-last">
            <label htmlFor="etternavn">Etternavn</label>
            <Field
              type="text"
              name="etternavn"
              id="etternavn"
              className={ErrorMessage ? null : "error-input"}
            />
            <ErrorMessage
              name="etternavn"
              className="error"
              component={TextError}
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="epost">E-post</label>
          <Field
            type="email"
            name="epost"
            id="epost"
            className={ErrorMessage ? null : "error-input"}
          />
          <ErrorMessage name="epost" className="error" component={TextError} />
        </div>
        <button type="submit" className="button-primary">
          Beregn Pris
        </button>
        <button type="reset" className="button-secondary">
          Avbryt
        </button>
      </Form>
    </Formik>
  );
}

export default RegForm;
