const minhaLista = [
    {id: '1', value: 'fruta'},
    {id: '2', value: 'legume'},
    {id: '3', value: 'carne'}
]

export default function MinhaLista() {
    return minhaLista.map((item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}