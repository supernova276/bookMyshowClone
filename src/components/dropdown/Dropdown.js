const Dropdown=({dropDownData})=>{
    return (
        <>
        {/* <div className="d-flex flex-column flex-align-center w-75 p-1"> */}
               { dropDownData.map((movieName)=>{

                         return <div className=" d-flex w-75 p-1">{movieName.name}</div>
                })}

        {/* </div> */}

        </>
    )
}
export default Dropdown