import React from "react";
import { useMutation, gql } from "@apollo/client";
import * as yup from "yup";

import Form from "../../components/Form";

import { CREATE_USER } from "../../graphql";
import { notifySuccess, notifyFailure } from "../../utils/notify";
import { Container } from "./style.js";

const schema = yup.object().shape({
  firstName: yup.string().required("Prénom obligatoire"),
  lastName: yup.string().required("Nom obligatoire"),
  email: yup.string().required("Email obligatoire"),
  role: yup.string().required("Rôle obligatoire"),
});

const CreateUser = () => {
  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      notifySuccess("Utilisateur créé !");
    },
    onError: (error) => notifyFailure(error.message),
    update(cache, { data: { createUser } }) {
      cache.modify({
        fields: {
          users(existingUsers = []) {
            const newUsersRef = cache.writeFragment({
              data: createUser,
              fragment: gql`
                fragment NewUsers on User {
                  _id
                  firstName
                  lastName
                  email
                  role
                }
              `,
            });

            return [...existingUsers, newUsersRef];
          },
        },
      });
    },
  });

  const fields = [
    { type: "text", name: "firstName", label: "Prénom" },
    { type: "text", name: "lastName", label: "Nom" },
    { type: "email", name: "email", label: "Email" },
    {
      isSelect: true,
      name: "role",
      label: "Rôle",
      options: [
        { label: "Leader", value: "Leader" },
        { label: "Member", value: "Member" },
        { label: "Intern", value: "Intern" },
      ],
    },
  ];

  return (
    <Container>
      <Form
        title="Créer un utilisateur"
        schema={schema}
        submit={async (formData) => createUser({ variables: formData })}
        isLoading={loading}
        fields={fields}
        submitLabel="Créer"
      />
    </Container>
  );
};

export default CreateUser;
