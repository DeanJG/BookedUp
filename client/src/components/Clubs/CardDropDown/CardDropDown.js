import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Host from '../Host';
import Members from '../Members';
import BookPic from '../../../Assets/50Shades.png';
import Button from '@material-ui/core/Button';
import Discussion from '../Discussion';


const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  }, 
  img: {
      width: '70px',
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary  style={{flex: 'none', textAlign: 'center', padding: 'none'}} aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Book Club Name</Typography>
        </ExpansionPanelSummary >


        <ExpansionPanelDetails style={{flex: 'none', textAlign: 'center', padding: 'none'}}>

   <div style={{flex: 'none', textAlign: 'center', padding: 'none'}}>
 
        <img alt="Remy Sharp" src={BookPic}/>
        <Typography style={{color: '#5B4FED'}} variant="h6" gutterBottom></Typography>
         50 Shades of Grey
         <Host />
         <Members />
         <Typography><b>Host</b></Typography>
         <Discussion />
         <Button variant="contained" style={{color: '#5B4FED', marginTop: '10px'}}>
         Leave BookClub
         </Button>
  </div>
        </ExpansionPanelDetails>

      </ExpansionPanel>

    </div>
  );
}

export default CustomizedExpansionPanels;
