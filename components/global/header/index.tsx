import React, { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import Header, { Menu, MenuItem, SearchForm } from './style';

import { Container } from '~/styles/global';

import { FaSearch } from 'react-icons/fa';

import { FaHome, FaStar, FaMoon, FaSun } from 'react-icons/fa';

import Switch from 'react-switch';

const header = () => {
  const [search, setSearch] = useState('');

  const [checked, setChecked] = useState(false);

  const handleChange = (): void => {
    setChecked(!checked);
  };

  const router = useRouter();

  const hasActiveMenuItem = useCallback((menuSlug: string): boolean => {
    return router.pathname === menuSlug;
  }, []);

  const handleSubmitForm = useCallback(e => {
    e.preventDefault();

    router.push(`/search/${search}`);
  }, []);

  return (
    <Header>
      <Container className="header-container">
        <div className="header-logo-container">
          <a href="/" title="Go to home page">
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
        </div>

        <div className="header-actions-continaer">
          <Menu>
            <ul>
              <MenuItem activeMenuItem={hasActiveMenuItem('/')}>
                <a href="/" title="Go to home page">
                  <FaHome /> Home
                </a>
              </MenuItem>

              <MenuItem activeMenuItem={hasActiveMenuItem('/favorites')}>
                <a href="/favorites" title="Your favorite pokemons">
                  <FaStar /> Favorites
                </a>
              </MenuItem>
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

          <SearchForm method="post" onSubmit={handleSubmitForm}>
            <input
              type="text"
              placeholder="Enter Pokemon name"
              className="search-field"
              value={search}
              onChange={e => setSearch(e.target.value)}
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
