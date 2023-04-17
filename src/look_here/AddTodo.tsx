import React from 'react'

export const AddTodo: React.FC<{ onAddTodo: (todo: { title: string, description: string }) => void }> = ({onAddTodo}) => {
    const [title, setTitle] = React.useState<string>()
    const [description, setDescription] = React.useState<string>()

    return <>
        <h2>Add Todo</h2>
        <form onSubmit={e => {
            e.preventDefault()
            onAddTodo({title: title!!, description: description!!})
        }} style={{width: 200, height: 400, display: "flex", flexDirection: "column"}}>
            <label>
                Title
                <input type='text' onChange={e => setTitle(e.currentTarget.value)}/>
            </label>
            <label>
                Description
                <input type='text' onChange={e => setDescription(e.currentTarget.value)}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    </>
}