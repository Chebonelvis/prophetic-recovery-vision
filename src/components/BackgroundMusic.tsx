
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface BackgroundMusicProps {
  audioSrc?: string;
}

const BackgroundMusic = ({ 
  audioSrc 
}: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(true);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioSrc) {
      setAudioError(true);
      return;
    }

    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      
      // Handle audio loading errors
      const handleError = () => {
        console.log('Audio failed to load');
        setAudioError(true);
        setShowControls(true);
      };

      const handleCanPlay = () => {
        setAudioError(false);
      };

      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);

      return () => {
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [audioSrc, volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || audioError) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio play failed:', error);
      setAudioError(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Don't render if no audio source or there's an error
  if (!audioSrc || audioError) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center">
              <VolumeX size={16} />
            </div>
            <span className="text-white text-xs">Upload audio file</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={audioSrc}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Floating Music Controls */}
      <div 
        className="fixed bottom-6 right-6 z-50 group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className={`bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 transition-all duration-300 ${showControls ? 'bg-white/20' : ''}`}>
          <div className="flex items-center space-x-2">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center transition-colors"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            {/* Extended Controls */}
            <div className={`flex items-center space-x-2 transition-all duration-300 ${showControls ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 overflow-hidden'}`}>
              {/* Volume Control */}
              <button
                onClick={toggleMute}
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              
              {/* Volume Slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
              
              {/* Music Label */}
              <span className="text-white text-xs font-medium whitespace-nowrap">
                Worship Music
              </span>
            </div>
          </div>
        </div>
        
        {/* Initial hint */}
        {!showControls && (
          <div className="absolute -top-8 right-0 text-white/60 text-xs whitespace-nowrap animate-pulse">
            Hover for controls
          </div>
        )}
      </div>
    </>
  );
};

export default BackgroundMusic;
