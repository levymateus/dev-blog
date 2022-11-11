import AppBar from "@components/AppBar"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"

function Layout({ children }) {
  return <div className="container px-4 sm:px-0 mt-14 mx-auto">
    <AppBar />
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
}

export default Layout
