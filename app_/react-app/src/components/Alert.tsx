interface Props{
    text:string
}
function Alert({text}:Props){

    return(
        <div className="alert alert-primary">{text}</div>
    )

}
export default Alert;