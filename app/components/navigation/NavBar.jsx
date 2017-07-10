import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Home from 'material-ui/svg-icons/action/home'
import List from 'material-ui/svg-icons/action/list'
import Group from 'material-ui/svg-icons/action/group-work'
import People from 'material-ui/svg-icons/social/people'
import Transaction from 'material-ui/svg-icons/action/compare-arrows'
import Music from 'material-ui/svg-icons/image/music-note'
import Service from 'material-ui/svg-icons/places/room-service'
import { connect } from 'react-redux'
import { firebaseConnect,
  pathToJS,
  isEmpty
} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

const handleTouchTap = () => {
  window.location.href = '/'
}

const styles = {
  title: {
    cursor: 'pointer'
  }
}

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () { this.setState({open: false}) }

  render () {
    const { firebase, auth } = this.props
    const rightElement = isEmpty(auth) ? (
      <div>
        <RaisedButton label='Log In' secondary style={{margin: 8, display: 'inline-block'}} href='/login' />
        <RaisedButton label='Sign Up' secondary style={{margin: 8, display: 'inline-block'}} />
      </div>
    ) : (
      <div>
        <FlatButton
          label='Messages'
          style={{margin: 8, display: 'inline-block'}}
        />
        <FlatButton
          label='Help'
          style={{margin: 8, display: 'inline-block'}}
        />
        <RaisedButton
          label='Sign Out'
          secondary
          style={{margin: 8, display: 'inline-block'}}
          onClick={() => {
            this.props.firebase.logout()
            .then(<Redirect to='/' />)
          }
            } />
      </div>
    )
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Brd</span>}
          onTitleTouchTap={handleTouchTap}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={rightElement}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          containerStyle={{background: '#505d71'}}
        >
          <AppBar
            title={<span style={styles.title}>Brd</span>}
            showMenuIconButton={false}
          />
          <MenuItem
            onTouchTap={this.handleClose}
            style={{color: '#bcc3d0'}}
            leftIcon={<Home color='#e8a4ba' />} >
            Housing
          </MenuItem>
          <Divider style={{background: '#707f96'}} />
          <MenuItem
            onTouchTap={this.handleClose}
            style={{color: '#bcc3d0'}}
            leftIcon={<List color='#ecd28f' />}>
            Jobs
          </MenuItem>
          <Divider style={{background: '#707f96'}} />
          <MenuItem
            onTouchTap={this.handleClose}
            style={{color: '#bcc3d0'}}
            leftIcon={<Group color='#f5f2d0' />}>
            Community
          </MenuItem>
          <Divider style={{background: '#707f96'}} />
          <MenuItem
            onTouchTap={this.handleClose}
            style={{color: '#bcc3d0'}}
            leftIcon={<Transaction color='#d5fdd5' />}>
            For Sale
          </MenuItem>
          <Divider style={{background: '#707f96'}} />
          <MenuItem
            onTouchTap={this.handleClose}
            style={{color: '#bcc3d0'}}
            leftIcon={<Music color='#7ff2f6' />}>
            Gigs
          </MenuItem>
          <Divider style={{background: '#707f96'}} />
          <MenuItem
            onTouchTap={this.handleClose}
            style={{color: '#bcc3d0'}}
            leftIcon={<People color='#a57fc0' />}>
            Personals
          </MenuItem>
          <Divider style={{background: '#707f96'}} />
          <MenuItem
            onTouchTap={this.handleClose}
            style={{color: '#bcc3d0'}}
            leftIcon={<Service color='#f6c0f6' />}>
            Services
          </MenuItem>
          <Divider style={{background: '#707f96'}} />
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = ({firebase}) => ({
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile')
})

export default connect(
  mapStateToProps
)(firebaseConnect()(NavBar))
