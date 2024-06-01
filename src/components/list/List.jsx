import { listData } from "../../lib/dummyData"
import "./list.scss"
import Card from "../card/Card"
function List() {
  return (
    <div className="list">
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List
