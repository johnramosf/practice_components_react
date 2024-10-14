export const SecondComponent = () => {
    const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la cámara secreta",
    "Harry Potter y el prisionero de Azkaban",
    "Harry Potter y el cáliz de fuego",
    "Harry Potter y la Orden del fenix",
    "Harry Potter y el misterio del principe",
    "Harry Potter y las reliquias de la muerte",
    "Otro libro",
    ];

    //condición ? (si_verdaddero):(si_falso)

    return (
    <>
    <h1>Component Libros de Harry Potter</h1>
    <div>
        <ul>
            {books.length >=1 ?
                (
                    books.map((book, index) => {
                        return <li key={index}>{book}</li>;
                    })
                )
                    :
                (
                        <p>No hay libros disponibles</p>
                )
            }
        </ul>
    </div>
    </>
    )
}
