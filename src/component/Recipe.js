import React from "react";

function Recipe({recipe}) {
    const {label, url, image} = recipe.recipe;

    return (
        <div className={'recipe'}>
            <a className={'link'} rel="noreferrer noopener" target={"_blank"} href={url}>
                <h1>{label}</h1>
                <img src={image} alt="recipe"/>
            </a>
        </div>
    )
}

export default Recipe