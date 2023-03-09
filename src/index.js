import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

/* function Greeting(){
    return <h2>My first component</h2>
} */

/* function Greeting() {
  return React.createElement('h2', {}, 'hello world')
} */

/* function Greeting() {
  return (
    <div>
      <h2>My First Component</h2>
    </div>
  )
} */

/* function Greeting() {
  return (
    <React.Fragment>
      <div className='someValue'>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href='#'>Hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world!</h2>
      <input type='text' />
    </React.Fragment>
  )
} */

// Nesting a component
/* function Greeting() {
  return (
    <div>
      <Person></Person>
      <Message></Message>
    </div>
  )
}

const Person = () => <h2>john doe</h2>
const Message = () => {
  return <p>This is my message</p>
} */

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img src='images/book.jpg' alt='How to Catch a Leprechaun' />
)
const Title = () => <h2>How to Catch a Leprechaun</h2>
const Author = () => {
  return (
    <h4
      style={{
        color: '#0000FF',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
      }}
    >
      Andy Elkerton
    </h4>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
