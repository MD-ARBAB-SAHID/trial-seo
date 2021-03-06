import Styles from "./Block.module.css"
const Block = (props)=>{
   return( <div className={`${Styles.block} ${props.className}`}>
    <div className={Styles.heading}>
      <h2>{props.title}</h2>
    </div>
    <div className={Styles.description}>
    {
      props.description.map((content,index)=>{
        return (
          <p key={index}>
            {content}
          </p>
        )
      })
    }
    </div>
  </div>
   )
}

export default Block;