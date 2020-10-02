import React from "react";
import Loader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import * as yup from "yup";

import Form from "../../components/Form";

import { GET_USER, UPDATE_USER } from "../../graphql";

import { notifySuccess, notifyFailure } from "../../utils/notify";
import { Container } from "./style.js";

const schema = yup.object().shape({
  firstName: yup.string().required("Prénom obligatoire"),
  lastName: yup.string().required("Nom obligatoire"),
  email: yup.string().required("Email obligatoire"),
  role: yup.string().ensure().required("Rôle obligatoire"),
});

const UpdateUser = () => {
  const { id } = useParams();
  const { data, loading: fetchingUser, error } = useQuery(GET_USER, {
    variables: { id },
  });
  const [updateUser, { loading: updatingUser }] = useMutation(UPDATE_USER, {
    onCompleted: (res) =>
      notifySuccess(`Utilisateur modifié ! ${res.updateUser.message || ""}`),
    onError: (error) => notifyFailure(error.message),
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
        ...(data?.user.role === "Intern"
          ? []
          : [{ label: "Leader", value: "Leader" }]),
        { label: "Member", value: "Member" },
        ...(data?.user.role === "Leader"
          ? []
          : [{ label: "Intern", value: "Intern" }]),
      ],
    },
  ];

  if (fetchingUser)
    return (
      <Container>
        <Loader color="white" size={100} />
      </Container>
    );
  if (error) return `Oups`;

  return (
    <Container>
      <Form
        title="Modifier un utilisateur"
        schema={schema}
        submit={async (formData) =>
          updateUser({ variables: { ...formData, id: data.user._id } })
        }
        loading={updatingUser}
        defaultValues={data.user}
        fields={fields}
        submitLabel="Modifier"
      />
    </Container>
  );
};

export default UpdateUser;
