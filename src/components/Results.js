const Results = ({show}) => {
    const here = show.activity
    return (
        <>
            <div className="resultDiv">
                <p>💛 {here} 💛</p>
            </div>
        </>
    );
}

export default Results;