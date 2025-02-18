import '../components/Background.css'
import ImagemFundo from '../img/background.jpg'

function Background() {
    return (
      <>
      <div className='backgroundimage'>
        <img src={ImagemFundo} alt="" />
      </div>
      </>
    )
  }
  
  export default Background