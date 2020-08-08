import styled from 'styled-components';


const Wrapper = styled.div`
    box-shadow: 8px 4px 8px rgba(0,0,0,0.2), -8px 4px 12px rgba(0,0,0,0.1);
    padding: 1em;
    margin: 1em;
    background: linear-gradient(45deg, rgba(255,0,255,0.95) 0%, rgba(77,255,249,1) 100%);
    border-radius: 20px;
`;

const ProfileImage = styled.img`
    height: 3.5em;
    width: 3.5em;
    border-radius: 50%;
`;

const RichText = styled.span`
    color : white;
`;

const CardTitle = styled.span`
    color : white;
    font-weight : 600;
    margin: 1.5em 0em 3em 1em;
`;

const ViewCount = styled.img`
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
`;

export {Wrapper, ProfileImage, RichText, CardTitle, ViewCount}