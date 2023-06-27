import  { useEffect,useState } from 'react'
import './Testimonial.css'
//import data from '../data'
//import { people } from '../data'
const people = [
  {
    id: 1,
    img: './images/test1.jpg',
    name: 'Chernet',
    title: 'Category one!',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde consequatur facilis, minus maiores fuga fugit ratione quaerat suscipit molestiae obcaecati quasi ea doloribus quos nostrum. Quae, autem? Nobis, ut!',
  },
  {
    id: 2,
    img: './images/test2.jpg',
    name: 'Ada',
    title: 'Category two',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde consequatur facilis, minus maiores fuga fugit ratione quaerat suscipit molestiae obcaecati quasi ea doloribus quos nostrum. Quae, autem? Nobis, ut!',
  },
  {
    id: 3,
    img: './images/test3.jpg',
    name: 'Desu',
    title: 'Category three',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde consequatur facilis, minus maiores fuga fugit ratione quaerat suscipit molestiae obcaecati quasi ea doloribus quos nostrum. Quae, autem? Nobis, ut!',
  },
]



const Testimonial = () => {
    // const [people] = useState(people)
    const [index, setIndex] = useState(0)

    useEffect(() => {
      const lastIndex = people.length - 1
      if (index < 0) {
        setIndex(lastIndex)
      }
      if (index > lastIndex) {
        setIndex(0)
      }
    }, [index, people])

    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1)
      }, 5000)
      return () => {
        clearInterval(slider)
      }
      //   if (index < 0) {
      //     setIndex(lastIndex)
      //   }
      //   if (index > lastIndex) {
      //     setIndex(0)
      //   }
    }, [index])
  return (
    <section className='section'>
      {/* <div className='title'>
        <center>
          <h2>Top leader</h2>
        </center>
      </div> */}
      <div className='section-center'>
        {people.map((item, indexPeople) => {
          const { id, img, name, title, quote } = item
          let position = 'nextSlide'
          if (indexPeople === index) {
            position = 'activeSlide'
          }

          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={img} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <i className='fa fa-arrow-right' />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <i className='fa fa-arrow-left' />
        </button>
      </div>
    </section>
  )
}

export default Testimonial