import { AssessmentOutlined, GradingOutlined, Inventory2Outlined, LineStyleOutlined, MailOutlineOutlined, ManageAccountsOutlined, MessageOutlined, PaidOutlined, Person2Outlined, ReportProblemOutlined, TimelineOutlined, TrendingUpOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link  className='link' to="/" >
                <li className="sidebarListItem active">
                 <LineStyleOutlined className='sidebarIcon'/>
                 <span className='ListItemTitle'>Home</span>
                 
                </li>
                </Link>

                <li className="sidebarListItem">
                 <TimelineOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Analytics</span> 
                </li>

                <li className="sidebarListItem ">
                 <TrendingUpOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Sales</span>
                </li>
            </ul>
        </div>
          
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link className='link' to="./users">
                <li className="sidebarListItem ">
                 <Person2Outlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Users</span> 
                </li>
                </Link>

                <Link className='link' to="./products">
                <li className="sidebarListItem">
                 <Inventory2Outlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Products</span>
                </li>
                </Link>
                <li className="sidebarListItem ">
                 <PaidOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Transactions</span>
                </li>
                <li className="sidebarListItem ">
                 <AssessmentOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Reports</span>
                </li>

            </ul>
        </div>


        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                 <MailOutlineOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>MAil</span>
                </li>

                <li className="sidebarListItem">
                 <GradingOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Feedback</span>
                </li>

                <li className="sidebarListItem ">
                 <MessageOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Message</span> 
                </li>
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                 <ManageAccountsOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Manage</span> 
                </li>

                <li className="sidebarListItem">
                 <TimelineOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Analytics</span> 
                </li>

                <li className="sidebarListItem ">
                 <ReportProblemOutlined className='sidebarIcon'/>  
                 <span className='ListItemTitle'>Reports</span> 
                </li>
            </ul>
        </div>


      </div>
    </div>
  )
}

export default Sidebar
