import { Routes, Route, Navigate, useParams } from "react-router-dom"
import { Header } from "../ui/Header";
import { HomePage, ViewGuide, CharacterPage } from "../pages";
import { Preloader } from "../ui/components/Preloader";

export const MainRoutes = () => {


    return (
        <>
            <Preloader />
            <Header />
            <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/guides/:guideId" element={<ViewGuide />} />
                <Route path="/*" element={<Navigate to="/" replace={true} />} />
            </Routes>
        </>
    )
}
