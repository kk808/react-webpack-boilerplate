import React from 'react'
import PropTypes from 'prop-types'
import styles from './Panel.module.less'

const Panel = ({ text }) => {
  return (
    <div data-testid='panel' className={styles.panel}>
      {text}
    </div>
  )
}

Panel.propTypes = {
  text: PropTypes.string.isRequired
}

export default Panel
