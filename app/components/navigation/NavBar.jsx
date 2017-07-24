import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { firebaseConnect,
  pathToJS,
  isEmpty
} from 'react-redux-firebase'
import { Redirect, Link } from 'react-router-dom'
import profileStyles from './navigation.css'
import navStyles from './navbar.css'

const styles = {
  title: {
    color: 'black'
  }
}

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false, redirect: false}
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleTouchTap (event) {
    event.preventDefault()
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleClose () {
    this.setState({open: false})
  }

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
        <div className={navStyles.postButton}>
          <RaisedButton label='New Listing' secondary href='/post' />
        </div>
        <FloatingActionButton mini style={{margin: '8px'}} onTouchTap={this.handleTouchTap}>
          <img src={auth.photoURL} />
        </FloatingActionButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleClose}
        >
          <Menu>
            <Link to='/account' onClick={() => this.setState({open: false})}>
              <MenuItem
                primaryText='My Account' />
            </Link>
            <MenuItem primaryText='Settings' />
            <MenuItem
              primaryText='Sign out'
              onTouchTap={() => {
                this.setState({open: false})
                this.props.firebase.logout()
                .then(this.setState({redirect: true}))
              }
            }
            />
          </Menu>
        </Popover>
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
    const { redirect } = this.state
    if (redirect) {
      this.setState({redirect: false})
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className={navStyles.header}>
        <AppBar
          title={<Link to='/'><span style={styles.title}>Brd</span></Link>}
          showMenuIconButton={false}
          // onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={rightElement}
          zDepth={0}
        />
        <div className={navStyles.navigation}>
          <div className={navStyles.navigationCategory}>
            Housing
          </div>
          <div className={navStyles.navigationCategory}>
            Jobs
          </div>
          <div className={navStyles.navigationCategory}>
            Community
          </div>
          <div className={navStyles.navigationCategory}>
            Buy & Sell
          </div>
          <div className={navStyles.navigationCategory}>
            Personals
          </div>
        </div>
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
