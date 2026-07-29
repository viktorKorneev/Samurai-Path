import { play, pause, stop, showSong as playerShowSong } from "./player.js";
import songs from "./songs.js"
import { showSong, showPlaylist } from "./display.js"

console.log("🎶 Добро пожаловать в музыкальный плеер!")

// Показываем весь плейлист
showPlaylist(songs)

// Включаем первую песню
showSong(songs[0])
playerShowSong(songs[0])
play()

// Пауза
pause()

// Включаем вторую песню
showSong(songs[1])
playerShowSong(songs[1])
play()

// Останавливаем
stop()