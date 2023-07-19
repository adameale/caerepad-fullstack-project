import { AssessmentOutlined, GradingOutlined, Inventory2Outlined, LineStyleOutlined, MailOutlineOutlined, ManageAccountsOutlined, MessageOutlined, PaidOutlined, Person2Outlined, ReportProblemOutlined, TimelineOutlined, TrendingUpOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
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
                 Home 
                </li>
                </Link>

                <li className="sidebarListItem">
                 <TimelineOutlined className='sidebarIcon'/>  
                 Analytics 
                </li>

                <li className="sidebarListItem ">
                 <TrendingUpOutlined className='sidebarIcon'/>  
                 Sales 
                </li>
            </ul>
        </div>
          
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link className='link' to="./users">
                <li className="sidebarListItem ">
                 <Person2Outlined className='sidebarIcon'/>  
                 Users 
                </li>
                </Link>

                <Link className='link' to="./products">
                <li className="sidebarListItem">
                 <Inventory2Outlined className='sidebarIcon'/>  
                 Products 
                </li>
                </Link>
                <li className="sidebarListItem ">
                 <PaidOutlined className='sidebarIcon'/>  
                Transactions
                </li>
                <li className="sidebarListItem ">
                 <AssessmentOutlined className='sidebarIcon'/>  
                Reports
                </li>

            </ul>
        </div>


        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                 <MailOutlineOutlined className='sidebarIcon'/>  
                 Mail 
                </li>

                <li className="sidebarListItem">
                 <GradingOutlined className='sidebarIcon'/>  
                 Feedback 
                </li>

                <li className="sidebarListItem ">
                 <MessageOutlined className='sidebarIcon'/>  
                 Messages 
                </li>
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                 <ManageAccountsOutlined className='sidebarIcon'/>  
                 Manage 
                </li>

                <li className="sidebarListItem">
                 <TimelineOutlined className='sidebarIcon'/>  
                 Analytics 
                </li>

                <li className="sidebarListItem ">
                 <ReportProblemOutlined className='sidebarIcon'/>  
                 Reports 
                </li>
            </ul>
        </div>


      </div>
    </div>
  )
}

export default Sidebar
