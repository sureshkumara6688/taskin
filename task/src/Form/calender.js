import React,{useState} from 'react'
import Calendar from 'react-calendar';
function Caleander() {
    const [value, onChange] = useState(new Date());
    return (
        <>
         <div>
      <Calendar onChange={onChange} value={value} />
    </div>
        </>
    )
}

export default Caleander






// import React, { useState } from 'react'

// function Form() {
//     //     const [val, setVal] = useState([{ tast: "sureshh",isDone:false }])
//     //     const [error, setError] = useState([{ tast: "",isDone:"" }])
//     //     const handlechange = (e) => {
//     //         const { name, value } = e.target;
//     //         setVal((prev) => {
//     //             return { ...prev, [name]: value }
//     //         })
//     //     }
//     //    const handlesumbit=(e)=>{
//     //     e.preventDefault();
//     //    }
//     //     console.log(val)
//     const arr = [{ id: 1, name: 'Shubham' }, { id: 3, name: 'Vikas' }, { id: 2, name: 'Akshay' }, { id: 4, name: 'Surendra' }]
//     function removeDuplicateObject (arr) {
//         let temp = arr.map((item) => {
//           return JSON.parse(item);
//         });
//         console.log(temp)
//         // temp = Array.from(new Set(temp));
//         // return temp.map((item) => {
//         //   return JSON.parse(item);
//         // });
//       }
//     // const removed = arr.splice(i,1)
//     // const mapped = removed.map((item, index) => {
//     //     return <ul key={index}>
//     //         <li> {item.id}{item.name}</li>

//     //     </ul>
//     // })
   
//     console.log(removeDuplicateObject (arr))

//     return (
//         <>

//             {/* <form onSubmit={handlesumbit}>
//                 <label>name</label>
//                 <input type='text' onChange={handlechange} value={val.tast} name='tast' />
//               {error.task? <h1>enter task</h1>:null }
//                 <button type='sumbit' >add</button>
              
//             </form>

//             <div>
//                 <div>
//                     {val?.length > 0 && val?.map((item, index) => {
//                         return (
//                             <div key={index} style={{height:"100px",width:"auto",background:"" ,color:"black"}}>
//                                 {item.task}
//                                 <ul>{item.tast}</ul>
//                             </div>
                      
//                         )
//                     })}
//                 </div>
//             </div> */}
//         </>

//     )
// }

// export default Form
