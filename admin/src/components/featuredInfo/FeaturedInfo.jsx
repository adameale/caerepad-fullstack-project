import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'
import React from 'react'
import "./featuredInfo.css"
function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4
            <ArrowDownwardOutlined className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
        
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">-1.4
            <ArrowDownwardOutlined  className='featuredIcon negative'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
       
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,215</span>
            <span className="featuredMoneyRate">+2.4
            <ArrowUpwardOutlined className='featuredIcon'/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

    </div>
  )
}

export default FeaturedInfo
