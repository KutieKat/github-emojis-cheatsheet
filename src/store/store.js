import { createStore } from 'redux';
import { ActionTypes } from './ActionTypes';
import _ from 'lodash';

const defaultState = {
  emojis: [],
  categories: [],
  selectedCategories: [],
  keyword: '',
  filteredEmojis: [],
  maximumEmojis: 100,
  currentMaximumEmojis: 100
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ActionTypes.EMOJIS_LOAD_INITIAL_DATA:
      return {
        ...state,
        emojis: action.emojis,
        filteredEmojis: action.emojis
      }

    case ActionTypes.EMOJIS_FILTER:
      const isEmojiSelected = (keyword, selectedCategories, emojiKeyword, emojiCategories) => {
        // check whether emoji's categories is included
        let isIncluded = false;

        if(selectedCategories.length > 0) {
          for(let i = 0; i < emojiCategories.length; i++) {
            if(selectedCategories.includes(emojiCategories[i])) {
              isIncluded = true;
              break;
            }
          }
        }
        else {
          isIncluded = true;
        }

        // check whether markup is similar to keyword
        let isSelected = false;
        if(emojiKeyword.toLowerCase().includes(keyword) || emojiKeyword == '') {
          isSelected = true;
        }

        if(isIncluded && isSelected) {
          return true;
        }
        return false;
      }

      let filteredEmojis = _.filter(state.emojis, emoji => {
        return isEmojiSelected(state.keyword, state.selectedCategories, emoji.markup, emoji.categories);
      });

      return {
        ...state,
        filteredEmojis,
        // added later
        currentMaximumEmojis: 100
      }

    case ActionTypes.EMOJIS_LOAD_MORE:
      return {
        ...state,
        currentMaximumEmojis: state.currentMaximumEmojis + state.maximumEmojis
      }

    case ActionTypes.CATEGORIES_LOAD_INITIAL_DATA:
      return {
        ...state,
        categories: action.categories
      }
    
    case ActionTypes.CATEGORY_SELECT:
      if(!_.includes(state.selectedCategories, action.category)) {
        let selectedCategories = _.cloneDeep(state.selectedCategories);
        selectedCategories.push(action.category);

        return {
          ...state,
          selectedCategories
        }
      }
      else {
        return {
          ...state
        }
      }

    case ActionTypes.CATEGORY_DESELECT:
      let index = _.indexOf(state.selectedCategories, action.category);
      let selectedCategories = _.cloneDeep(state.selectedCategories);
      selectedCategories.splice(index, 1);

      return {
        ...state,
        selectedCategories
      }
    
    case ActionTypes.KEYWORD_UPDATE:
      return {
        ...state,
        keyword: action.keyword
      }

    case ActionTypes.KEYWORD_RESET:
      return {
        ...state,
        keyword: ''
      }

    default:
      return state;
  }
}

export const store = createStore(reducer);