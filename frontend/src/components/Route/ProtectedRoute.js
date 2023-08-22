import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  return (
    <Fragment>
      <Route 
        {...rest}
        render={(props) => {
          if (isAuthenticated === false) {
            return <redirect to='/signin' />
          }
          
          if(isAdmin === true && user.role !== 'admin') {
            return <redirect to='/' />
          }

          return <Component {...props} />
        }}
      />
    </Fragment>
  )
}

export default ProtectedRoute