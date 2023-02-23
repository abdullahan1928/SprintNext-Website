import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Social from "./Social/Social"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Social /> 
            <main>{children}</main>
            <Footer />
        </>
    )   
}

export default Layout