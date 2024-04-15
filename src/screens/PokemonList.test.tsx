import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import { PokemonsList } from './PokemonsList';
import { useGetAllPokemonQuery } from '../services/baseApi';
import { StackNavigationProp } from '@react-navigation/stack';
import { PokemonStackList } from '../navigation/types';
import { ScreenKeys } from '../navigation/ScreenKeys';
import { NativeBaseProvider } from 'native-base';

const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

const generateStackNavigation = () => ({
    navigate: jest.fn(),
  });

jest.mock('../services/baseApi', () => ({
  useGetAllPokemonQuery: jest.fn(() => ({
    data: {
      count: 10,
      next: null,
      results: [{ name: 'pokemon1', url: 'url1' }, { name: 'pokemon2', url: 'url2' }],
    },
    isLoading: false,
    isFetching: false,
    error: null,
  })),
}));

const navigation = generateStackNavigation as unknown as StackNavigationProp<PokemonStackList, ScreenKeys.Pokemons>

const renderScreen = () => render(<NativeBaseProvider initialWindowMetrics={inset}><PokemonsList navigation={navigation} /></NativeBaseProvider>)

afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

describe('PokemonsList', () => {
  it('renders without crashing', () => {
    renderScreen()
  });
  it('renders header with Pokémon logo and text "POKEMON"', () => {
    renderScreen()
    expect(screen.getByTestId('pokemon-logo')).toBeTruthy();
    expect(screen.getByText('POKEMON'));
  });
  it('renders search input field correctly', () => {
    renderScreen()
    expect(screen.getByPlaceholderText('Find my pokemon!')).toBeTruthy();
  });
  it('matches snapshot', () => {
    renderScreen()
    expect(screen.toJSON()).toMatchSnapshot();
  });
});