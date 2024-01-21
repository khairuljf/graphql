let games  = [
    {id:'1', title:'Title 1', platform:['switch', 'xbod']},
    {id:'2', title:'Title 2', platform:['switch', 'xbod']},
    {id:'3', title:'Title 3', platform:['switch', 'xbod']},
    {id:'4', title:'Title 4', platform:['switch', 'xbod']},
    {id:'5', title:'Title 5', platform:['switch', 'xbod']},
    {id:'6', title:'Title 6', platform:['switch', 'xbod']},
    {id:'7', title:'Title 7', platform:['switch', 'xbod']}
]


let authors  = [
    {id:'1', name:'khairul', verified:true},
    {id:'2', name:'rubel', verified:false},
    {id:'3', name:'josim', verified:false},
]


let reviews = [
   { id:'1', rating:9, content:'loren a', author_id:'1', game_id:'2'},
   { id:'2', rating:8, content:'loren b', author_id:'2', game_id:'1'},
   { id:'3', rating:7, content:'loren c', author_id:'3', game_id:'5'},
   { id:'4', rating:6, content:'loren d', author_id:'2', game_id:'7'},
   { id:'5', rating:5, content:'loren e', author_id:'1', game_id:'1'},
]

export default {games, authors, reviews  }

