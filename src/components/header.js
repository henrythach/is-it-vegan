import PropTypes from 'prop-types'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, InputBase } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
})

const Header = ({ siteTitle, classes }) => (
  <AppBar position='static'>
    <Toolbar>
      <SearchIcon />
      <InputBase
        placeholder='Search ingredient'
        fullWidth
        autoFocus
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default withStyles(styles)(Header)
