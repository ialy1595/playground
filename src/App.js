import React from 'react';
import './App.css';
import blog from './blog.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import eng2music from './images/eng2music.jpg';
import npm from './images/npm.png';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function App() {

  const projects = [
    {
      title: "eng2music",
      description: "Find English phrases in music, enjoy them on YouTube.",
      image: eng2music,
      src: "http://ialy1595.me/eng2music/",
    },
    {
      title: "korean-index-of",
      description: "Improved indexOf function for incremental search in Korean.",
      image: npm,
      src: "https://www.npmjs.com/package/korean-index-of",
    },
  ]

  return (
    <Container maxWidth='md'>
      <div className="info">
        <Typography variant='h3' color='textPrimary' gutterBottom>
          Personal Toy Project Playground
        </Typography>
        <Grid container justify='space-evenly'>
          <Grid item>
            <Link href="https://github.com/ialy1595" variant='h4' color='textPrimary' underline='hover' >
              <FontAwesomeIcon icon={faGithub} />
              &nbsp;Github
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://ialy1595.github.io/" variant='h4' color='textPrimary' underline='hover' >
              <img className="blog-image" src={blog} alt="blog"></img>
              &nbsp;Blog
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://ialy1595.github.io/about/" variant='h4' color='textPrimary' underline='hover' >
              <FontAwesomeIcon icon={faUser} />
              &nbsp;About
            </Link>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2}>
        {projects.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <Card>
              <CardActionArea href={p.src}>
                <CardMedia
                  image={p.image}
                  style={{paddingTop: '100%'}}
                />
                <CardContent>
                  <Typography variant='h4' color='textPrimary' gutterBottom>
                    {p.title}
                  </Typography>
                  <Typography variant='body1' color='textSecondary'>
                    {p.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
