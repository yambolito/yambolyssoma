import firebase_admin
from firebase_admin import credentials, firestore

# Ruta al archivo de credenciales de servicio descargado
cred = credentials.Certificate('path/to/serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()


def create_playlist(name):
    playlist_ref = db.collection('playlists').document()
    playlist_ref.set({'name': name, 'songs': []})

def add_song_to_playlist(playlist_id, song):
    playlist_ref = db.collection('playlists').document(playlist_id)
    playlist_ref.update({'songs': firestore.ArrayUnion([song])})

def remove_song_from_playlist(playlist_id, song):
    playlist_ref = db.collection('playlists').document(playlist_id)
    playlist_ref.update({'songs': firestore.ArrayRemove([song])})

def delete_playlist(playlist_id):
    db.collection('playlists').document(playlist_id).delete()


# Crear una nueva lista de reproducción
create_playlist('My Playlist')

# Agregar una canción a la lista de reproducción
add_song_to_playlist('playlist_id', {'title': 'Song Title', 'artist': 'Artist Name', 'duration': '3:45'})

# Eliminar una canción de la lista de reproducción
remove_song_from_playlist('playlist_id', {'title': 'Song Title', 'artist': 'Artist Name', 'duration': '3:45'})

# Eliminar la lista de reproducción
delete_playlist('playlist_id')
