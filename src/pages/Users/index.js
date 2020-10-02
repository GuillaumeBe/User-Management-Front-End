import React, { useMemo } from "react";
import Loader from "react-spinners/ClipLoader";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import Table from "../../components/Table";

import { GET_USERS } from "../../graphql";
import { Container } from "./style.js";

const Users = () => {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_USERS);

  const columns = useMemo(
    () => [
      {
        Header: "Prénom",
        accessor: "firstName",
      },
      {
        Header: "Nom",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Rôle",
        accessor: "role",
      },
    ],
    []
  );

  if (loading)
    return (
      <Container>
        <Loader color="white" size={100} />
      </Container>
    );

  if (error) return `Oups`;

  return (
    <Container>
      <Table
        onRowClick={({ id }) => history.push(`/user/${id}`)}
        data={data.users}
        columns={columns}
        title="Liste des utilisateurs"
        subtitle="Cliquez sur une ligne pour modifier l'utilisateur"
      />
    </Container>
  );
};

export default Users;
