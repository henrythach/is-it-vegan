import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CheckIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary='Single-line item'
          secondary='Not vegan'
        />
      </ListItem>
    </List>
  </Layout>
)

export default IndexPage
