import RequisitesForm from "./requisitesForm";

const RussianRequsites = (props) => {
    const validateRussianForm = () => {
        // validate rules
    }

    const saveHandler = () => {
        validateRussianForm()
        props.onSave()
    }

    return <RequisitesForm onSave={saveHandler} onReset={props.onReset} title={props.title}/>
}

export default RussianRequsites