
import MyNav from "./components/MyNav.jsx/MyNav"
import Welcome from "./components/Welcome/Welcome"
import AllTheBooks from "./components/AllTheBooks/AllTheBooks"
import MyFooter from "./components/MyFooter.jsx/MyFooter"
import "./App.css"

const App = () => {
  return (
    <div className="app-wrapper">
      <MyNav />

      <main className="main-content">
        <Welcome />

        <AllTheBooks />
      </main>

      <MyFooter />
    </div>
  )
}

export default App
