import * as actions from './index';
import * as mocks from '../helpers/mockData';
describe('actions', () => {


  describe('setType actions', () => {
    it('Should create a types object', () => {
      const types = mocks.types;
      const expected = {
        type:"SET_TYPES",
        types
      }; 
      const called = actions.setTypes(types)
      expect(called).toEqual(expected);
    });
  });

  describe('addPokemon action', () => {
    const pokemon = mocks.pokemons;
    const expected = {
      type: "ADD_POKEMON",
      pokemon
    }
    const called = actions.addPokemon(pokemon);
    expect(called).toEqual(expected);
  })

  
})
