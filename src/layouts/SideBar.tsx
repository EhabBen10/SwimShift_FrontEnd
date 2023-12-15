import { Button, buttonStyle } from "@/components/ui/button";
import { useSidebarContext } from "@/context/SideBarcontext";
import { ChevronDown, ChevronUp, Clapperboard, Home, Repeat } from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
    const { isLargeOpen, isSmallOpen, close } = useSidebarContext()
    return (
        <>
            <aside
                className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${isLargeOpen ? "lg:hidden" : "lg:flex"
                    } ${isSmallOpen ? "flex z[100] max-h-screen" : "hidden"}`}
            >
                <SmallSidebarItem Icon={Home} title="Home" url="/" />
            </aside>
            <aside
                className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "hidden" : "hidden"}`}
            >
                <LargeSidebarSection>
                    <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
                </LargeSidebarSection>
            </aside>

        </>
    );
}

type SmallSidebarItemProps = {
    Icon: ElementType;
    title: string;
    url: string;
}

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
    return (
        <a
            href={url}
            className={twMerge(
                buttonStyle({ variant: "ghost" }),
                "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
            )}
        >
            <Icon className="w-6 h-6" />
            <div className="text-sm">{title}</div>
        </a>
    )
}

type LargeSidebarSectionProps = {
    children: ReactNode
    title?: string
    visibleItemCount?: number
}

function LargeSidebarSection({ children,
    title,
    visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const childerenArray = Children.toArray(children).flat();
    const showExpandButton = childerenArray.length > visibleItemCount
    const visibleChildren = isExpanded
        ? childerenArray
        : childerenArray.slice(0, visibleItemCount)
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown
    return <div className="flex flex-col gap-4">
        {title && <div className="text-sm font-bold">{title}</div>}
        {visibleChildren}
        {showExpandButton && (
            <Button
                onClick={() => setIsExpanded((e: any) => !e)}
                variant="ghost"
                className="w-full flex items-center rounded-lg gap-4 p-3"
            >
                <ButtonIcon className="w-6 h-6" />
                <div>{isExpanded ? "Show Less" : "Show More"}</div>
            </Button>
        )}
    </div>
}



type LargeSidebarItemProps = {
    IconOrImgUrl: ElementType | string
    title: string
    url: string
    isActive?: boolean
}

function LargeSidebarItem({
    IconOrImgUrl,
    title,
    url,
    isActive = false,
}: LargeSidebarItemProps) {
    return (
        <a
            href={url}
            className={twMerge(
                buttonStyle({ variant: "ghost" }),
                `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
                }`
            )}
        >
            {typeof IconOrImgUrl === "string" ? (
                <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
            ) : (
                <IconOrImgUrl className="w-6 h-6" />
            )}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
            </div>
        </a>
    )
}