import ThemeSwitcher from "./ThemeSwitcher";

export default function Header({aboutRef, projectsRef, contactRef}) {

    function scrollToElement(element) {
        if (element?.current) {
            element?.current.scrollIntoView();
        }
    };

    return (
        <div className="fixed w-full z-10">
            <div className="relative flex first-line:flex justify-center py-5 gap-5 container mx-auto">
                <div onClick={() => scrollToElement(aboutRef)} className="font-bold cursor-pointer">About</div>
                <div onClick={() => scrollToElement(projectsRef)} className="font-bold cursor-pointer">Projects</div>
                <div onClick={() => scrollToElement(contactRef)} className="font-bold cursor-pointer">Contact</div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
  