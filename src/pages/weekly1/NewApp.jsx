const arr = [1, 2, 3]
const person = [
  {
    id: 1,
    name: 'Tami',
    age: 29,
  },
  {
    id: 2,
    name: 'Eric',
    age: 30,
  },
  {
    id: 3,
    name: 'Leo',
    age: 27,
  },
]

function NewApp() {
  // js 核心很重要
  const sum = 100;
  const newArray = arr.map(item => {
    // console.log(item * 2)
    return item * 2
    // return <li key={item}>{item}</li>
  })

  console.log(newArray)

  return (<div style={{ fontWeight: '700' }}>
    元件{sum * 2}
    <ul>
      {/* map 可以建立新的陣列 */}
      {/* 方法一 */}
      {/* 實作上不建議使用 index ，非不得已才用 */}
      {arr.map((item, index) => <li key={index}>{item}</li>)}
      {/* 方法二 */}
      {arr.map((item, index) => { return <li key={index}>{item}</li> })}
      {/* 方法三 */}
      {/* {newArray} */}
    </ul>

    <hr />

    <ul>
      {/* 建議陣列物件裡面要有 id */}
      {person.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>

    <hr />

    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>年齡</th>
        </tr>
      </thead>
      <tbody>
        {/* forEach 不會回傳，map 才會回傳  key 是唯一值 => 程式識別用 */}
        {person.map(item => 
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>)}
      </tbody>
    </table>

    <hr />

    <div>
      <label htmlFor="name">名稱</label>
      <input type="text" id="name" />
    </div>

    <hr />

    {/* hook */}

    

  </div>)
}

export default NewApp