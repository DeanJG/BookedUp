import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    margin: '0px 10px 0px 10px',
    color: 'white',

  },
  textField: {
    width: 300,
    color: 'white',

  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    backgroundColor: '#5B4FED',
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
  },
  btn: {
      textAlign: 'center',
  }
}));


const time = [
    {
      value: 'Tomorrow',
      label: 'Tomorrow',
  
    },
    {
      value: '1 Week',
      label: '1 Week',
  
    },
    {
        value: '2 Week',
        label: '2 Week',
  
  },
  {
    value: '3 Week',
    label: '3 Week',

},
{
    value: '1 Month',
    label: '1 Month',

},
  
  ];

const currencies = [
  {
    value: '1 Chapter Per Week',
    label: '1 Chapter Per Week',

  },
  {
    value: '2 Chapter Per Week',
    label: '2 Chapter Per Week',

  },
  {
    value: '3 Chapter Per Week',
    label: '3 Chapter Per Week',

},
  {
    value: '1 Chapter Per 2 Weeks',
    label: '1 Chapter Per 2 Weeks',

  },

];

const members = [
    {
      value: 'Only You',
      label: 'Only You',
  
    },
    {
      value: '2',
      label: '2',
  
    },
    {
      value: '3',
      label: '3',
  
  },
    {
      value: '4',
      label: '4',
  
    },
    {
        value: '5',
        label: '5',
    
      },
      {
        value: '6',
        label: '6',
    
      },
      {
        value: '7',
        label: '7',
    
      },
      {
        value: '8',
        label: '8',
    
      },
      {
        value: '9',
        label: '9',
    
      },
      {
        value: '10',
        label: '10',
    
      },
      {
        value: '15',
        label: '15',
    
      },
  ];

function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Book Club Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
<TextField
        id="pace"
        select
        label="Start Date"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {time.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      
      <TextField
        id="pace"
        select
        label="Reading Pace"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id="pace"
        select
        label="Members"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {members.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    <div className={classes.btn}
    >
    <Button variant="contained" className={classes.button}>
    Create New Book Club
    </Button>
    </div>
    </form>
   
  );
}

export default TextFields;
