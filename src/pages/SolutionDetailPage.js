import AboveFooter from "../components/AboveFooter";
import PageHero from "../components/PageHero";
import Solutions from "../components/Solutions";
import { useParams } from "react-router-dom";
import cameraIcon from "../assets/images/MaskGroupRed.png";

import residential from "../data/solutions/Residential.json";
import commercial from "../data/solutions/Commercial.json";
import institution from "../data/solutions/Institution.json";
import banking from "../data/solutions/Banking.json";
import industrial from "../data/solutions/Industrial.json";
import hospitality from "../data/solutions/Hospitality.json";
import SolutionsDetailLayout from "../components/SolutionsDetailLayout";

const solutionMap = {
    residential,
    commercial,
    institution,
    banking,
    industrial,
    hospitality
};
const SolutionDetailPage = () => {
    const { solutionName } = useParams();
    const data = solutionMap[solutionName?.toLowerCase()];

    if (!data) return <h2>Solution not found</h2>;
    return (
        <>
            <PageHero
                title={data.hero.title}
                breadcrumb={["Home", "Solutions", data.hero.title]}
                backgroundImage={data.hero.image}
            />
            <SolutionsDetailLayout data={data} />
            <AboveFooter />
        </>
    );
};

export default SolutionDetailPage;
