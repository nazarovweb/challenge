import './footer.css'
const Footer = () => {
  return (
    <footer className = 'footer'>
        <h2 className = 'footer_title'>Folish Developer</h2>
        <p className = 'footer_text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque, libero ab, sequi iusto soluta labore, veritatis eos saepe ea eveniet repellendus est error. Atque perferendis architecto sed eveniet cum.
        </p>
        
        <div className='footer_icons'>
          <a className='footer_icon' href="#">f</a>
          <a className='footer_icon' href="#">t</a>
          <a className='footer_icon' href="#">g</a>
          <a className='footer_icon' href="#">y</a>
          <a className='footer_icon'href="#">in</a>
        </div>
    </footer>
  )
}

export default Footer