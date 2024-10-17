import './photos.css';
import photo_1 from '../../assets/images/photos_1.jpg';
import photo_2 from '../../assets/images/photos_2.jpg';
import photo_3 from '../../assets/images/photos_3.jpg';
import photo_4 from '../../assets/images/photos_4.jpg';
function Photos()
{
    return (
        <div className="photos-container">
            <div className="left">
                <img src={photo_2} alt="" />
            </div>
            <div className="right">
                <div className="top">
                    <img src={photo_1} alt="" />
                </div>
                <div className="bottom">
                    <img src={photo_4} style={{marginRight : '20px'}} alt="" />
                    <img src={photo_3} alt="" />
                </div>
            </div>

        </div>
    )
}
export default Photos;