import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  ClothesContainer,
  Card,
  Thumbnail,
  ClothesDisplayContainer,
  CompanyName,
  ItemName,
  TextArea,
  Pages,
  PageButton,
  PageNumber,
  NothingFound,
  FilterTag,
} from "./ClothesDisplay.styled";

//this was in as a variable not sure why??? type: string;
interface ClothesDisplayProps {
  clothes: {
    id: string;
    name: string;
    price: number;
    company: string;
    color: string;
    image: string;
    tags: string[];
  }[];

  currentClothes: {
    id: string;
    name: string;
    price: number;
    company: string;
    color: string;
    image: string;
    tags: string[];
  }[];

  priceFilter: boolean;
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  genderFilter: { men: boolean; women: boolean };
  setGenderFilter: Dispatch<SetStateAction<{ men: boolean; women: boolean }>>;
}

export default function ClothesDisplay(props: ClothesDisplayProps) {
  const { clothes, priceFilter, totalPages, currentPage, setCurrentPage, currentClothes, genderFilter, setGenderFilter } = props;

  let pages: number[] = [];
  for (let a = 1; a <= totalPages; a++) {
    pages.push(a);
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((old) => old - 1);
    }
    return;
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((old) => old + 1);
    }
  };

  //Needed to show filtered clothes
  if (currentPage > totalPages) previousPage();

  return (
    <ClothesDisplayContainer>
      <span style={{ marginTop: 20 }}>
        <FilterTag>{priceFilter ? "Descending" : "Ascending"}</FilterTag>
        {genderFilter.men && <FilterTag>Male</FilterTag>}
        {genderFilter.women && <FilterTag>Female</FilterTag>}
      </span>
      <ClothesContainer>
        {currentClothes.map((item) => {
          return (
            <Card key={item.id}>
              <Thumbnail loading="lazy" src={item.image} />
              <TextArea>
                <CompanyName>{item.company}</CompanyName>
                <ItemName>{item.name}</ItemName>
                <ItemName fontSize="3cqi">$ {item.price}</ItemName>
              </TextArea>
            </Card>
          );
        })}
      </ClothesContainer>
      {clothes.length > 0 ? (
        <Pages>
          <PageButton orientation="right" onClick={previousPage}>
            Previous
          </PageButton>
          <PageNumber>
            {currentPage} of {totalPages}
          </PageNumber>
          <PageButton orientation="left" onClick={nextPage}>
            Next
          </PageButton>
        </Pages>
      ) : (
        <NothingFound>No results match your query</NothingFound>
      )}
    </ClothesDisplayContainer>
  );
}