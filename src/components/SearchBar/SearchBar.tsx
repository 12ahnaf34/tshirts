import React, { useState, useEffect, useCallback } from "react";
import { caps, pants, tShirts } from "../clothes";
import { Button, ColorSelect, Filter, FilterOptionsContainer, OneLine, Option, Search, SearchBarContainer, SearchButton, Thumbnail } from "./SearchBar.styled";
import { BsFillFilterSquareFill } from "react-icons/bs";
import type { Dispatch, SetStateAction } from "react";
import Tshirts from "../../pages/Tshirts";
import { Item } from "../Footer/Footer.styled";

interface SearchBarProps {
  clothes: {
    id: string;
    company: string;
    name: string;
    price: number;
    type: string;
    color: string;
    image: string;
    description: string;
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
        description: string;
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
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  runSearch: (e: React.FormEvent<HTMLFormElement>) => void;
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
    runSearch,
    currentPage,
    setCurrentPage,
  } = props;

  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    let currentColors: string[] = [];
    for (let a = 0; a < clothes.length; a++) {
      const firstChar = clothes[a].color.slice(0, 1).toUpperCase();
      const restOfString = clothes[a].color.slice(1, clothes[a].color.length);
      const final = firstChar + restOfString;
      if (!currentColors.includes(final)) currentColors.push(final);
    }
    setColors(currentColors);
  }, [clothes]);

  const filterToggle = () => setFilterDisplay((old) => !old);
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => setSearchTerm(e.currentTarget.value);

  const onRunSearch = (e: React.FormEvent<HTMLFormElement>) => runSearch(e);

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

  const filterColor = (e: React.ChangeEvent<HTMLSelectElement>, text?: string) => {
    if (clothes.length === 0) window.location.reload();
    if (e.target.value == "Color" || text == "Color") {
      const currentClothesType = clothes[0].id[0];
      if (currentClothesType === "T") setClothes(tShirts);
      else if (currentClothesType === "P") setClothes(pants);
      else if (currentClothesType === "C") setClothes(caps);

      setGenderFilter({ men: false, women: false });
      setColorFilters(e.target.value);
    } else {
      const filteredClothes = clothes.filter((item) => e.target.value.toLowerCase() == item.color.toLowerCase());
      setColorFilters(e.target.value);
      setClothes(filteredClothes);
      setCurrentPage(1);
    }
  };

  return (
    <SearchBarContainer>
      <OneLine onSubmit={onRunSearch}>
        <Filter onClick={filterToggle} />
        <Search onChange={handleSearch} />
        <SearchButton>Search</SearchButton>
      </OneLine>
      {filterDisplay && (
        <FilterOptionsContainer>
          <Button onClick={() => runGenderFilter("men")}>Male</Button>
          <Button onClick={() => runGenderFilter("women")}>Female</Button>
          <Button onClick={priceSort}>{priceToggle ? "Price: Descending" : "Price: Ascending"}</Button>
          <ColorSelect onChange={filterColor} value={colorFilters}>
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
