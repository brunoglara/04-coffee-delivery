import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { LayoutContainer } from "./styles"


export const DefaultLayout = () => {
    return (
        <LayoutContainer>
            <Header />
            <main>
                {/* The content of the page will be rendered here */}
                <Outlet />
            </main>
        </LayoutContainer>
    )
}