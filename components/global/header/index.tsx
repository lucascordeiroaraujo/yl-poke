import React, { useState } from 'react';

import Header, { Menu, SearchForm } from './style';

import { Container } from '~/styles/global';

import { FaSearch } from 'react-icons/fa';

import Link from 'next/link';

import { FaHome, FaStar, FaMoon, FaSun } from 'react-icons/fa';

import Switch from 'react-switch';

const header = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Header>
      <Container className="header-container">
        <div className="header-logo-container">
          <Link href="/">
            <a title="Go to home page">
              <img
                src={require('~/public/images/pokeapi.svg')}
                alt="Logo Poke API"
                title="Poke API"
                width="257"
                height="103"
                className="pokeapi"
              />

              <img
                src={require('~/public/images/yalo-chat.svg')}
                alt="Yalo Chat Logo"
                title="Yalo: Conversational Commerce in WhatsApp and Facebook Messenger"
                width="53"
                height="20"
                className="yalo"
              />
            </a>
          </Link>
        </div>

        <div className="header-actions-continaer">
          <Menu>
            <ul>
              <li>
                <Link href="/">
                  <a title="Go to home page">
                    <FaHome /> Home
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <a title="Your favorite pokemons">
                    <FaStar /> Favorites
                  </a>
                </Link>
              </li>
            </ul>

            <Switch
              onChange={handleChange}
              checked={checked}
              checkedIcon={<FaMoon />}
              uncheckedIcon={<FaSun />}
              onColor="#5a55f2"
              className="switch-theme"
            />
          </Menu>

          <SearchForm>
            <input
              type="text"
              placeholder="Enter Pokemon name"
              className="search-field"
            />

            <div className="search-button">
              <FaSearch />

              <input type="submit" value="Search" />
            </div>
          </SearchForm>
        </div>
      </Container>
    </Header>
  );
};

export default header;
