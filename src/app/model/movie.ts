export interface Movie {
  url: string;
  episode_id: string;
  title: string;
  director: string;
  producer: string;
  opening_crawl: string;
  characters: string[];
  planets: string[];
  vehicles: string[];
  created: string;
  release_date: string;
}


export interface Character {
  url: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string[];
  name: string[];
  skin_color: string[];
  created: string;
  edited: string;
  mass: string;
}
