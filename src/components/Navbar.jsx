import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const Bar = styled.div`
background-color: white;
align-items: center;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0px 40px;
font-size: 30px;
border-bottom: 1px solid #DCDCDC:
margin-bottom: 60px;
height: 77px; 
` ;




class Navbar extends Component{
  render(){
    return (
      <Bar>
        <h3><FaInstagram /> | Instaclone</h3>
        <div>
          <FaSearch/>
          <input type="text"/>
        </div>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </Bar>
    );
  }
}

export default Navbar