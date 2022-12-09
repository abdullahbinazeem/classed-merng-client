import React from "react";
import { Button, Card, Header, Container, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Act5ScenePage() {
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
        Act V
      </Header>
      <Container>
        <Divider />
        <Header as="h2">Scene I</Header>
        <p>
          In the king’s palace at Dunsinane, a doctor and a gentlewoman discuss
          Lady Macbeth’s strange habit of sleepwalking. Suddenly, Lady Macbeth
          enters in a trance with a candle in her hand. Talking about the
          murders of Lady Macduff and Banquo, she seems to see blood on her
          hands and claims that nothing will ever wash it off. She leaves, and
          the doctor and gentlewoman talk about her descent into madness.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene II</Header>
        <p>
          Outside the castle, a group of Scottish lords discuss the military
          situation the English army approaches, led by Malcolm, and the
          Scottish army will meet them near Birnam Wood, Macbeth, has fortified
          Dunsinane Castle and is making his military preparations in a mad
          rage.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene III</Header>
        <p>
          Macbeth strides into the hall of Dunsinane with the doctor and his
          attendants, yelling proudly that he has nothing to fear from the
          English army or from Malcolm, since no one born from a woman can harm
          him. He calls his servant Seyton, who confirms that an army of ten
          thousand Englishmen has arrived at the castle. Macbeth insists that he
          wears his armor, although the battle is still some time out. The
          doctor meets Macbeth and tells him that Lady Macbeth is kept from rest
          by the traumas of her past. Macbeth orders the doctor to cure her of
          her delusions
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene IV</Header>
        <p>
          Malcolm talks with the English lord Siward and his officers about
          Macbeth’s plan to defend the fortified castle. They decide that each
          soldier should cut down a branch from the trees in the forest and
          carry it in front of them as they march to the castle, so they can
          disguise the number of soldiers they have.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene V</Header>
        <p>
          Macbeth urgently orders that banners be hung and demands that his
          castle will repel the enemy. A woman’s cry is heard, and Seyton
          appears to tell Macbeth that the queen is dead. Shocked, Macbeth
          speaks numbly about the passage of time. A messenger enters with
          astonishing news that the trees of Birnam Wood are advancing toward
          Dunsinane. Enraged and terrified, Macbeth recalls the prophecy that
          said he could not die till Birnam Wood moves to Dunsinane. Macbeth
          declares that he is tired of the sun and that at least he will die
          fighting.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene VI</Header>
        <p>
          Outside the castle, the battle commences. Malcolm orders the English
          soldiers to draw their swords.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene VII</Header>
        <p>
          On the battlefield, Macbeth strikes those around him vigorously. He
          slays Lord Siward’s son and disappears . Macduff emerges and searches
          the chaos frantically for Macbeth, who he wants to kill personally. He
          dives again into the battle. Malcolm and Siward emerge and enter the
          castle.
        </p>
      </Container>
      <Container>
        <Divider />
        <Header as="h2">Scene VIII</Header>
        <p>
          Macbeth at last encounters Macduff. They fight, and when Macbeth
          insists that he is invincible because of the witches prophecy, Macduff
          tells Macbeth that he was not born from a woman since he had a
          c-section. Macbeth suddenly fears for his life, but he declares that
          he will not surrender. Malcolm and Siward walk together in the castle,
          which they have now effectively captured. Ross tells Siward that his
          son is dead. Macduff emerges with Macbeth’s head in his hand and
          announces Malcolm King. Malcolm calls all those around him and invites
          them all to see him crowned at Scone.
        </p>
      </Container>
    </Container>
  );
}

export default Act5ScenePage;
