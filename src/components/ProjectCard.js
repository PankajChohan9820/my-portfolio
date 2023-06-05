import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfilePic from '../assets/pankaj.jpeg';

export default function ProjectCard(props) {
  return (
    <Card sx={{ height: '350px', width: '300px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={ProfilePic}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.headerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Preview</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}