import {useState} from "react"



function App() {
  const [ToDoList,setToDolist] = useState(
    [{
      Content : "String",
      Date : Date()
    }]
  )
    
    const remove = (target)=>{
      let data = [...ToDoList]
      // console.log(target)
      data.splice(target,1)
      // console.log(data)
      setToDolist(data)
    }
    const handle = (e)=>{
      if(e.key === "Enter"){
        if(e.target.value !== ''){
          // alert("Hello")
          const newData = e.target.value
          let data = [...ToDoList]
          data.push({Content : newData , Date: Date()})
          // const data = ToDoList.map()
          // data[data.length].Content = e.target.value
        //   console.log(data.length)
        console.log(data)
        setToDolist(data)
        }
        
      }
    }
  return (
    <>
    {ToDoList.map((x,i)=>(<div key={x.Date}><h1>{x.Content}</h1>
    <h1>{x.Date}</h1>
    <button onClick={()=>{
      remove(i)
    }}>Remove</button></div>
    )
      
    )}
    <input onKeyPress={(e)=>{
      handle(e)
    }} type="text" />
    </>
  );

}

export default App;
