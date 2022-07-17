import ForeignRequsites from "./foreignRequsites";
import RussianRequsites from "./russianRequsites";

const UpdateRequisitesForm = ({isForeign}) => {
    const updateRequisites = () => {
    }
    const resetRequisites = () => {
    }

    if (isForeign) {
        return <ForeignRequsites
            onSave={updateRequisites}
            onReset={resetRequisites}
            title={'Обновление реквизитов'}
        />
    } else {
        return <RussianRequsites
            onSave={updateRequisites}
            onReset={resetRequisites}
            title={'Обновление реквизитов'}
        />
    }
}

export default UpdateRequisitesForm