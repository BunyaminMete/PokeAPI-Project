import React, { useEffect } from 'react';
import axios from 'axios';

import './home.css';

import Division from '../components/div/div';
import SearchBar from '../components/input/input';

const HomePage = () => {
  const [pokeNames, setPokeNames] = React.useState([]);
  const [data2, setData] = React.useState('');
  const [data3, setData3] = React.useState({ pokenames: [] });
  const [habitats, setHabitats] = React.useState();

  useEffect(() => {
    sendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getHabitat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [habitats]);

  const sendRequest = async () => {
    for (let i = 1; i < 100; i++) {
      await getData(i);
    }
  };

  const getData = async (id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    await axios.get(URL).then((res) => {
      setPokeNames((data) => [...data, res.data.name]);
      data3.pokenames.push({ name: res.data.name, image: res.data.sprites.front_shiny, weight: res.data.weight });
      setData(data3);
    });
  };

  const callCheckEvent = (event) => {
    let newData = { pokenames: [] };
    data2.pokenames.forEach((data, index) => {
      if (data.name.includes(event.target.value.toLowerCase())) {
        newData.pokenames.push({ name: data.name, image: data.image, weight: data.weight });
        setData3(newData);
      }
    });
  };

  const getHabitat = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon-species/';
    const arrayHabitat = [];
    for (let i = 0; i < pokeNames.length; i++) {
      await axios.get(url + pokeNames[i]).then((res) => {
        arrayHabitat.push(res.data.habitat.name);
      });
    }
    setHabitats(arrayHabitat);
  };

  return (
    <>
      <SearchBar searchEvent={callCheckEvent} />
      <div className="pokemons">
        {data3.pokenames.map((data, index) => (
          <Division weight={data.weight} cardText={`${habitats[index]}`} key={index} src={data.image}>
            {data.name}
          </Division>
        ))}
        {}
      </div>
    </>
  );
};
export default HomePage;
