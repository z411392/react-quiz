import React from "react"

export function Accordion({ sections }: { sections: Array<{ title: string; description: string; expanded?: boolean }> }) {
    return (
        <>
            <div className="accordion">
                {sections.map((section, index) => (
                    <label key={index}>
                        <h3>{section.title}</h3>
                        <input type="checkbox" style={{ display: "none" }} defaultChecked={section.expanded} />
                        <p>
                            {section.description}
                        </p>
                    </label>
                ))}
            </div>
        </>
    )
}