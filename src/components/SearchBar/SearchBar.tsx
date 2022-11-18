import React, { useState, useCallback } from "react";
import { caps, pants, tShirts } from "../clothes";
import { Button, ColorSelect, Filter, FilterOptionsContainer, OneLine, Option, Search, SearchBarContainer, SearchButton, Thumbnail } from "./SearchBar.styled";
import { BsFillFilterSquareFill } from "react-icons/bs";
import type { Dispatch, SetStateAction } from "react";
import Tshirts from "../../pages/Tshirts";

interface SearchBarProps {
  clothes: {
    id: string;
    company: string;
    name: string;
    price: number;
    type: string;
    color: string;
    image: string;
    tags: string[];
  }[];

  setClothes: Dispatch<
    SetStateAction<
      {
        id: string;
        company: string;
        name: string;
        price: number;
        type: string;
        color: string;
        image: string;
        tags: string[];
      }[]
    >
  >;

  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  filterDisplay: boolean;
  setFilterDisplay: Dispatch<SetStateAction<boolean>>;
  priceToggle: boolean;
  setPriceToggle: Dispatch<SetStateAction<boolean>>;
  colorFilters: string;
  setColorFilters: Dispatch<SetStateAction<string>>;
  genderFilter: { men: boolean; women: boolean };
  setGenderFilter: Dispatch<SetStateAction<{ men: boolean; women: boolean }>>;
}

interface Cloth {
  id: string;
  company: string;
  name: string;
  price: number;
  type: string;
  color: string;
  image: string;
  tags: string[];
}

export default function SearchBar(props: SearchBarProps) {
  const {
    searchTerm,
    setSearchTerm,
    filterDisplay,
    setFilterDisplay,
    priceToggle,
    setPriceToggle,
    clothes,
    setClothes,
    colorFilters,
    setColorFilters,
    genderFilter,
    setGenderFilter,
  } = props;

  const colors: string[] = ["Black", "Yellow", "Blue", "Green", "Grey", "Red", "Pink", "White"];

  const filterToggle = () => {
    setFilterDisplay((old) => !old);
  };

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm === "") {
      setClothes(tShirts);
    } else {
      const filteredClothes = tShirts.filter((item) => {
        return (
          item.name.toLowerCase() == searchTerm.toLowerCase() ||
          item.tags.includes(searchTerm.toLowerCase()) ||
          item.company.toLowerCase() == searchTerm.toLowerCase()
        );
      });

      setClothes(filteredClothes);
    }
  };

  const runGenderFilter = (gender: string) => {
    if (gender == "men") {
      setGenderFilter({ men: true, women: false });
    } else if (gender == "women") {
      setGenderFilter({ men: false, women: true });
    }

    if (clothes.length > 0) {
      const filteredClothes = clothes.filter((item) => {
        return item.tags.includes(gender);
      });
      setClothes(filteredClothes);
    }
  };

  const priceSort = useCallback(() => {
    setPriceToggle((old) => !old);
    if (priceToggle) {
      const sortedData = clothes.sort((a: Cloth, b: Cloth) => {
        return a.price > b.price ? 1 : -1;
      });
      setClothes(sortedData);
    } else {
      const sortedData = clothes.sort((a: Cloth, b: Cloth) => {
        return a.price < b.price ? 1 : -1;
      });
      setClothes(sortedData);
    }
  }, [clothes, priceToggle]);

  const filterColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == "Color") {
      setClothes(tShirts);
    } else {
      const filteredClothes = clothes.filter((item) => e.target.value.toLowerCase() == item.color.toLowerCase());
      setColorFilters(e.target.value);
      setClothes(filteredClothes);
    }
  };

  return (
    <SearchBarContainer>
      <OneLine onSubmit={onSubmit}>
        <Filter onClick={filterToggle} />
        <Search onChange={handleSearch} />
        <SearchButton>Search</SearchButton>
      </OneLine>
      {filterDisplay && (
        <FilterOptionsContainer>
          <Button onClick={() => runGenderFilter("men")}>Male</Button>
          <Button onClick={() => runGenderFilter("women")}>Female</Button>
          <Button onClick={priceSort}>{priceToggle ? "Price: Descending" : "Price: Ascending"}</Button>
          <ColorSelect onChange={filterColor}>
            <Option>Color</Option>
            {colors.map((item) => {
              return (
                <Option key={item} value={item}>
                  {item}
                </Option>
              );
            })}
          </ColorSelect>
        </FilterOptionsContainer>
      )}
    </SearchBarContainer>
  );
}
