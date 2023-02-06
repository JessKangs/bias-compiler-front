import styled from "styled-components";

export default function Player() {
    return (
        <IframeStyle 
                title="music player"
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; 
                clipboard-write; 
                encrypted-media; 
                fullscreen; 
                picture-in-picture"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1EpmlNpNHKELaN?utm_source=generator"
            ></IframeStyle>
    );
}

const IframeStyle = styled.iframe`
    height: 100px;
    width: 400px;
    position: fixed;
    bottom: 0;
    left: 20px;
`;
