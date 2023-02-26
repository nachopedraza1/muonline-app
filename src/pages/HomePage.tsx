import { Banner } from "../components/Banner"
import { TimmerEvent } from "../components/TimmerEvent"
import { Header } from "../ui/Header"

export const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <TimmerEvent />
        </>
    )
}

