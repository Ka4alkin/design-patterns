import ForeignRequsites from "./foreignRequsites";
import RussianRequsites from "./russianRequsites";

const CreateRequisitesForm = ({isForeign, ...props}) => {

    if (isForeign) {
        return <ForeignRequsites
            onSave={props.onSave}
            onReset={props.onReset}
            title={'Сохранение реквизитов'}
        />
    } else {
        return <RussianRequsites
            onSave={props.onSave}
            onReset={props.onReset}
            title={'Сохранение реквизитов'}
        />
    }
}

export default CreateRequisitesForm;