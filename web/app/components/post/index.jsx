import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import styles from './index.css'

let SelectableList = makeSelectable(List)

class SelectableSidebar extends React.Component {
  constructor (props) {
    super(props)
    this.handleRequestChange = this.handleRequestChange.bind(this)
  }

  componentWillMount () {
    this.setState({
      selectedIndex: this.props.defaultValue
    })
  }

  handleRequestChange (event, index) {
    this.setState({
      selectedIndex: index
    })
  }

  render () {
    let post
    switch (this.state.selectedIndex) {
      case 1:
        post = (<h1>HIiiiiii</h1>)
        break
      default:
        post = null
        break
    }

    return (
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <SelectableList
            value={this.state.selectedIndex}
            onChange={this.handleRequestChange}>
            <Subheader>Choose a Community:</Subheader>
            <ListItem
              value={1}
              primaryText='Housing'
            />
            <ListItem
              value={2}
              primaryText='Jobs'
            />
            <ListItem
              value={3}
              primaryText='Community'
            />
            <ListItem
              value={4}
              primaryText='Buy & Sell'
            />
            <ListItem
              value={5}
              primaryText='Personals'
            />
          </SelectableList>
        </div>
        <div>
          {post}
        </div>
      </div>
    )
  }
}

SelectableSidebar.propTypes = {
  defaultValue: PropTypes.number.isRequired
}

const Sidebar = () => (
  <SelectableSidebar defaultValue={1} />
)

export default class Post extends React.Component {
  render () {
    return (
      <div>
        <Sidebar />
      </div>
    )
  }
}
