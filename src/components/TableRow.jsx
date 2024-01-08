import React from 'react';

const TableRow = ({ props,handleDelete,handleConfirm }) => {
  console.log(props)
  const { UserName, price, img,_id ,status} = props;

  return (
    <tr>
      <th>
        <button className="btn btn-circle btn-sm btn-outline" onClick={()=>handleDelete(_id)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 h-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>

        </div>
      </td>
      <td>

        <br />
        <span className="badge badge-ghost badge-sm">{UserName}</span>
      </td>
      <td>{price}</td>
      <th>{status?<button className='btn'>Confirmed</button>:
        <button className="btn btn-ghost btn-xs" onClick={()=>handleConfirm(_id)}>confirm</button>}
      </th>
    </tr>
  );
};

export default TableRow;