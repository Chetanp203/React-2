import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const router = useNavigate();

  function goto(){
    router('/menswear')
  }
  return (
    <div>
      {/* ***********Banner */}
      <div className="banner">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47596855394334.gif" />
      </div>

      {/* * ***************Categories * */}
      <div className="categories">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596848218142.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47548678373406.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47445466152990.jpg" />
        </div>
        <div>
          <img onClick={goto} src="https://assets.tatacliq.com/medias/sys_master/images/47445466218526.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47575793303582.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47445466415134.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47445466480670.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47445466546206.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47445466611742.jpg" />
        </div>
      </div>

      <div className="bankoffers">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/46762762436638.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/46690782937118.jpg" />
        </div>
      </div>

      <div className='bo-1'>
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47532422234142.png"  />
      </div>

      <div className="bo-2">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596857851934.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596865257502.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596857983006.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596866830366.jpg" />
        </div>
      </div>

      <div className="dw-1">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47520344211486.jpg"  />
      </div>

      <div className="dw-2">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg" />
        </div>
      </div>

      <div className="dw-1">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg"  />
      </div>

      <div className="dw-2">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47513577619486.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47513577685022.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47513577750558.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47513577816094.jpg" />
        </div>
      </div>

      <div className="dw-1">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47520344342558.jpg"  />
      </div>

      <div className="dw-2">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47513030197278.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47513030328350.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47548680568862.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47548679520286.jpg" />
        </div>
      </div>


      <div className="dw-1">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47520344408094.jpg"  />
      </div>

      <div id="feature">
        <div className='f-div'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596866895902.jpg" />
        </div>
        <div className='f-div'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596867223582.jpg" />
        </div>
        <div className='f-div'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596867944478.jpg" />
        </div>
        <div className='f-div'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596866961438.jpg" />
        </div>
        <div className='f-div'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596854804510.jpg" />
        </div>
        <div className='f-div'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596854870046.jpg" />
        </div>
      </div>


      <div className="dw-1">
        <img src="https://assets.tatacliq.com/medias/sys_master/images/47520344539166.jpg"  />
      </div>

      <div className="dw-2">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47548679454750.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596854018078.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596853952542.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596854083614.jpg" />
        </div>
      </div>


      <div className="dw-2">
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47457055146014.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47596854476830.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47525748441118.jpg" />
        </div>
        <div>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/47403948834846.jpg" />
        </div>
      </div>

    </div>
  )
}
export default Home;