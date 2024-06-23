import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import {
  IconLayoutDashboard,
  IconFolders,
  IconLayoutSidebarInactive,
  IconPresentationAnalytics,
  IconRefresh,
  IconBrandHipchat,
  IconBriefcase,
  IconMail,
  IconTransfer,
  IconSettings,
} from "@tabler/icons-react";
import Productsidebar from "../ProductSide/Productsidebar";
import Header from "../header/Header";

const Navbar = () => {

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [showAsideSection, setShowAsideSection] = useState(true);
  
  const toggleAsideSection = (e) => {
    setShowAsideSection(!showAsideSection);
  }

  useEffect(() => {
    if(isMobile) setShowAsideSection(false);
    else setShowAsideSection(true);
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div style={{width:"20%"}}> 
      <span style={{fontSize:"1.8rem",marginBottom:"1rem",marginTop:"0.5rem",marginLeft:"1rem",color:"orange", fontWeight:"bold" , fontStyle:"italic"}} onClick={()=> toggleAsideSection()}>
        CRM.io
      </span>
      {showAsideSection && 
          <ul className="sidenav" style={{textAlign:"left", display:"flex",flexDirection:"column"}}>
          <li>
            <a className="active" href="#dashboard" style={{ display: 'flex', alignItems: 'center' }}>
              <IconLayoutDashboard style={{ marginRight: '8px' }}/>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" style={{marginTop:"1rem",marginBottom:"1rem"}}>Management</a>
          </li>
          <li>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <IconFolders  style={{ marginRight: '8px' }}  />
              Document
            </a>
          </li>
          <li>
            <a href="# " style={{ display: 'flex', alignItems: 'center' }}>
              <IconLayoutSidebarInactive  style={{ marginRight: '8px' }}/>
              Contact
            </a>
          </li>
          <li>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <IconPresentationAnalytics  style={{ marginRight: '8px' }}/>
              Prospect
            </a>
          </li>
          <li>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <IconRefresh  />
              Workflow
            </a>
          </li>
          <li>
            <a href="#" style={{marginTop:"1rem",marginBottom:"1rem"}}>
              Connection
            </a>
          </li>
          <li>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <IconBrandHipchat  style={{ marginRight: '8px' }}/> Chat Intigration
            </a>
          </li>
          <li>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <IconBriefcase  style={{ marginRight: '8px' }}/>
              Marketing Automation
            </a>
          </li>
          <li>
            <a href="#"style={{ display: 'flex', alignItems: 'center' }}>
              <IconMail  style={{ marginRight: '8px' }} />
              Email Intigration
            </a>
          </li>
          <li>
            <a href="#" style={{marginTop:"1rem",marginBottom:"1rem"}}>Customer</a>
          </li>
          <li>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <IconTransfer  style={{ marginRight: '8px' }} />
              Transaction
            </a>
          </li>
          <li>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <IconSettings style={{ marginRight: '8px' }} />
              Maintenance
            </a>
          </li>
        </ul>
      }
      </div>
      <div style={{width:"60%"}}>
        <Header/>
      </div>
      <div style={{width:"20%"}}>
      <Productsidebar />
      </div>
    </div>
  );
};

export default Navbar;
