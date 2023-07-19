import React from 'react'
import {LanguageOutlined, NotificationsNoneOutlined as NotificationsNoneOutlinedIcon, SettingsOutlined} from '@mui/icons-material';
import "./Topbar.css"

function Topbar() {
  return (
    
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className="logo">carepadadmin</span>
        </div>
        <div className='topRight'>
          <div className="topbarIconContainer">
        <NotificationsNoneOutlinedIcon/>
        <span className='topIconBage'>2</span>
            </div>
              <div className="topbarIconContainer">
        <LanguageOutlined/>
            </div>
              <div className="topbarIconContainer">
        <SettingsOutlined/>
        </div>
        <img className='topAvatar' src="https://yt3.ggpht.com/L2MYuBmcISkexIfK36mi1is9VSt7aYwHQMUlHOA381yAHF0IuQJcaHmH8U0hDWMexWrcP83ADA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            </div>
      </div>

    </div>
  )
}

export default Topbar
