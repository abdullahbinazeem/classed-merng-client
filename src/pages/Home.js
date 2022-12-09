import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Grid, Transition, Segment, Form, Button, Divider, Card } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data: getPosts } = useQuery(FETCH_POSTS_QUERY);

  return (
    <>
      <Segment placeholder style={{ margin: "15em 0" }}>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <a href="#post">
              <Button
                content="Post"
                icon="twitter"
                size="big"
                color="blue"
                style={{ padding: "1em 3vw" }}
              />
            </a>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Link to="/resources">
              <Button
                content="Learn"
                icon="book"
                size="big"
                color="red"
                style={{ padding: "1em 3vw" }}
              />
            </Link>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
      <Grid
        columns="three"
        doubling
        divided
        style={{ padding: "5em 0 2em" }}
        id="post"
      >
        <Grid.Row className="page-title">
          <h1>Collaboration</h1>
        </Grid.Row>
        <Grid.Row>
          {!user && (
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Card.Header style={{ padding: "1em 0" }}>
                    You Don't Have an Account Yet !
                  </Card.Header>
                  <Link to="/login">
                    <Button
                      content="Login"
                      icon="twitter"
                      size="big"
                      color="teal"
                      stretched
                    />
                  </Link>
                </Card.Content>
                <Card.Content>
                  <Link to="/register">
                    <Button
                      content="Register"
                      icon="twitter"
                      size="big"
                      color="green"
                      stretched
                    />
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          )}
          {user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )}
          {loading ? (
            <h1>Loading posts..</h1>
          ) : (
            <Transition.Group>
              {getPosts &&
                getPosts.getPosts.map((post) => (
                  <Grid.Column
                    key={post.id}
                    style={{ marginBottom: 20 }}
                    stretched
                  >
                    <PostCard post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Home;
