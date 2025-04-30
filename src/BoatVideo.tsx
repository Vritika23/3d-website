import boatVideo from './assets/boat-video.mp4'; // adjust the path as needed

function BoatVideos() {
    return (
        <video 
        className="h-100vh w-full object-cover animate-clip-from-top-animation" autoPlay muted loop>
            <source src={boatVideo} type="video/mp4" />
            
        </video>
    );
}

export default BoatVideos;
