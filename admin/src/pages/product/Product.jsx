import { Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'recharts'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import "./product.css"
function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className="productTitle">product pad</h1>
        <Link to='/newProduct'>
        <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className="productTop">
      <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales" title="Sales Performance"  />
         <Tooltip/>
         

      </div>
      <div className="productTopRight">
        <div className="productInfoTop">
         <img className="productInfoImg"  src="data:image/jpeg;base64,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" alt="" />
         <span className="productName">Pad</span>
        </div>
        <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>

            </div>

            
            <div className="productInfoItem">
                <span className="productInfoKey">Sales:</span>
                <span className="productInfoValue">5123</span>

            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>

            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">In stock:</span>
                <span className="productInfoValue">no</span>
            </div>
        </div>
      </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder='pad' />
                <label>In Stock</label>
                <select name='inStock' id='inStock'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
                <label>Active</label>
                <select name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img className="productUploadImg" src="data:image/jpeg;base64,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" alt=""  />
                    <label for="file">
                        <Publish/>
                    </label>
                    <input type="file" id='file' style={{display:"none"}}/>
                </div>
                <button className="productButton">Update</button>
            </div>

        </form>
      </div>
       
    </div>
  )
}

export default Product
