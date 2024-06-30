import { styled } from '@mui/material';
import { Card } from 'react-bootstrap';

/**
 * Styled components for dashboard page
 */

export const MainNavContainer = styled('div')({
  display: 'flex',
  width: '100vw',
  flexDirection: 'row'
})

export const NavContainer = styled('div')({
  display: 'flex',
  width: '100vw',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'right'
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
  flexDirection: 'column',
  marginTop: '30vh',
  alignItems: 'center',
  justifyItems: 'center',
  alignContent: 'center',
  justifyContent: 'center'
})

export const BoxContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row', // Set to colum
  alignItems: 'center',
  justifyItems: 'center',
  alignContent: 'center',
  justifyContent: 'center'
})

export const Box = styled('div')({
  width: '50px',
  height: '50px',
  border: '1px solid #ccc',
  backgroundColor: 'white'
})

export const StyledInput = styled('input')({
  width: '50px',
  height: '50px',
  border: '1px solid #ccc',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: '50px' // Vertically center the text
  // backgroundColor: 'white'
})

export const Button = styled('button')({
  width: '120px',
  marginTop: '10px'
  // height: ''
})


// export default DashboardContainer



