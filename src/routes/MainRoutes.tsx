import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { HomePage, ViewGuide } from "../pages"

export const MainRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/guides/:guideId" element={<ViewGuide />} />
                <Route path="/*" element={<Navigate to="/" replace={true} />} />
            </Routes>
            <Footer />
        </>
    )
}
