import RequisitesForm from "./requisitesForm";

const ForeignRequsites = (props) => {
    const validateForeignForm = () => {
        // validate rules
    }

    const saveHandler = () => {
        validateForeignForm()
        props.onSave()
    }

    return <RequisitesForm onSave={saveHandler} onReset={props.onReset} title={props.title}/>
}

export default ForeignRequsites