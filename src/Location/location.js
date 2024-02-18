/*global kakao*/
import { useEffect } from "react";
import '../Location/location.css'

const Location = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, [])


    return (
        <div>
            <div className="map" id="map" style={{ width: "328px", height: "536px"}}></div>
        </div>
    )
}

export default Location;