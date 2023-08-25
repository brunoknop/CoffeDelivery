import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './Pages/Home'
import { Cart } from './Pages/Cart'
import { Success } from './Pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Success" element={<Success />} />
      </Route>
    </Routes>
  )
}
