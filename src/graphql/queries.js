import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUserQuery($id: ID!) {
    user(id: $id) {
      _id
      email
      firstName
      lastName
      role
    }
  }
`;

export const GET_USERS = gql`
  query GetUsersQuery {
    users {
      _id
      email
      firstName
      lastName
      role
    }
  }
`;

export const GET_TEAMS = gql`
  query GetTeamsQuery {
    teams {
      _id
      name
      leader {
        _id
        firstName
        lastName
        email
        role
      }
      members {
        _id
        firstName
        lastName
        email
        role
      }
      intern {
        _id
        firstName
        lastName
        email
        role
      }
    }
  }
`;
