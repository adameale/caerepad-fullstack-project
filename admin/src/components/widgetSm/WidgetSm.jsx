import { VisibilityOutlined } from '@mui/icons-material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { userRequest } from '../../requestMethod'
import "./widgetSm.css"
function WidgetSm() {
    // const [users,setUsers]=useState([])
    // useEffect(()=>{
        
    //     const getUsers= async ()=>{
    //         try{
    //         const res=await userRequest.get("users/?new=true")
    //         setUsers(res.data)
    //     }catch{
            
    //     }
    //     }
    //     getUsers()
    // },[])
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">new Join Member</span>
        <ul className="widgetSmList">
            {/* {users.map((user)=>( */}
       
       <li className="widgetSmListItem">
                <img alt="" className="widgetSmImg"  src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Asheft Debeb</span>
                    <span className="widgetSmUserTitle">Electrical engineering</span>

                </div>
                <button className="widgetSmButton">
                  <VisibilityOutlined className='widgetSmIcon'/> 
                   Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img alt="" className="widgetSmImg"  src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Asheft Debeb</span>
                    <span className="widgetSmUserTitle">Electrical engineering</span>

                </div>
                <button className="widgetSmButton">
                  <VisibilityOutlined className='widgetSmIcon'/> 
                   Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img alt="" className="widgetSmImg"  src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Asheft Debeb</span>
                    <span className="widgetSmUserTitle">Electrical engineering</span>

                </div>
                <button className="widgetSmButton">
                  <VisibilityOutlined className='widgetSmIcon'/> 
                   Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img alt="" className="widgetSmImg"  src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Asheft Debeb</span>
                    <span className="widgetSmUserTitle">Electrical engineering</span>

                </div>
                <button className="widgetSmButton">
                  <VisibilityOutlined className='widgetSmIcon'/> 
                   Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img alt="" className="widgetSmImg"  src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Asheft Debeb</span>
                    <span className="widgetSmUserTitle">Electrical engineering</span>

                </div>
                <button className="widgetSmButton">
                  <VisibilityOutlined className='widgetSmIcon'/> 
                   Display
                </button>
            </li>

{/* ))} */}


        </ul>
    </div>
  )
}

export default WidgetSm
