import React from 'react'
import Loader from '../Loader';
import PropTypes from 'prop-types'


const EmptyOrShow = ({
  loading = false,
  children
}) => {

  return (
    <div>
      {loading && <Loader />}
      {!loading && children}
    
    </div>
  )
}

EmptyOrShow.PropType = {
  loading: PropTypes.bool.isRequired,
}

export default EmptyOrShow;