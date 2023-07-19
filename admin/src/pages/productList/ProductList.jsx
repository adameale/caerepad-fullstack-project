import React from 'react'
import "./productList.css"
import  { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import {productsRows}  from '../../dummyData'
import { Link } from 'react-router-dom';
function ProductList() {
    const [proData,setProData]=useState(productsRows)
    const handleDelete=(id)=>{
        setProData(proData.filter((item)=>item.id !==id))
      }

      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { 
            field: 'product', headerName: 'Product', width: 150, renderCell:(params)=>{
           return(
            <div className="productListItem">
                <img className='productListImg' src={params.row.img} alt="" />
                {params.row.name}
            </div>
           )
        }},
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'price',
            width: 160,
          },

          {
            field: 'action',
            headerName: 'Action',
            width: 150, renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/product/"+params.row.id}>
                <button className='ProductListEdit'>Edit</button>
                </Link>
                <DeleteOutlined className='ProductListDelete' onClick={()=>handleDelete(params.row.id)}/>
                </>
                )
            }
          }
      ];
  return (
    <div className='productList'>
       <DataGrid disableRowSelectionOnClick
        rows={proData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList
