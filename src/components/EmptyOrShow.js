import React from 'react'
import Loader from '../Loader';

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

export default EmptyOrShow;