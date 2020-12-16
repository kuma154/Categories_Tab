import React from 'react'

const Categories = ({filterItem,categorys}) => {
    return (
        <div className='btn-container'>
            {/* <button className='filter-btn' onClick={()=>filterItem('all')}>all</button> */}
            {categorys.map((item,index)=>{
                return  <button className='filter-btn' key={index} onClick={()=>filterItem(item)}>{item}</button>
            })}
           
          
        </div>
    )
}

export default Categories
