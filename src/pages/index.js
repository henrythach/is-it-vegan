import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { List, ListItem, ListItemText } from '@material-ui/core'
import * as data from '../data/non-vegan.json'

const Ingredient = ({ title }) => (
  <ListItem>
    <ListItemText primary={title} secondary='Not vegan' />
  </ListItem>
)

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <List dense>
      {data.map((d, index) => (
        <Ingredient key={index} title={d} />
      ))}
    </List>
  </Layout>
)

export default IndexPage
