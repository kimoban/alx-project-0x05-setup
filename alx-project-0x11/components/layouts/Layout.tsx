import { BaseComponentProps } from "@/interfaces";
import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC<BaseComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;