import { FC } from "react";
import { Formik, Field, Form } from "formik";
import { initialValues, inputs } from "../../utils/constants";
import { createSchema } from "../../utils/schema";
import { useCreatePlace } from "../../utils/service";
import { PlaceData } from "../../types/Tpes";


const Create: FC = () => {
  const { mutate, isPending } = useCreatePlace(); 
  const handleSubmit = (values: PlaceData) => {
    mutate(values);
  };
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createSchema}
      >
        {({ errors, touched }) => {
          console.log(errors, touched);
          return (
            <Form className="max-w-2xl mx-auto grid gap-4">
              {inputs.map((input, key) => (
                <div key={key} className="field">
                  <label>{input.label}</label>
                  <Field
                    type={input.type || "text"}
                    name={input.name}
                    className="input"
                    placeholder={input.placeholder}
                  />
                  {errors[input.name as keyof typeof errors] &&
                    touched[input.name as keyof typeof errors] ? (
                      <span className="text-red-500 text-sm">
                        {errors[input.name as keyof typeof errors]}
                      </span>
                    ) : (<span className="text-transparent select-none text-sm">.</span>)}
                </div>
              ))}
              <button
              disabled={isPending}
                type="submit"
                className="my-5 bg-blue-500 py-2 px-6 text-white rounded-md transition hover:bg-blue-600"
              >
                Gönder
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Create;
