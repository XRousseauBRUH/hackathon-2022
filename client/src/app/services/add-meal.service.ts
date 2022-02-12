import { getLocaleWeekEndRange } from '@angular/common';
import { Injectable } from '@angular/core';

const MEAL_FULL_LIST = [
  {
    day: '0',
    meals: [
      {
        type: 'Breakfast',
        name: 'Lasagna',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Diner',
        name: 'potatop',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Supper',
        name: 'tomato',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
    ],
  },
  {
    day: '1',
    meals: [
      {
        type: 'LAERARqr',
        name: 'Lasagna',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'eldfjkawelrhqw',
        name: 'potatop',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'DQWL;EOHFQWELFH',
        name: 'tomato',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
    ],
  },
  {
    day: '2',
    meals: [
      {
        type: 'Breakfast',
        name: 'Lasagna',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Diner',
        name: 'potatop',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Supper',
        name: 'tomato',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
    ],
  },
  {
    day: '3',
    meals: [
      {
        type: 'Breakfast',
        name: 'Lasagna',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Diner',
        name: 'potatop',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Supper',
        name: 'tomato',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
    ],
  },
  {
    day: '4',
    meals: [
      {
        type: 'Breakfast',
        name: 'Lasagna',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Diner',
        name: 'potatop',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Supper',
        name: 'tomato',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
    ],
  },
  {
    day: '5',
    meals: [
      {
        type: 'Breakfast',
        name: 'Lasagna',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Diner',
        name: 'potatop',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Supper',
        name: 'tomato',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
    ],
  },
  {
    day: '6',
    meals: [
      {
        type: 'Breakfast',
        name: 'Lasagna',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Diner',
        name: 'potatop',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
      {
        type: 'Supper',
        name: 'tomato',
        recipe: 'full recipe balblabalbalblablab',
        image:
          'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=',
        ingredients: 'potato,salad',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class AddMealService {
  mealFullLists;

  constructor() {
    this.getWeek();
  }

  getWeek() {
    // MEAL_FULL_LIST.toString()
    // let newString = JSON.stringify(MEAL_FULL_LIST);
    // MEAL_FULL_LIST;
    return Array.of(MEAL_FULL_LIST);
  }
}
