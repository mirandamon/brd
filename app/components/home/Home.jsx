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
            <h2>near __________</h2>
          </div>
        </div>
      </div>
    )
  }
}
