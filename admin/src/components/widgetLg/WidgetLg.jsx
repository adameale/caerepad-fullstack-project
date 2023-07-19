import React from 'react'
import "./widgetLg.css"
function WidgetLg() {
    const Button=({type})=>{
        return <button className={"widgetLgButton" +type}>{type}</button>
    };
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>

        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://yt3.ggpht.com/L2MYuBmcISkexIfK36mi1is9VSt7aYwHQMUlHOA381yAHF0IuQJcaHmH8U0hDWMexWrcP83ADA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="widgetLgImg" />
                <span className="widgetLgL">Aderajew Awoke</span>
            </td>
            <td className="widgetLgDate">13 july 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>

        </tr>
         
        <tr className="widgetLgTr">
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>

        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://yt3.ggpht.com/L2MYuBmcISkexIfK36mi1is9VSt7aYwHQMUlHOA381yAHF0IuQJcaHmH8U0hDWMexWrcP83ADA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="widgetLgImg" />
                <span className="widgetLgL">Aderajew Awoke</span>
            </td>
            <td className="widgetLgDate">13 july 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>

        </tr>

        <tr className="widgetLgTr">
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>

        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://yt3.ggpht.com/L2MYuBmcISkexIfK36mi1is9VSt7aYwHQMUlHOA381yAHF0IuQJcaHmH8U0hDWMexWrcP83ADA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Aderajew Awoke</span>
            </td>
            <td className="widgetLgDate">13 july 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>

        </tr>

        <tr className="widgetLgTr">
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>
            <th className="widgetLgTh"></th>

        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://yt3.ggpht.com/L2MYuBmcISkexIfK36mi1is9VSt7aYwHQMUlHOA381yAHF0IuQJcaHmH8U0hDWMexWrcP83ADA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Aderajew Awoke</span>
            </td>
            <td className="widgetLgDate">13 july 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>

        </tr>

      </table>
    </div>
  )
}

export default WidgetLg
