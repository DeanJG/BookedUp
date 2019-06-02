import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from 'react-router-dom' 
import Icon from '@material-ui/core/Icon'


const useStyles = makeStyles({
  root: {
    width: 500,
    position: "relative",
    bottom: "0px",
    textDecoration: 'none',

  },
  icon: {
    color: '#5B4FED',
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
  },
})



function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    <Link className={classes.link} to='/home'>
      <BottomNavigationAction className={classes.icon} label="Feed" value="feed" icon={<Icon>public</Icon>} />
    </Link>
    <Link className={classes.link} to='/search'>
      <BottomNavigationAction className={classes.icon} label="Search" value="search" icon={<Icon>search</Icon>} />
    </Link>
    <Link className={classes.link} to='/clubs'>
      <BottomNavigationAction className={classes.icon} label="Book Clubs" value="bookclub" icon={<Icon>import_contacts</Icon>} />
    </Link>
    <Link className={classes.link} to='/profile'>
      <BottomNavigationAction className={classes.icon} label="Profile" value="profile" icon={<Icon>face</Icon>} />
    </Link>
    </BottomNavigation>
    </>
  )
}

export default LabelBottomNavigation


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Icon from '@material-ui/core/Icon';

// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
//   icon: {
//         color: '#5B4FED',
//         textDecoration: 'none',
//       },
// });

// function LabelBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('recents');

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   return (
//     <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
//       <BottomNavigationAction label="Feed"  className={classes.icon} value="Feed" icon={<Icon>public</Icon>} />
//       <BottomNavigationAction label="Search"  className={classes.icon} value="Search" icon={<Icon>search</Icon>} />
//       <BottomNavigationAction label="Book Club"  className={classes.icon} value="Book Club" icon={<Icon>import_contacts</Icon>} />
//       <BottomNavigationAction label="Profile"  className={classes.icon} value="Profile" icon={<Icon>face</Icon>} />
//     </BottomNavigation>
//   );
// }

// export default LabelBottomNavigation;
