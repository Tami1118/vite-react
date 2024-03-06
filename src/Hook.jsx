import {useState} from "react"

function ToDo() {
  // 基礎一
  // [值, 寫入的方法]
  const [a, setA] = useState(1)
  const handleA = () => {
    setA(a + 1)
    console.log(a)
  }

  // 基礎二
  const [text, setText] = useState('Tami') // 預設為 Tami
  const handleText = (event) => {
    console.log(event.target.value) // 輸入的值
    // react 要很熟事件參數
    setText(event.target.value)
  }

  return (
    // 回頭看 JS 核心
    <div>
      {/* 基礎一 */}
      <button onClick={handleA}>{a}</button>
      <hr />

      {/* 基礎二 */}
      <input type="text" value={text} onChange={handleText} />
      {text}
      <hr />

    </div>


    // React
    // text, setText
    // onChange... event... setText...

    // Vue
    // text
    // v-model="text"
  )
}

// document.getElementById('#btn').addEventListener('change', (event) => {
//   console.log(event)
// })

export default ToDo

