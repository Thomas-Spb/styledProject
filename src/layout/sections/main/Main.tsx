import styled from "styled-components";
import mainPhoto from '../../../assets/images/mainPhoto.png'
import FlexWrapper from "../../../components/FlexWrapper.tsx";

const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>
                <div>
                    <span>Hello, i’m</span>
                    <span>Jayjay D. Dinero</span>
                    <h1>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</h1>
                    <button>About me</button>
                    <button>Projects</button>
                </div>
                <Image src={mainPhoto } alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

export default Main;

const StyledMain = styled.main`
    min-height: 30vh;
    background-color: #1a1a29;;
`


const Image = styled.img`
    object-fit: cover;
`