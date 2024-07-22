import React from 'react'
import './Menus.css'
import profile from '../../images/profile.png';
import { FcAbout, FcHome,  FcBiotech, FcPositiveDynamic , FcContacts  } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
        <div className="navbar-profile-pic">
          <img src={profile} alt="profile pic" />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <FcHome />
              Home
            </div>
            <div className="nav-link">
              <FcAbout />
              About
            </div>
            <div className="nav-link">
             <FcBiotech />
              Skills
            </div>
            <div className="nav-link">
             <FcPositiveDynamic />
              Projects
            </div>
            <div className="nav-link">
             <TbBrandGithubFilled />
             Github Stats
            </div>
            <div className="nav-link">
              <FcContacts />
              Contact
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
      <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <FcHome title='Home'/>
            </div>
            <div className="nav-link">
              <FcAbout title='About' />
            </div>
            <div className="nav-link">
             <FcBiotech title='skills' />
            </div>
            <div className="nav-link">
             <FcPositiveDynamic title='Projects' />
            </div>
            <div className="nav-link">
             <TbBrandGithubFilled title='Github Stats' />
            </div>
            <div className="nav-link">
              <FcContacts title='Contact' />
            </div>
          </div>
        </div>
      </>
    )}
    </>
  )
}

export default Menus
