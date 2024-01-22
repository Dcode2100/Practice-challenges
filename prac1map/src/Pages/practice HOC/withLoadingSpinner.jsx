
const withLoadingSpinner = (WrappedComponent) => {
    const improvedcomponent = ({data}) => {
        return (
            <div>
                {data.length === 0 ? <h1>Loading...</h1> : <WrappedComponent data={data}/>}
            </div>

        )
    }
}

export default withLoadingSpinner;   //this is a HOC
