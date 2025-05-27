import React, {useState} from 'react'
import datas from './datas.json'

const Data = () => {

    const [nDAta, setData] = useState(datas);
    console.log(datas[0].age);

    const handleRemove = (itemId) =>{
        // Logic to remove an item from nDAta
        // This function should update the state to remove the item
        // For example, you can filter out the item you want to remove
        // setData(nDAta.filter(item => item.id !== idToRemove));
        setData(nDAta.filter(item => item.id !== itemId));
    }

    const handleUPdate =(itemId) => {
        // Logic to update an item in nDAta
        // This function should update the state to modify the item
        // For example, you can find the item by id and update its properties
        setData(nDAta.map(item => {
            if (item.id === itemId){
                return {...item,name: "newName"}
            }
            else{
              return item;
            }
        }))
    }
  return (
    <div>
      <ul>
        {nDAta.map(items =>
        <li key = {items.id}>
            {items.id} {items.name} 
            <button onClick={() => handleRemove(items.id)}>Remove</button>
            <button onClick={() => handleUPdate(items.id)}>Update</button>
        </li>)}
      </ul>

      <button onClick={() => setData([])}>Click</button>
    </div>
  )
}

export default Data
