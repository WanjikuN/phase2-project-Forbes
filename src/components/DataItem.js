function DataItem({name,networth,employees}){
    return (
        <div className="dataitem">

        <h1>Name:{name}</h1>
        <h3>NetWorth:{networth}</h3>
        <h3>employees:{employees}</h3>
        </div>
        
    )
}
export default DataItem;