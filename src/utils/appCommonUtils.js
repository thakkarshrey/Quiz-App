export const shuffledOptions = (question) => {
    const unshuffledOptions = [question.correctAnswer,...question.incorrectAnswers]

    const shuffledOptions = unshuffledOptions.map((option=>{
        return {
            sort:Math.random(),
            value:option
        }
    })).sort((a,b)=>{
        return a.sort - b.sort
    }).map((obj)=>{
        return obj.value
    })

    return shuffledOptions
}