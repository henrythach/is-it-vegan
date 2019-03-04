import React, { useState } from 'react'

import SEO from '../components/seo'
import {
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  InputBase,
  CssBaseline
} from '@material-ui/core'
import * as ingredients from '../data/non-vegan.json'
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
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
})

const Ingredient = ({ title }) => (
  <ListItem>
    <ListItemText primary={title} secondary='Not vegan' />
  </ListItem>
)

const Ingredients = ({ ingredients }) => (
  <List dense>
    {ingredients.map((d, index) => (
      <Ingredient key={index} title={d} />
    ))}
  </List>
)

const IndexPage = ({ classes }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredIngredients = ingredients
    .filter(i => i.toLowerCase().includes(searchQuery.trim().toLowerCase()))
    .slice(0, 25)

  return (
    <>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <AppBar position='sticky'>
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
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
        </Toolbar>
      </AppBar>
      <Ingredients ingredients={filteredIngredients} />
    </>
  )
}

export default withStyles(styles)(IndexPage)
