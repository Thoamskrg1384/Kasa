import LayoutDefault from "../../layout/default";
import Banner from "../../components/banner"
import Gallery from "../../components/gallery"
import cliffs from "../../assets/images/cliffs.png"

export default function Home() {
    return <LayoutDefault>
            <Banner image={cliffs}>
                <span>Chez vous,</span> <span>partout et ailleurs</span>
            </Banner>
        <Gallery />
    
    </LayoutDefault>
}
