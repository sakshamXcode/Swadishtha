import { assets } from '../../assets/assets'
import './AppDownload.css'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>
            For better experience Download 
            <br/> Swadishtha App
        </p>
        <div className="app-download-platform">
            <img src={assets.play_store} />
            <img src={assets.app_store} />
        </div>
    </div>
  )
}

export default AppDownload