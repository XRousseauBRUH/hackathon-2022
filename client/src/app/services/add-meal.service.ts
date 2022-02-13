import { Injectable } from '@angular/core';

const MEAL_FULL_LIST = [
  {
    day: '0',
    meals: [
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
    ],
  },
  {
    day: '1',
    meals: [
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
    ],
  },
  {
    day: '2',
    meals: [
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
    ],
  },
  {
    day: '3',
    meals: [
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
    ],
  },
  {
    day: '4',
    meals: [
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
    ],
  },
  {
    day: '5',
    meals: [
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
    ],
  },
  {
    day: '6',
    meals: [
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
      {
        type: '',
        name: 'Empty',
        recipe: '',
        image:
          '',
        ingredients: [],
      },
    ],
  },
];
const API_KEY = '78b5e2a1b717424580c03eddb8f8f82c';

@Injectable({
  providedIn: 'root',
})
export class AddMealService {
  mealFullLists;

  constructor() {
    this.getWeek();
  }

  getWeek() {
    return Array.of(MEAL_FULL_LIST);
  }

  getRandom(max) {
    return Math.floor(Math.random() * max + 1);
  }

  async searchMeal(searchParameters?: Map<string, string>) {
    // searchParameters.includeIng;
    // searchParameters.excludeIng;
    // searchParameters.cuisine;
    // searchParameters.textSearch;
    // searchParameters.type;
    // searchParameters.random;

    // searchParameters = new Map<string, string>([
    //   ['random', 'true'],
    //   ['includeIng', 'tomato'],
    //   ['excludeIng', 'egg'],
    //   ['cuisine', 'italian'],
    //   ['textSearch', 'lasagna'],
    //   ['type', 'mainCourse'],
    // ]);

    let randomID = this.getRandom(10000);

    let baseUrl = `https://api.spoonacular.com/recipes/${randomID}/information?apiKey=${API_KEY}&complexSearch`;
    // let tagsString = `&tags=${searchParameters.get(
    //   'type'
    // )},${searchParameters.get('cuisine')}`;
    // if (searchParameters.get('random') === 'true') {
    //   baseUrl = baseUrl.concat(
    //     `&random&number=1&tags=${searchParameters.get('type')}`
    //   );
    // } else {
    //   baseUrl = baseUrl.concat(
    //     `&number=1&query=${searchParameters.get('textSearch')}${tagsString}`
    //   );
    // }
    // if (searchParameters.get('includeIng') !== '') {
    //   baseUrl = baseUrl.concat(
    //     `&includeIngredients=${searchParameters.get('includeIng')}`
    //   );
    // }
    // if (searchParameters.get('excludeIng') !== '') {
    //   baseUrl = baseUrl.concat(
    //     `&excludeIngredients=${searchParameters.get('excludeIng')}`
    //   );
    // }
    // let apiResponse;

    let apiResponse = await this.sendRequest(baseUrl);
    console.log(apiResponse.sourceUrl);
    // sourceUrl
    // image
    // summary
    // title
    // dishTypes
    // cuisines
    // id
    // extendedIngredients
    // return Array.of(MEAL_FULL_LIST);
    return apiResponse;
  }

  async sendRequest(url: string) {
    return new Promise<any>(function (resolve, reject) {
      let responseJSON;
      let request = new XMLHttpRequest();
      request.open('GET', url);
      // request.setRequestHeader('Accept', 'application/json');
      // request.setRequestHeader(
      //   'x-rapidapi-host',
      //   'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      // );
      // request.setRequestHeader('Content-Type', 'application/json');
      // request.setRequestHeader('x-rapidapi', API_KEY);
      request.send();
      request.onload = () => {
        console.log(request);
        if (request.status === 200) {
          responseJSON = JSON.parse(request.response);
          console.log(responseJSON);
          resolve(responseJSON);
        } else {
          console.log(`error ${request.status} ${request.statusText}`);
          reject(request.status);
        }
      };
      // return responseJSON;
    });
  }
}
