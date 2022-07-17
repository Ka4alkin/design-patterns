import CreateRequisitesForm from "../solid/single/createRequisitesForm";

const FormBank = () => {

    const onSave = () => {
        console.log('onSave--')
    }
    const onReset = () => {
        console.log('onReset--')
    }

    return (
        <>
            <CreateRequisitesForm
                onSave={onSave}
                onReset={onReset}
            />
        </>
    )
}

export default FormBank