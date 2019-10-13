import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
 <div style={{ backgroundColor: 'orange' }}>
   <div style={{ 
     display: 'flex', 
     flexDirection: 'row', 
     justifyContent: 'space-between',
     margin: '0 auto',
     maxWidth: 960,
     padding: '0.75 rem'
    }}>
     <h1 style={{flex: 2, marginBottom: '0.25 rem' }}><Link to="/">{ siteTitle }</Link></h1>
     <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', alignContent: 'baseline'}}>
     <h2 style={{ flex: 1}}>Bar</h2>
     <h2 style={{ flex: 1}}>Bar</h2>
     <h2 style={{ flex: 1}}>Bar</h2>
     </div>
   </div>
 </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
