import type { ReactElement } from "react";
import { HomeIcon, NewspaperIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

export default function NavigationBar({ activePage }: { "activePage": "Home" | "Portfolio" | "Blog" | "About" }): ReactElement {
    const activeColor = "text-everforest-light-green dark:text-everforest-dark-green"
    const inactiveColor = ""
    const disabledColor = "text-everforest-light-background-soft-green dark:text-everforest-dark-background-soft-green"
    let homeIconColor = inactiveColor
    let newsIconColor = inactiveColor
    let aboutIconColor = inactiveColor
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
                <a className="btn btn-ghost" href="/">
                    <HomeIcon viewBox="0 0 24 24" className={`w-6 h-6 inline-block ${homeIconColor}`} />
                </a>
                <a className="btn btn-ghost" href="/blog">
                    <NewspaperIcon viewBox="0 0 24 24" className={`w-6 h-6 inline-block ${newsIconColor}`} />
                </a>
                <a className="btn btn-ghost" href="/about">
                    <InformationCircleIcon viewBox="0 0 24 24" className={`w-6 h-6 inline-block ${aboutIconColor}`} />
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

