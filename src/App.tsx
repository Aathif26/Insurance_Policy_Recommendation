import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./Pages/Home"))
const Insurance = lazy(() => import("./Pages/Insurance/InsuranceTabs"))

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index element={<Home />}/>
        <Route path={"insuranceform"} element={<Insurance />}/>
      </Routes>
    </Suspense>
  )
}

export default App
