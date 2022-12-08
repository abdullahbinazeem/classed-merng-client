import React from "react";
import { Button, Card, Header, Container, Divider } from "semantic-ui-react";

function Act3ScenePage() {
  return (
    <Container text>
      <Header as="h1" style={{ margin: "2em 0" }}>
        Act III
      </Header>
      <Container>
        <Divider />
        <Header as="h2">Scene I</Header>
        <p>
          In this scene we get our first look at Macbeth and Lady Macbeth as
          King and Queen. Macbeth announces that they will be holding a feast to
          celebrate him and his wife becoming the new King and Queen. Later on
          in the scene we see Macbeth talking to the two murderers he hired to
          kill Banquo. The two murderers dont agree to the job easily and Maceth
          has to convince them that Banquo is there enemy and that there lives
          will be better if Banquo is dead.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene II</Header>
        <p>
          In this scene we see Macbeth continuing to struggle coping with what
          he did to Duncan. Lady Macbeth is constantly having to tell him to
          stop thinking about it so he doesn't expose them for the murrder. We
          also get to see that Lady Macbeth and Macbeth have switched roles in
          their relationship as Macbeth is planning Banquo's murder without
          her. At the end of the scene Macbeth expresses that he wants to
          destroy the witches prophecy meaning he has to kill Banquo and
          Fleance.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene III</Header>
        <p>
          This scene is the climax of the act as Banquo is killed by the Three
          murderers. As Banquo is getting attacked his son Fleance maneges to
          escape and run away from then murderers. This is bad news for Macbeth
          because his plan has failed and the witches prophecy is still on track
          to becoming true.
        </p>
      </Container>
    </Container>
  );
}

export default Act3ScenePage;
