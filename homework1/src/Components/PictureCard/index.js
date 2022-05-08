import React,{useState} from 'react'
import "./Style.css"

export default function PictureCard() {

  const[like,setlike] = useState({
   
  }
  )
  const [comment,setcomment] = useState({
    
  })

  const Card = [
    {
      id : "01",
      imgSrc : "https://picsum.photos/200/200",
      createBy : "Mew",
      likeCount : 1,
      commentCount : 2
    },
    {
      id : "02",
      imgSrc : "https://picsum.photos/200/201",
      createBy : "Thun",
      likeCount : 2,
      commentCount : 3
    },
    {
      id : "03",
      imgSrc : "https://picsum.photos/200/202",
      createBy : "Tan",
      likeCount : 4,
      commentCount : 5
    },
    {
      id : "04",
      imgSrc : "https://picsum.photos/200/203",
      createBy : "IO",
      likeCount : 6,
      commentCount : 1
    }
   
  ]
  const list = Card.map(x=><div className='grid-item'><img src={x.imgSrc} id={x.id}></img> <h3>createBy : {x.createBy}</h3><p>Like : {x.likeCount}</p>
  <p>Comment : {x.commentCount}</p></div>)

  return (
    <div className='PictureCard'>{list}</div>
  )
}
