import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers";

import Field from "../Field";
import Button from "../Button";
import Title from "../Title";

import { StyledForm, Buttons } from "./style.js";

const Form = ({
  schema,
  submit,
  loading,
  title,
  fields,
  submitLabel,
  defaultValues,
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Title>{title}</Title>
      {fields.map((field) => (
        <Field
          key={field.name}
          isSelect={field.isSelect}
          multiple={field.multiple}
          type={field.type}
          name={field.name}
          label={field.label}
          ref={register}
          errors={errors[field.name]}
        >
          {field.options?.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Field>
      ))}
      <Buttons>
        <Link to="/">
          <Button type="button" isSecondary>
            Précédent
          </Button>
        </Link>
        <Button type="submit" isLoading={loading}>
          {submitLabel}
        </Button>
      </Buttons>
    </StyledForm>
  );
};

export default Form;
