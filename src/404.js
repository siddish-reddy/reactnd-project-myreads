import React from 'react'
function NoMatch({ location }) {
    return (
        <h3>
          No match for <code>{location.pathname}</code>
          Sorry, if you have entered the URL manually check typos.....
        </h3>
    );
  }
// 404 example: https://reacttraining.com/react-router/web/example/no-match
  export default NoMatch