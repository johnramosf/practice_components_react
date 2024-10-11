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
    const liBooks= []
    books.forEach((book, index) => {
    liBooks.push(<li key={index}>{book}</li> )
    })

    return (
    <>
    <h1>Component Libros de Harry Potter</h1>
    <div>
        <ul>
            {books.map((book, index) => {
            return <li key={index}>{book}</li>;
            })}
        </ul>
        <ul>
            {
            liBooks
            }
        </ul>
    </div>
    </>
    );
};
