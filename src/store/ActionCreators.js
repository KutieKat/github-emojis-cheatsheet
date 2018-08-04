import { ActionTypes } from './ActionTypes';
import _ from 'lodash';

export const loadInitialEmojisData = (emojis) => {
  return {
    type: ActionTypes.EMOJIS_LOAD_INITIAL_DATA,
    emojis
  }
}

export const filterEmojis = () => {
  return {
    type: ActionTypes.EMOJIS_FILTER
  }
}

export const loadMoreEmojis = () => {
  return {
    type: ActionTypes.EMOJIS_LOAD_MORE
  }
}

export const loadInitialCategoriesData = (emojis) => {
  let categories = [];

  _.forEach(emojis, (emoji) => {
    _.forEach(emoji.categories, (category) => {
      if(category.length > 0 && !_.includes(categories, category.trim())) {
        categories.push(category.trim());
      }
    });
  });

  categories.sort();

  return {
    type: ActionTypes.CATEGORIES_LOAD_INITIAL_DATA,
    categories
  }
}

export const selectCategory = (category) => {
  return {
    type: ActionTypes.CATEGORY_SELECT,
    category
  }
}

export const deselectCategory = (category) => {
  return {
    type: ActionTypes.CATEGORY_DESELECT,
    category
  }
}

export const updateKeyword = (keyword) => {
  return {
    type: ActionTypes.KEYWORD_UPDATE,
    keyword
  }
}

export const resetKeyword = () => {
  return {
    type: ActionTypes.KEYWORD_RESET
  }
}