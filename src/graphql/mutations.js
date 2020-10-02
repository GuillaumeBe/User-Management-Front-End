import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUserMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $role: AllowedRoles!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      role: $role
    ) {
      _id
      firstName
      lastName
      email
      role
    }
  }
`;

export const CREATE_TEAM = gql`
  mutation CreateTeamMutation(
    $name: String!
    $leader: ID!
    $members: [ID!]!
    $intern: ID!
  ) {
    createTeam(
      name: $name
      leader: $leader
      members: $members
      intern: $intern
    ) {
      _id
      name
      leader {
        _id
      }
      members {
        _id
      }
      intern {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUserMutation(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $role: AllowedRoles!
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      role: $role
    ) {
      user {
        _id
        firstName
        lastName
        email
        role
      }
      message
    }
  }
`;
