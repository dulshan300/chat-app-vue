const dummy_chat_rooms = [
    { "id": 1, "name": "Chill Zone", "last_message": "Let's meet up this weekend!", "updated_at": "2024-05-26T14:32:00Z", "new_messages_count": 3, "active": false },
    { "id": 2, "name": "Tech Talk", "last_message": "Have you tried the new AI tool?", "updated_at": "2024-05-26T13:22:00Z", "new_messages_count": 5, "active": false },
    { "id": 3, "name": "Book Club", "last_message": "I loved the ending of the book!", "updated_at": "2024-05-26T12:10:00Z", "new_messages_count": 2, "active": false },
    { "id": 4, "name": "Gaming Hub", "last_message": "Who's up for a game tonight?", "updated_at": "2024-05-26T15:45:00Z", "new_messages_count": 4, "active": false },
    { "id": 5, "name": "Music Lovers", "last_message": "Check out this new album!", "updated_at": "2024-05-26T16:00:00Z", "new_messages_count": 1, "active": false },
    { "id": 6, "name": "Study Group", "last_message": "Can someone explain this concept?", "updated_at": "2024-05-26T11:00:00Z", "new_messages_count": 0, "active": false },
    { "id": 7, "name": "Movie Buffs", "last_message": "What's your favorite movie of all time?", "updated_at": "2024-05-26T17:15:00Z", "new_messages_count": 6, "active": false },
    { "id": 8, "name": "Fitness Fanatics", "last_message": "I just finished a 5k run!", "updated_at": "2024-05-26T14:45:00Z", "new_messages_count": 0, "active": false },
    { "id": 9, "name": "Foodies Unite", "last_message": "This recipe is amazing!", "updated_at": "2024-05-26T18:05:00Z", "new_messages_count": 7, "active": false },
    { "id": 10, "name": "Travel Tales", "last_message": "Just got back from Italy!", "updated_at": "2024-05-26T10:30:00Z", "new_messages_count": 0, "active": false },
    { "id": 11, "name": "Pet Lovers", "last_message": "My cat did the funniest thing today!", "updated_at": "2024-05-26T19:20:00Z", "new_messages_count": 8, "active": false },
    { "id": 12, "name": "Fashion Frenzy", "last_message": "Loving this new fashion trend!", "updated_at": "2024-05-26T20:10:00Z", "new_messages_count": 3, "active": false },
    { "id": 13, "name": "DIY Projects", "last_message": "Here's my latest DIY project.", "updated_at": "2024-05-26T21:00:00Z", "new_messages_count": 0, "active": false },
    { "id": 14, "name": "Startup Ideas", "last_message": "I've got a new business idea.", "updated_at": "2024-05-26T22:30:00Z", "new_messages_count": 4, "active": false },
    { "id": 15, "name": "Sports Lounge", "last_message": "What a game last night!", "updated_at": "2024-05-26T23:45:00Z", "new_messages_count": 1, "active": false },
    { "id": 16, "name": "Art Corner", "last_message": "My latest painting is complete.", "updated_at": "2024-05-26T09:15:00Z", "new_messages_count": 0, "active": false },
    { "id": 17, "name": "Photography Passion", "last_message": "Check out this new photo!", "updated_at": "2024-05-26T08:45:00Z", "new_messages_count": 2, "active": false },
    { "id": 18, "name": "Gardening Gurus", "last_message": "My tomatoes are finally ripe!", "updated_at": "2024-05-26T07:30:00Z", "new_messages_count": 5, "active": false },
    { "id": 19, "name": "Language Exchange", "last_message": "Can someone help me with Spanish?", "updated_at": "2024-05-26T06:20:00Z", "new_messages_count": 0, "active": false },
    { "id": 20, "name": "Meditation Space", "last_message": "Today's meditation was so calming.", "updated_at": "2024-05-26T05:10:00Z", "new_messages_count": 3, "active": false },
    { "id": 21, "name": "Science Geeks", "last_message": "Have you read this latest study?", "updated_at": "2024-05-26T04:00:00Z", "new_messages_count": 1, "active": false },
    { "id": 22, "name": "History Buffs", "last_message": "Did you know about this historical event?", "updated_at": "2024-05-26T03:30:00Z", "new_messages_count": 0, "active": false },
    { "id": 23, "name": "Parenting Tips", "last_message": "Need advice on toddler tantrums.", "updated_at": "2024-05-26T02:15:00Z", "new_messages_count": 2, "active": false },
    { "id": 24, "name": "Environmental Warriors", "last_message": "Here's how to reduce plastic waste.", "updated_at": "2024-05-26T01:05:00Z", "new_messages_count": 4, "active": false },
    { "id": 25, "name": "Coding Camp", "last_message": "Can someone review my code?", "updated_at": "2024-05-26T00:00:00Z", "new_messages_count": 0, "active": false },
    { "id": 26, "name": "Finance Forum", "last_message": "Best investments for 2024?", "updated_at": "2024-05-25T23:50:00Z", "new_messages_count": 6, "active": false },
    { "id": 27, "name": "Anime Admirers", "last_message": "What's the latest episode like?", "updated_at": "2024-05-25T22:40:00Z", "new_messages_count": 5, "active": false },
    { "id": 28, "name": "Outdoor Adventures", "last_message": "Just hiked a new trail!", "updated_at": "2024-05-25T21:30:00Z", "new_messages_count": 0, "active": false },
    { "id": 29, "name": "Mystery Enthusiasts", "last_message": "Solved the latest mystery!", "updated_at": "2024-05-25T20:20:00Z", "new_messages_count": 1, "active": true },
    { "id": 30, "name": "Comedy Club", "last_message": "Heard a great joke today!", "updated_at": "2024-05-25T19:10:00Z", "new_messages_count": 2, "active": false }
]

export default dummy_chat_rooms