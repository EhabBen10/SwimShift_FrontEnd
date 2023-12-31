import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
                        <Button variant={"ghost"} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggle}>
                            <Menu className="text-black" />
                        </Button>
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
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3">Shifts</span>
                        </a>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3">Vand prøver</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside >
    </>
    )
}