import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


import db from './_db.js'


import {typeDefs } from './schema.js'



const resolvers = {
    Query:{
        games(){
            return db.games
        },
        game(_, args ){
            return db.games.find((review)=>review.id === args.id)
        },
        authors(){
            return db.authors
        },
        author(_, args ){
            return db.authors.find((review)=>review.id === args.id)
        },
        reviews(){
            return db.reviews
        },
        review(_, args ){
            return db.reviews.find((review)=>review.id === args.id)
        },

    },

    Mutation :{

        deleteGame(_, args){
            return db.games.map((game)=>game.id !== args.id)
        },

        addGame(_, args){

            let game = {
                ...args.game,
                id:Math.floor(Math.random() * 1000).toString()
            }

            db.games.push(game)

            return game

        },

        updateGame(_, agrs){

            db.games = db.games.map((g)=>{
                if(g.id===agrs.id){
                    return {...g, ...agrs.edits}
                }
                return g
            })

            return db.games
        }
    }
}


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);