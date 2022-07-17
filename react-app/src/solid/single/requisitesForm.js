const RequisitesForm = (props) => {
    const {
        title,
        onSave,
        onReset,
        content
    } = props
    const onSaveForm = (e) =>{
        e.preventDefault()
        onSave()
    }
    const onResetForm = (e) =>{
        e.preventDefault()
        onReset()
    }
    return (
        <form action="">
            <h1>{title}</h1>
            {content ? content : null}
            <input type="text" placeholder="ИИН"/>
            <input type="text" placeholder="БИК"/>
            <input type="text" placeholder="НАЗВАНИЕ БАНКА"/>
            <input type="text" placeholder="НОМЕР СЧЕТА"/>
            <button onClick={onResetForm}>Сбросить форму</button>
            <button onClick={onSaveForm}>Сохранить</button>
        </form>
    )
}

export default RequisitesForm