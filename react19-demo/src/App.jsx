import { Suspense } from "react";
import './App.css'
// import Posts from "./components/api-fetch";
import PostsReact19 from "./components/api-fetch-react-19";

function App() {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <h2>use() API</h2>

        {/* <Posts /> */}
        <PostsReact19 />
      </div>
    </Suspense>
  )
}

export default App