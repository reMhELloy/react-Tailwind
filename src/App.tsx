import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Title } from './components/Title'
import { ThumbUp } from './components/ThumbUp'

const App: React.FC = () => {
  return (
    // Provider cho phép mọi component con truy cập store
    // Không cần truyền state qua props nhiều tầng
    <Provider store={store}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Redux Demo</h1>
        <Title />
        <ThumbUp />
      </div>
    </Provider>
  )
}

export default App