import React from "react";
import { Container, Input, Select, Label, Error } from "./style";

const Field = React.forwardRef(
  ({ isSelect, name, type, label, errors, multiple, children }, ref) => {
    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>
        {isSelect ? (
          <Select name={name} id={name} ref={ref} multiple={multiple}>
            {children}
          </Select>
        ) : (
          <Input type={type} name={name} id={name} ref={ref} />
        )}
        {errors && <Error>{errors?.message}</Error>}
      </Container>
    );
  }
);

export default Field;
