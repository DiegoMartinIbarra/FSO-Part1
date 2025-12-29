const Header = (props) => {return <h1>{props.course.name}</h1> };

const Content = ({parts}) => {
    return(
      <div>
        <ul>
          {parts.map(parts => 
            <li key={parts.id}>
              <Part part={parts.name} exercises ={parts.exercises}  />
            </li>
          )}
        </ul>
      </div>
    )
}

const Total = ({parts}) => {return <h4>Total of {parts.reduce((sum, parts) => sum + parts.exercises, 0)} exercises </h4> };

const Part = (props) => {return <p>{props.part} {props.exercises}</p>}

const Course = ({course}) => {
  return(
    <div>
      <ul>
          {course.map(course => 
            <li key={course.id}>
                <Header course={course} />
                <Content  parts={course.parts} />
                <Total parts={course.parts} />
            </li>
          )}
        </ul>
    </div>
  )
}

export default Course