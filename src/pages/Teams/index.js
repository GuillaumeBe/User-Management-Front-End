import React, { useMemo } from "react";
import Loader from "react-spinners/ClipLoader";
import { useQuery } from "@apollo/client";

import Table from "../../components/Table";

import { GET_TEAMS } from "../../graphql";
import { Container } from "./style.js";

const Teams = () => {
  const { data, loading, error } = useQuery(GET_TEAMS);

  const columns = useMemo(
    () => [
      {
        Header: "Nom",
        accessor: "name",
      },
      {
        Header: "Leader",
        accessor: ({ leader }) => leader.firstName + " " + leader.lastName,
      },
      {
        Header: "Members",
        accessor: ({ members }) =>
          members
            .map((member) => member.firstName + " " + member.lastName)
            .join(", "),
      },
      {
        Header: "Intern",
        accessor: ({ intern }) => intern.firstName + " " + intern.lastName,
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
      <Table data={data.teams} columns={columns} title="Liste des équipes" />
    </Container>
  );
};

export default Teams;
