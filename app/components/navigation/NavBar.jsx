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
import profileStyles from './navigation.css'

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
    console.log(auth)
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
    const user = isEmpty(auth) ? null : (
      <div className={profileStyles.content}>
        <div className={profileStyles.card}>
          <div className={profileStyles.firstinfo}>
            <img src={auth.photoURL} />
            <div className={profileStyles.profileinfo}>
              <h1>{auth.displayName}</h1>
            </div>
          </div>
        </div>
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
          containerStyle={{overflowY: 'scroll'}}
        >
          <AppBar
            title={<span style={styles.title}>Brd</span>}
            showMenuIconButton={false}
          />
          <MenuItem
            onTouchTap={this.handleClose}
            leftIcon={<Home color='#bf305e' />} >
            Housing
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            leftIcon={<List color='#CA6346' />}>
            Jobs
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            leftIcon={<Group color='#E8E191' />}>
            Community
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            leftIcon={<Transaction color='#74F974' />}>
            For Sale
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            leftIcon={<Music color='#7ff2f6' />}>
            Gigs
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            leftIcon={<People color='#7F537C' />}>
            Personals
          </MenuItem>
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            
            leftIcon={<Service color='#EC7DEC' />}>
            Services
          </MenuItem>
          <Divider  />
          {user}
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
