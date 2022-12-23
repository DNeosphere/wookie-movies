import { rest } from "msw";


function getMovies() {
  return rest.get("https://wookie.codesubmit.io/movies", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
            backdrop: "https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
            cast :  ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
            classification: "13+",
            director : "Christopher Nolan",
            genres: ['Action', 'Crime', 'Drama'],
            id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
            imdb_rating : 9,
            length: "2h 32min",
            overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            poster: "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
            released_on: "2008-07-16T00:00:00",
            slug: "the-dark-knight-2008",
            title: "Movie"
        },
        {
            backdrop : "https://wookie.codesubmit.io/static/backdrops/554347b2-a340-4e35-b385-07e067ef302a.jpg",
            cast: ['Robin Williams', 'Matt Damon', 'Ben Affleck'],
            classification: "18+",
            director: "Gus Van Sant",
            genres: ['Drama', 'Romance'],
            id: "554347b2-a340-4e35-b385-07e067ef302a",
            imdb_rating: 8.3,
            length: "2h 6min",
            overview: 
            "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
            poster: "https://wookie.codesubmit.io/static/posters/554347b2-a340-4e35-b385-07e067ef302a.jpg",
            released_on: "1997-12-05T00:00:00",
            slug: "good-will-hunting-1997",
            title: "Movie"
        },
      ])
    );
  });
}

export const handlers = [getMovies()];