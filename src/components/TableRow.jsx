import React from 'react';

const TableRow = ({props}) => {
   console.log(props)
const {UserName,date,price,img}=props;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-24 h-24">
               {img &&  <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
           
          </div>
        </td>
        <td>
         
          <br/>
          <span className="badge badge-ghost badge-sm">{UserName}</span>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default TableRow;