import React from "react";
import { Link } from "react-router-dom";

import createUserIconIllustration from "../../assets/home/createUser.svg";
import createTeamIllustration from "../../assets/home/createTeam.svg";
import displayTeamsIllustration from "../../assets/home/displayTeams.svg";
import displayUsersIllustration from "../../assets/home/displayUsers.svg";

import { Container, Card } from "./style.js";

const Home = () => {
  return (
    <Container>
      <Link to="/create-user">
        <Card>
          <img
            src={createUserIconIllustration}
            width="200"
            alt="Ajouter un utilisateur"
          />
          Créer un utilisateur
        </Card>
      </Link>
      <Link to="/create-team">
        <Card>
          <img
            src={createTeamIllustration}
            width="200"
            alt="Créer une équipe"
          />
          Créer une équipe
        </Card>
      </Link>
      <Link to="/users">
        <Card>
          <img
            src={displayUsersIllustration}
            width="200"
            alt="Voir les utilisateurs"
          />
          Voir les utilisateurs
        </Card>
      </Link>
      <Link to="/teams">
        <Card>
          <img
            src={displayTeamsIllustration}
            width="200"
            alt="Voir les équipes"
          />
          Voir les équipes
        </Card>
      </Link>
    </Container>
  );
};

export default Home;
