export const typeDefs = `#graphql

## From local file 
    type Game{
        id:ID!,
        title:String!,
        platform:[String!]!
    }

    type Review{
        id:ID!,
        rating:Int!,
        content:String!
    }

    type Author{
        id:ID!,
        name:String!,
        verified:Boolean!
    }

    type Query {
        reviews:[Review]
        review(id:ID!):Review
        games:[Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
    }


    type Mutation{
        addGame(game:AddGameInput!):Game
        deleteGame(id:ID!):[Game]
        updateGame(id:ID!, edits:AddGameInput!):Game
    }

    input AddGameInput{
        title:String!,
        platform:[String]
    }
## from api

    type Anime {
        mal_id: ID!
        title: String
        title_japanese: String
        images: AnimeImages
        episodes: Int
        synopsis: String
        genres: [Genre]
    }
    type AnimeImages {
        jpg: AnimeImage
        webp: AnimeImage
    }
  
  type AnimeImage {
    image_url: String
    small_image_url: String
    large_image_url: String
  }
  
  type Genre {
    mal_id: ID!
    name: String
  }

  type Query {
    animes:[Anime]
    anime(id: ID!): Anime
  }

`