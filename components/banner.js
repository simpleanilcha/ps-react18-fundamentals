import Image from 'next/image'
import logoImg from '../public/GloboLogo.png'
import { logo } from './banner.module.css'

const subtitleStyle = {
  fontStyle: 'italic',
  fontSize: 'x-large',
  color: 'coral'
}

const Banner = () => {
  return (
    <header className='row mb-4'>
      <div className='col-5'>
        {/* <img src="./GloboLogo.png" alt="logo" /> */}
        <Image
          src={logoImg}
          alt="logo"
          className={logo}
        />
      </div>
      {/* {fontStyle: 'italic'} */}
      <div className='col-7 mt-5' style={subtitleStyle}>
        <p>Providing houses all over the world</p>
      </div>
    </header>
  )
}

export default Banner;