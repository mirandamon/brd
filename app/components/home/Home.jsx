import React from 'react'
import Categories from './Categories'

const categories = [{name: 'housing', color: 'palevioletred'},
  {name: 'jobs', color: 'goldenrod'},
  {name: 'community', color: 'palegoldenrod'},
  {name: 'for sale', color: 'palegreen'},
  {name: 'gigs', color: 'turquoise'},
  {name: 'personals', color: 'lightcoral'},
  {name: 'services', color: 'chocolate'},
  {name: 'resumes', color: 'cornflowerblue'}]

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: ''
    }
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let longitude = position.coords.longitude
        let latitude = position.coords.latitude
        const geocoder = new google.maps.Geocoder
        let latlng = {lat: latitude, lng: longitude}
        geocoder.geocode({location: latlng}, function (results, status) {
          if (status === 'OK') {
            console.log(results[0].address_components[2].long_name)
            this.setState({location: results[0].address_components[2].long_name})
          }
        }.bind(this))
      })
    }
  }

  render () {
    return (
      <div className='homeBg'>
        <div className='greyTint'>
          <div className='mainText'>
            <h1>I am looking for</h1>
          </div>
          <div className='flex-container'>
            <Categories categories={categories} />
          </div>
          <div className='secondaryText'>
            <h2>near <span style={{textDecoration: 'underline'}}>{this.state.location}</span></h2>
          </div>
        </div>
        <div className='whatsNew'>
          
        </div>
      </div>
    )
  }
}
