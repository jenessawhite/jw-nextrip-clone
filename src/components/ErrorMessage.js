import React from 'react'

const ErrorMessage = (props) => {
  return (
    <div data-testid='error'>
      <p>
        Sorry, it looks like something went wrong! Please try your request
        again.
      </p>
    </div>
  )
}

export default ErrorMessage
