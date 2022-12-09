import React from "react";
import { Button, Card, Header, Container, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Act3ScenePage() {
  return (
    <Container text style={{ padding: "2em 0" }}>
      <Link to="/resources">
        <Button
          content="Back"
          icon="book"
          size="big"
          color="red"
          style={{ padding: "1em 3vw" }}
        />
      </Link>
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
          their relationship as Macbeth is planning Banquo's murder without her.
          At the end of the scene Macbeth expresses that he wants to destroy the
          witches prophecy meaning he has to kill Banquo and Fleance.
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
      <Container>
        <Divider />
        <Header as="h2">Scene IV</Header>
        <p>
          This scene takes place at the Macbeths celebration party. The party
          starts to turn to chaos when Macbeth is alerted that Fleance escaped
          from the murderers. Macbeth is thrown into a state of panic when he
          sees Banquo's ghost. Macbeth assumes that everyone can see the ghost
          so he starts to ask everyone at the party who put Banquo's bloody body
          at the table. Lady Macbeth has to cover up for Macbeth's mental
          breakdown once again by saying that he did this all the time and he is
          just imagining things. When Macbeth finally regains awareness he
          raises a toast to Banquo talking about how good of a man he is. At the
          end of the scene Lady Macbeth accidentally reveals their secret by
          saying that Maceth was having another vision similar to the one that
          led him to Duncan.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene V</Header>
        <p>
          The witches meet with Hecate, the goddess of witchcraft. Hecate
          questions them for why they are messing with the business of Macbeth
          without consulting her but declares that she will take over as
          supervisor of the mischief. She says that when Macbeth comes the next
          day, as they know he will, they must summon visions and spirits whose
          messages will fill him with a false sense of security. Hecate
          vanishes, and the witches go to prepare their vision.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene VI</Header>
        <p>
          Somewhere in Scotland, Lennox walks with another lord, discussing what
          has happened to the kingdom. Banquo’s murder has been officially
          blamed on Fleance, who has fled. Nevertheless, both men suspect
          Macbeth in the murders of Duncan and Banquo. The lord tells Lennox
          that Macduff has gone to England, where he will join Malcolm in
          pleading with England’s King Edward for aid. News of these plots has
          prompted Macbeth to prepare for war. Lennox and the lord express their
          hope that Malcolm and Macduff will be successful and that they can
          save Scotland.
        </p>
      </Container>
    </Container>
  );
}

export default Act3ScenePage;
