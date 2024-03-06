import { useState } from "react"

const data = [
  {
    id: 1,
    todo: "雜貨整理",
    dueDate: "2023-12-31",
    completed: true
  },
  {
    id: 2,
    todo: "清潔打掃",
    dueDate: "2023-12-20",
    completed: false
  },
  {
    id: 3,
    todo: "營業結帳",
    dueDate: "2023-12-22",
    completed: true
  },
]

function ToDo() {
  const [todo, setTodo] = useState(data)

  // function handleTodo (event) {
  //   console.log(event.target.value)
  // }


  return (
    <table>
      <thead>
        <tr>
          <th>項目</th>
          <th>到期時間</th>
          <th>狀態</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.todo}</td>
              <td>{item.dueDate}</td>
              {/* {} 表達式 => 三元運算值 */}

              {/* 錯誤示範 */}
              {/* <td><button onClick={() => 
                setTodo(!item.completed)
                // set...請寫入完整的值
                }>{item.completed ? '是' : '否'}</button></td> */}

              {/* 更改第一個值 */}
              {/* <td><button onClick={() => {
                const newTodo = [...data] // 展開 ES6
                newTodo[0].completed = !newTodo[0].completed
                console.log(newTodo)

                // 如何改變特定位置值

              }}>{item.completed ? '是' : '否'}</button></td> */}

              {/* 改單一個值 */}
              <td><button onClick={() => {

                // 1
                // 簡單版
                // const newTodo = [...data]
                // newTodo.forEach((newItem) => {
                //   if(newItem.id === item.id){
                //     item.completed = !item.completed
                //     console.log(item.completed)
                //   }
                // })

                // 2
                // React 工程師版
                // 用 map 回傳新的一組陣列到 newTodo
                const newTodo = todo.map((newItem) => {
                  if(newItem.id === item.id){
                    newItem.completed = !newItem.completed
                    console.log(newItem.completed)
                  }
                  return newItem
                })

                // 3
                // 更精簡 => 惡夢(無法使用) 若結構複雜可能不適合用三元
                // const newTodo = todo.map((newItem) => {
                //   return newItem.id === item.id ? {...newItem, completed: !newItem.completed} : newItem
                // });


                setTodo(newTodo)
              }}>{item.completed ? '是' : '否'}</button></td>

              {/* <td><button onClick={handleTodo}>{item.completed ? '是' : '否'}</button></td> */}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


export default ToDo

