import React, { useState, useEffect } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import DashboardNavbar from './Navbar';
// import { Footer } from './DashboardContainer';
// import { Box, StyledInput, BoxContainer, GamesContainer, Button } from './BlankoContainers';
// import SquareBoxes from './Boxes';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { CardContainer, DashboardContainer } from '../Components/DashboardContainers';

function Works () {
  // const [isMobile, setIsMobile] = useState(false);
  // const [counter, setCounter] = useState(0)
  // const [randomString, setRandomString] = useState('')
  // const [inputIndices, setInputIndices] = useState([])

  // useEffect(() => {
  //   // Define an array of 7 strings
  //   const strings = [
  //     'the fat cats',
  //     'larger frogs',
  //     'banana cakes',
  //     'unsw vs usyd',
  //     'french toast',
  //     'hawaii pizza',
  //     'barack obama',
  //   ];

  //   // Randomly choose one string
  //   const randomIndex = Math.floor(Math.random() * strings.length);
  //   const randomString = strings[randomIndex];
  //   setRandomString(randomString);

  //   // Create an array to hold indices of non-space characters
  //   const nonSpaceIndices = [];
  //   for (let i = 0; i < randomString.length; i++) {
  //     if (randomString[i] !== ' ') {
  //       nonSpaceIndices.push(i);
  //     }
  //   }

  //   // Randomly select three indices
  //   const selectedIndices = [];
  //   while (selectedIndices.length < 3) {
  //     const randomIndex = Math.floor(Math.random() * nonSpaceIndices.length);
  //     const index = nonSpaceIndices[randomIndex];
  //     if (!selectedIndices.includes(index)) {
  //       selectedIndices.push(index);
  //     }
  //   }
  //   console.log("selected indices are ", selectedIndices)
  //   setInputIndices(selectedIndices);
  // }, []);


  // const handleInputChange = (e, index) => {
  //   // Update the randomString with the new character
  //   const newString = randomString.substring(0, index) + e.target.value + randomString.substring(index + 1);
  //   setRandomString(newString);
  // }

  // useEffect(() => {
  //   const fetchInitialCounter = async () => {
  //     try {
  //       const response = await axios.post('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json', {});
  //       setCounter(response.data.score);
  //     } catch (error) {
  //       console.error('Error fetching initial counter:', error);
  //     }
  //   };

  //   fetchInitialCounter();
  // }, []);

  // const reset = async () => {
  //   try {
  //     const response = await axios.post('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json', {});
  //     console.log("response score ", response.score)
  //     setCounter(response.score)
  //   } catch (err) {
  //     if (err) {
  //       alert(err.response?.data?.error || 'Error resetting counter');
  //     } 
  //   }

  //   console.log("reset clicked")
  //   setCounter(0)
  // }
  // const logout = async () => {
  //   try {
  //     await axios.post('http://localhost:5005/admin/auth/logout', {}, {
  //       headers: {
  //         Authorization: token,
  //       }
  //     });
  //     const store = JSON.parse(localStorage.getItem('store'));
  //     await axios.put('http://localhost:5005/store', { store }, {
  //       headers: {
  //         Authorization: token,
  //       }
  //     });
  //     setToken(null);
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('store');
  //   } catch (err) {
  //     alert(err.response.data.error);
  //   }
  // }

  // const [store, setStore] = React.useState(() => {
  //   const storedStore = localStorage.getItem('store');
  //   return storedStore ? JSON.parse(storedStore) : { presentations: [] };
  // });

  // const [presentations, setPresentations] = useState([]);
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   localStorage.setItem('store', JSON.stringify(store));
  //   setPresentations(store.presentations);
  // }, [store]);

  // if (token === null) {
  //   return <Navigate to="/login" />;
  // }

  // console.log("inpout indces", inputIndices)
  return (
    <>
      {/* <DashboardNavbar token={token} setToken={setToken}/>
        <GamesContainer>
          <BoxContainer>
              {randomString.split('').map((char, index) => {
                    console.log('Index:', index); // Add this line to observe the index values
                    console.log(inputIndices.includes(index))
                    return (
                      <StyledInput 
                        key={index}
                        type="text"
                        value={char}
                        onChange={(e) => handleInputChange(e, index)}
                        // readOnly={!inputIndices.includes(index)} // Set input fields to readOnly if not in inputIndices
                      />
                    );
              })}
          </BoxContainer>
          <Button onClick={reset}>Reset game</Button>
        </GamesContainer>
      <Footer></Footer> */}
    </>
);

}

export default Works;
