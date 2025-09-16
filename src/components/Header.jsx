
import Logo from './Logo';
import Navigation from './Navigation';
import IconMenu from './IconMenu';
export default function Header() {
    return(
        <header className=" relative z-10  max-w-[1280px] flex items-center  justify-between mx-auto md:flex-row flex-col h-auto  md:h-[105px]">
            <Logo />
            <Navigation />
            <IconMenu />
        </header>
    );
};
