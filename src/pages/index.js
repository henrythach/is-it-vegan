import React, { useState } from 'react'
import { graphql } from 'gatsby'

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

const IndexPage = ({ data, classes }) => {
  const ingredients = data.ingredients.edges.map(e => e.node)
  const [searchQuery, setSearchQuery] = useState('')
  const filteredIngredients = ingredients
    .filter(ingredient => ingredient.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
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
      <List dense>
        {filteredIngredients.map((ingredient, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={ingredient.name}
              secondary={ingredient.description || 'Not vegan'} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default withStyles(styles)(IndexPage)

export const query = graphql`
  {
    ingredients: allNonVeganYaml {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`
