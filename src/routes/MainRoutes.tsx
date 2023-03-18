import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from "../ui/Header";
import { HomePage, ViewGuide, CharacterPage } from "../pages";

export const MainRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/guides/:guideId" element={<ViewGuide />} />
                <Route path="/characters" element={<CharacterPage />} />
                <Route path="/*" element={<Navigate to="/" replace={true} />} />
            </Routes>
            {/*  <Footer /> */}
        </>
    )
}
