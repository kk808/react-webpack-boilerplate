import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({ text }) => {
  return (
    <div className='panel' data-testid='panel'>
      {text}
    </div>
  )
}

Panel.propTypes = {
  text: PropTypes.string.isRequired
}

export default Panel
