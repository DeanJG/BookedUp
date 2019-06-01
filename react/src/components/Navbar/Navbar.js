import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from 'react-router-dom' 
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
})

function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    <Link to='/home'>
      <BottomNavigationAction label="Feed" value="feed" icon={<Icon>public</Icon>} />
    </Link>
    <Link to='/search'>
      <BottomNavigationAction label="Search" value="search" icon={<Icon>search</Icon>} />
    </Link>
    <Link to='/clubs'>
      <BottomNavigationAction label="Book Clubs" value="bookclub" icon={<Icon>import_contacts</Icon>} />
    </Link>
    <Link to='/profile'>
      <BottomNavigationAction label="Profile" value="profile" icon={<Icon>face</Icon>} />
    </Link>
    </BottomNavigation>
  )
}

export default LabelBottomNavigation
