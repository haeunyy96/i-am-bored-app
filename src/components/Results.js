const Results = ({show}) => {
    const here = show.activity
    return (
        <>
            <div className="resultDiv">
                <p className="result">{here}</p>
            </div>
        </>
    );
}

export default Results;