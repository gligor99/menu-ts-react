import { useState } from "react"

import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
