import { animateScroll as scroll } from "react-scroll";

export const scrollToNextSection = () => {
    scroll.scrollTo(document.getElementById('secondSection').offsetHeight, {
        duration: 1000,
        smooth: 'easeInOutQuart',
    });
}