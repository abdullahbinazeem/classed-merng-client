import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Button, Grid, Header } from "semantic-ui-react";

const ActGroup = () => (
  <Grid
    columns="four"
    doubling
    stackable
    centered
    className="acts section"
    stretched
  >
    <Grid.Row>
      <Header as="h1" className="title">
        Act Summaries
      </Header>
    </Grid.Row>
    <Grid.Column>
      <Card link>
        <Image
          src="https://www.dailynews.lk/sites/default/files/news/2015/10/07/z_p16-Reading.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Act 1</Card.Header>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button as={Link} to="/scenesummaries/act1">
            Learn
          </Button>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="universal access" />
            Scenes 1-7
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card link>
        <Image
          src="https://i.pinimg.com/736x/e9/78/d2/e978d2b5ebb31ae496a781c18dc302ce.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Act 2</Card.Header>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button as={Link} to="/scenesummaries/act2">
            Learn
          </Button>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="universal access" />
            Scenes 1-4
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card link>
        <Image
          src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/banquo_ver_1.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Act 3</Card.Header>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button as={Link} to="/scenesummaries/act3">
            Learn
          </Button>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="universal access" />
            Scenes 1-6
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card link>
        <Image
          src="https://wedeserveaseven.files.wordpress.com/2015/03/scan-100518-0008.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Act 4</Card.Header>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button as={Link} to="/scenesummaries/act4">
            Learn
          </Button>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="universal access" />
            Scenes 1-3
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card link>
        <Image
          src="https://cdnb.artstation.com/p/assets/images/images/021/483/743/large/angela-wilson-narrative-wilson.jpg?1571851736"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Act 5</Card.Header>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button as={Link} to="/scenesummaries/act5">
            Learn
          </Button>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="universal access" />
            Scenes 1-7
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
);

export default ActGroup;
