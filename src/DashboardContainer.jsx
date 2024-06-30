import { styled } from '@mui/material';
import { Card } from 'react-bootstrap';

/**
 * Styled components for dashboard page
 */
 export const MainBox = styled('div')({
  border: '1px solid black',
  width: '90vw',
  height: '90vh',
})

export const MainNavContainer = styled('div')({
  marginTop: '30px',
  display: 'flex',
  width: '100vw',
  flexDirection: 'row'
})

export const NavContainer = styled('div')({
  display: 'flex',
  width: '100vw',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'right',
  // columnGap: '50px'
  // marginRight: '50px',
  // marginLeft: '50px'
})

export const Divider = styled('div')({
  display: 'block',
  marginRight: '10px'
})

export const Footer = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '50px',
  backgroundColor: '#999999'
})

export const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  marginTop: '30vh',
  // marginRight: '50px',
  // marginLeft: '50px'
})

export const GamesContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})


// export default DashboardContainer



