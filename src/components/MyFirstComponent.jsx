export const MyFirstComponent = () => {
  const name = "Inés María Oliveros ";
  const github_profile = "https://github.com/inesmariao";

  const student = {
    name : "John",
    lastname : "Ramos",
    mobile: "3102749047",
    linkedInProfile : "http://www.linkedin.com/in/software-engineer-john-ramos"
  }

  console.log(student)

  return (
    <>
      <div>MyFirstComponent</div>
      <div className="container mt-4" >
        <h1>Temas de React</h1>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados Hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className="container py-2">
        <h1>Datos del Docente</h1>
        <p> Nombre: <strong>{ name }</strong></p>
         <p>Github: { github_profile } </p>
      </div>
      <div className="container py-2">
        <h1>Datos del Estudiante</h1>
        <p> Nombre : <strong>{ student.name }</strong></p>
        <p> Apellido : { student.lastname } </p>
        <p> Celular : { student.mobile }</p>
        <p> LinkedIn: <a href={student.linkedInProfile} target="blank" >{student.linkedInProfile}</a> </p>
      </div>
      <div className="container mt-2 pt-2">
        <h1>Objeto Student Completo </h1>
        <pre>{JSON.stringify(student)}</pre>
      </div>
    </>
  )
}
