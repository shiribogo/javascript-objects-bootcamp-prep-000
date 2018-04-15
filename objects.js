var playlist = {idan: 'boee'}
function upadtePlaylist(playlist, artistName, songTitle){
  playlist [artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}