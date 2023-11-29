import { Outlet } from 'react-router'
import Footer from 'components/footer/Footer'

export default function FooterLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}
