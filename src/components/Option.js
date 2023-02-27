const Option = ({optionText,index, onSelectOption, currentAnswer, currentAnswerArr}) => {
    return (
        <>
        <div className="options">
            <input style={{cursor:'pointer'}} type='radio' value={optionText}  checked={currentAnswer === optionText} name="radio" onChange={(e)=>onSelectOption(e.target.value)}/>
            <label htmlFor={optionText} className="optionText">{optionText}</label>
        </div>
        </>
    )
}

export default Option 