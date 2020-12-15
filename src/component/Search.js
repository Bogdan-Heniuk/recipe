import React from "react";

function Search({search, applySearch, onChange}) {
    return (
        <div className={'search'}>
                <input className={'form-control'} type="text" value={search} onChange={onChange}/>
                <button className={'btn btn-warning'} onClick={applySearch}>search</button>
        </div>
    )
}

export default Search