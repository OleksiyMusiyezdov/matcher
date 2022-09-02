import { IGetDataRequest, IGetDataResponse } from "../api/api.interface";

export const mockRequest: IGetDataRequest = {
  firstFirstName: "Johnny",
  firstSecondName: "Depp",
  secondFirstName: "Helena",
  secondSecondName: "Bonham Carter",
};

export const mockResponse: IGetDataResponse = {
  count: 7,
  list: [
    {
      title: "Charlie and the Chocolate Factory",
      year: 2005,
      url: "https://www.imdb.com/title/tt0367594/",
    },
    {
      title: "Corpse Bride",
      year: 2005,
      url: "https://www.imdb.com/title/tt0121164/",
    },
    {
      title: "Dark Shadows",
      year: 2012,
      url: "https://www.imdb.com/title/tt1077368/",
    },
    {
      title: "Sweeney Todd: The Demon Barber of Fleet Street",
      year: 2007,
      url: "https://www.imdb.com/title/tt0408236/",
    },
    {
      title: "Alice in Wonderland",
      year: 2010,
      url: "https://www.imdb.com/title/tt1014759/",
    },
    {
      title: "The Lone Ranger",
      year: 2013,
      url: "https://www.imdb.com/title/tt1210819/",
    },
    {
      title: "Alice Through the Looking Glass",
      year: 2016,
      url: "https://www.imdb.com/title/tt2567026/",
    },
  ],
};
