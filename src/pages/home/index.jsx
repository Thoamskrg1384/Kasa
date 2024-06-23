import LayoutDefault from "../../layout/default";
import Banner from "../../components/banner"
import Gallery from "../../components/gallery"
import cliffs from "../../assets/images/cliffs.png"

export default function Home() {
    return <LayoutDefault>
            <Banner title={"Chez vous, partout et ailleurs"} image={cliffs}/>
        <Gallery />
    </LayoutDefault>
}
