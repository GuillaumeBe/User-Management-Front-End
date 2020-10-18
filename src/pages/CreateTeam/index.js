import React from "react";
import Loader from "react-spinners/ClipLoader";
import { gql, useQuery, useMutation } from "@apollo/client";
import * as yup from "yup";

import Form from "../../components/Form";

import { GET_USERS, GET_TEAMS, CREATE_TEAM } from "../../graphql";
import { notifySuccess, notifyFailure } from "../../utils/notify";
import { Container } from "./style.js";

const schema = yup.object().shape({
  name: yup.string().required("Nom obligatoire"),
  leader: yup.string().required("Leader obligatoire"),
  members: yup.lazy((val) =>
    Array.isArray(val)
      ? yup
          .array()
          .of(yup.string())
          .max(2, "Deux membres maximum")
          .required("Membre obligatoire")
      : yup.string().required("Membre obligatoire")
  ),
  intern: yup.string().required("Stagiaire obligatoire"),
});

const CreateTeam = () => {
  const { data: usersData, loading: fetchingUsers, errorUsers } = useQuery(
    GET_USERS
  );
  const { data: teamsData, loading: fetchingTeams, errorTeams } = useQuery(
    GET_TEAMS
  );

  const [createTeam, { loading: creatingTeam }] = useMutation(CREATE_TEAM, {
    onCompleted: () => notifySuccess("Team créée !"),
    onError: (error) => notifyFailure(error.message),
    update(cache, { data: { createTeam } }) {
      cache.modify({
        fields: {
          teams(existingTeams = []) {
            const newTeamsRef = cache.writeFragment({
              data: createTeam,
              fragment: gql`
                fragment NewTeams on Team {
                  _id
                  name
                  leader
                  members
                  intern
                }
              `,
            });

            return [...existingTeams, newTeamsRef];
          },
        },
      });
    },
  });

  if (fetchingUsers || fetchingTeams)
    return (
      <Container>
        <Loader color="white" size={100} />
      </Container>
    );
  if (errorUsers || errorTeams) return `Oups`;

  const leaderOptions = usersData.users
    .filter(
      (user) =>
        user.role === "Leader" &&
        !teamsData.teams.map((team) => team.leader._id).includes(user._id)
    )
    .map((user) => {
      return {
        label: `${user.firstName} ${user.lastName}`,
        value: user._id,
      };
    });

  const membersOptions = usersData.users
    .filter((user) => user.role === "Member")
    .map((user) => {
      return {
        label: `${user.firstName} ${user.lastName}`,
        value: user._id,
      };
    });

  const internOptions = usersData.users
    .filter((user) => user.role === "Intern")
    .map((user) => {
      return {
        label: `${user.firstName} ${user.lastName}`,
        value: user._id,
      };
    });

  const fields = [
    { type: "text", name: "name", label: "Nom" },
    {
      isSelect: true,
      name: "leader",
      label: "Leader",
      options: leaderOptions,
    },
    {
      isSelect: true,
      multiple: true,
      name: "members",
      label: "Members (2 max)",
      options: membersOptions,
    },
    {
      isSelect: true,
      name: "intern",
      label: "Intern",
      options: internOptions,
    },
  ];

  return (
    <Container>
      <Form
        title="Créer une équipe"
        schema={schema}
        submit={async (formData) => createTeam({ variables: formData })}
        isLoading={creatingTeam}
        fields={fields}
        submitLabel="Créer"
      />
    </Container>
  );
};

export default CreateTeam;
