import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = { 
  className : ''
}

function CardView(props) {
    const classList = 'shadow bg-white overflow-hidden border-b border-gray-200 rounded-md p-2'
    return (
        <div className={ classList +' '+ props.className }>
            { props && props?.children }
        </div>
    )
}

CardView.defaultProps = defaultProps;
CardView.propTypes = {
    className : PropTypes.string,
    children : PropTypes.any
}
export default CardView
