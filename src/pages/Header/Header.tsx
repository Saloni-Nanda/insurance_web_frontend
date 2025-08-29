import Navbar from "../../components/Navbar/Navbar"
import Top from "../../components/Top/Top"

const Header = () => {
  return (
    <div className="top-0 left-0 right-0 fixed  z-50">
         <Top/>
      <Navbar/>
     
      </div>
  )
}

export default Header
