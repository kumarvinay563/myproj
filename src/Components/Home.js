import React from 'react';
import img from '../images/img2.png';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Home() {

  const classes = useStyles();
  return (
  <div className='home'>
    <h1>HOME</h1>
    <img src={img} className='image'  alt="home_logo"/>
    <div className={classes.root} style={{textAlign : "center"}}>
    <Pagination count={10} variant="outlined" >ADSDHJSFSDH</Pagination>
  </div>
  </div>
  )
}





