function geoFindMe()
{
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    status.textContent = '';
    mapLink.textContent = '';
     function success(position)
     {
         const latitude = position.coords.latitude;
         const longitude = position.coords.longitude;
         status.textContent = '';
         mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude}, LongitudeL ${longitude}`;
     }
     function error()
     {
         status.textContent = '';
     }
     if(!navigator.geolocation)
        status.textContent = '';
    else
        navigator.geolocation.getCurrentPosition(success,error);
}

document.querySelector('#find-me').addEventListener('click',geoFindMe);