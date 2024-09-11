import './VideoDr.scss'

const VideoDr = () => {
  return (
    <div className="meet-dr-waite-section">
    <div className="video-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/54z9QTEfxJM" 
        title="Meet Dr. Waite - Avinichi Skincare" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </div>
    <div className="dr-info">
      <h2>MEET DR. WAITE</h2>
      <h3 className="certified-dermatologist">CERTIFIED DERMATOLOGIST</h3>
      <p>Discover Dr. Waite's expert opinion on Avinichi skincare and its quality superfood ingredients.</p>
      <a href='https://www.youtube.com/embed/54z9QTEfxJM' target='blank' className="learn-more-btn">LEARN MORE</a>
    </div>
  </div>
  )
}

export default VideoDr