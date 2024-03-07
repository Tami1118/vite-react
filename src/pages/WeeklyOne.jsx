import { useState } from "react"

const data = [
  {
    id: 1,
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    num: 19,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    num: 20,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    num: 21,
  },
  {
    id: 4,
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    num: 22,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    num: 23,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    num: 24,
  },
  {
    id: 7,
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    num: 25,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    num: 26,
  }
]

// const arr = [1, 2, 3]

function WeeklyOne() {
  const [products, setProduct] = useState(data)
  // const [num, setNum] = useState(100)
  // const productNum = (product) => {
  //   const result = products.map(newItem => {
  //     if (newItem.id === product.id) {
  //       return { ...newItem, num: newItem.num + 1 }
  //     }
  //     return newItem
  //   })
  //   setProduct(result)
  // }

  const productNum = (product, config) => {
    const result = products.map(newItem => {
      if(newItem.id === product.id){
        return config === 'add'? {...newItem, num: newItem.num + 1}:{...newItem, num: newItem.num - 1}
      }
      return newItem
    })
    setProduct(result)
  }

  return <div className="container">
    {products.map(item => <div key={item.id}>
      {item.num}
      <button onClick={() => productNum(item, 'add')}>+</button>
      <button onClick={() => productNum(item, 'remove')}>-</button>
    </div>)}
    {/* <button onClick={() => setNum(num+100)}>+100</button> */}
    {/* <table className="table table-hover align-middle">
      <thead>
        <tr>
          <th>名稱</th>
          <th>介紹</th>
          <th>價格</th>
          <th>數量</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item =>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
              <div className="btn-group">
                {item.num}
                <button type="button" onClick={() => {
                const arr = products.map (newItem => {
                  if(newItem.id === item.id){
                    return {...newItem, num: newItem.num + 1}
                  }
                  return newItem
                })
                setProduct(arr)
              }}>+</button>
              </div>
            </td>
          </tr>)}
      </tbody>
    </table> */}
  </div>
}

export default WeeklyOne