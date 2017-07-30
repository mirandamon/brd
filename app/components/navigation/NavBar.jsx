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
import { updateActiveView } from 'actions'
import { Redirect, Link } from 'react-router-dom'
import profileStyles from './navigation.css'
import navStyles from './navbar.css'

const classNames = require('classnames')

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
    const { firebase, auth, onPageChange, currentPage } = this.props
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
            <Link to='/account' onClick={() => {
              this.setState({open: false})
              onPageChange('')
            }}>
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
          <div className={classNames((currentPage === 'EXPLORE' && navStyles.activeNavigationCategory), navStyles.navigationCategory)}>
            <Link to='/' onClick={() => onPageChange('EXPLORE')}>
              Explore
            </Link>
          </div>
          <div className={classNames((currentPage === 'HOUSING' && navStyles.activeNavigationCategory), navStyles.navigationCategory)}>
            <Link to='/housing' onClick={() => onPageChange('HOUSING')}>
              Housing
            </Link>
          </div>
          <div className={classNames((currentPage === 'JOBS' && navStyles.activeNavigationCategory), navStyles.navigationCategory)}>
            <Link to='/jobs' onClick={() => onPageChange('JOBS')}>
              Jobs
            </Link>
          </div>
          <div className={classNames((currentPage === 'COMMUNITY' && navStyles.activeNavigationCategory), navStyles.navigationCategory)}>
            <Link to='/community' onClick={() => onPageChange('COMMUNITY')}>
              Community
            </Link>
          </div>
          <div className={classNames((currentPage === 'SHOP' && navStyles.activeNavigationCategory), navStyles.navigationCategory)}>
            <Link to='/shop' onClick={() => onPageChange('SHOP')}>
              Buy & Sell
            </Link>
          </div>
          <div className={classNames((currentPage === 'PERSONALS' && navStyles.activeNavigationCategory), navStyles.navigationCategory)}>
            <Link to='/personals' onClick={() => onPageChange('PERSONALS')}>
              Personals
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({firebase, currentPage}) => ({
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile'),
  currentPage
})

const mapDispatchToProps = dispatch => {
  return {
    onPageChange: pageName => {
      dispatch(updateActiveView(pageName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(firebaseConnect()(NavBar))
