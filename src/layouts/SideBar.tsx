import { SpecialButton } from "@/components/ui/spcialebutton";
import { Menu, Rows, TestTube } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    function toggle() {
        setIsOpen(!isOpen);
    }
    function handleClickOutside(event: MouseEvent) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);

    return (<>
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 lg:hidden">
            <div className="px-0 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <SpecialButton variant={"ghost"} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggle}>
                            <Menu className="text-black" />
                        </SpecialButton>
                        <img src="src/Logo/logo.png" className="h-10 w-35 me-3" />
                    </div>
                </div>
            </div>
        </nav >
        <aside ref={sidebarRef} className={`fixed top-0 left-0 z-40 w-50 h-screen transition-transform -translate-x-full sm:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
                <img src="src/Logo/logo.png" className="h-10 w-35 mb-5 " />
                <hr />
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="*" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <Rows />
                            <span className="ms-3">Vagt oversigt</span>
                        </a>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/Watersamples" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <TestTube />
                            <span className="ms-3">Vand prøver</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside >
    </>
    )
}