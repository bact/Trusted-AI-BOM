import React from "react";
import clsx from "clsx";

export default function Panel({
    header,
    children,
    footer,
    color = "transparent",
    centered = false,
    includeMargin = false,
    includePadding = true,
    className,
    innerClassName,
    container = true
}) {

    const colorClass = color === "transparent" ? "" :
        color === "white" ? "bg-white text-text-primary" :
            color === "white-to-slate" ? "bg-gradient-to-b from-white to-slate-50 text-text-primary" :
                color === "light" ? "bg-gray-100 text-text-primary" :
                    color === "light-to-white" ? "bg-gradient-to-b from-gray-100 to-white text-text-primary" :
                        color === "lighter" ? "bg-gray-50 text-text-primary" :
                            color === "light_gray" ? "bg-gray-700 text-white dark:text-white" :
                                color === "gray" ? "bg-gray-800 text-white dark:text-white" :
                                    color === "dark_gray" ? "bg-gray-900 text-white dark:text-white" :
                                        color === "primary" ? "bg-primary text-white dark:text-white" :
                                            color === "secondary" ? "bg-secondary text-white dark:text-white" : "";

    const borderClass = "border-solid border-white border-opacity-20 dark:border-opacity-20";

    return (
        <section
            className={clsx("max-w-full relative flex flex-col items ",
                colorClass,
                includeMargin ? " my-16" : "",
                "border-0 border-t",
                className
            )}>
            <div className={clsx(
                (centered ? " flex flex-col items-center" : ""),
                borderClass,
                "border-x border-y-0",
                innerClassName
            )}>
                {header}
                {container ? <div className={"max-w-6xl mx-auto"}>{children}</div> : null}
                {!container ? children : null}
                {footer}
            </div>
        </section>
    );
}