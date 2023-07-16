import type { ReactElement } from "react";
import { HomeIcon, NewspaperIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

export default function NavigationBar({ activePage }: { "activePage": "Home" | "Portfolio" | "Blog" | "About" }): ReactElement {
    const activeColor = "text-everforest-dark-primary"
    const inactiveColor = "text-everforest-dark-gray-0"
    const disabledColor = "text-everforest-dark-background-soft-red"
    let homeIconColor = inactiveColor
    let newsIconColor = inactiveColor
    let aboutIconColor = disabledColor
    if (activePage === "Home") {
        homeIconColor = activeColor
    }
    if (activePage === "Portfolio") {
    }
    if (activePage === "Blog") {
        newsIconColor = activeColor
    }
    if (activePage === "About") {
        aboutIconColor = activeColor
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start place-content-center">
                <a className={`btn btn-ghost ${homeIconColor}`} href="/">
                    <HomeIcon viewBox="0 0 24 24" className="w-6 h-6 inline-block" /> Home
                </a>
                <a className={`btn btn-ghost ${newsIconColor}`} href="/blog">
                    <NewspaperIcon viewBox="0 0 24 24" className="w-6 h-6 inline-block" /> Blog
                </a>
                <a className={`btn btn-disabled ${aboutIconColor}`} href="/about">
                    <InformationCircleIcon viewBox="0 0 24 24" className="w-6 h-6 inline-block disabled" /> About
                </a>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">dingo.foo</a>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}

