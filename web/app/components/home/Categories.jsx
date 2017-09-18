import React from 'react'
import PropTypes from 'prop-types'

export default class Categories extends React.Component {
  constructor (props) {
    super(props)
    this.state = {categories: this.props.categories}
  }

  render () {
    return (
      <div className='categories'>
        {this.state.categories.map(category => {
          return (
            <div className='category' style={{color: category.color}} key={category.name}>
              <h3>{category.name}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.array
}
