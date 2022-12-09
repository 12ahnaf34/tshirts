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
  GenderFilterCloseButton,
  ThumbnailCap,
} from "./ClothesDisplay.styled";
import type { Cloth } from "../../pages/Tshirts";

//this was in as a variable not sure why??? type: string;
interface ClothesDisplayProps {
  clothes: Cloth[];
  currentClothes: Cloth[];
  priceFilter: boolean;
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  genderFilter: { men: boolean; women: boolean };
  setGenderFilter: Dispatch<SetStateAction<{ men: boolean; women: boolean }>>;
  removeGenderFilter: () => void;
}

export default function ClothesDisplayCaps(props: ClothesDisplayProps) {
  const { clothes, priceFilter, totalPages, currentPage, setCurrentPage, currentClothes, genderFilter, setGenderFilter, removeGenderFilter } = props;

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

  const saveState = (e: React.MouseEvent<HTMLAnchorElement>, product: Cloth) => {
    if (e.button === 1) localStorage.setItem("product", JSON.stringify(product));
    else localStorage.setItem("product", JSON.stringify(product));
  };

  useEffect(() => {
    //Needed to show filtered clothes
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage]);

  return (
    <ClothesDisplayContainer>
      <span style={{ marginTop: 20 }}>
        <FilterTag>{priceFilter ? "Descending" : "Ascending"}</FilterTag>
        {genderFilter.men && (
          <FilterTag>
            Male<GenderFilterCloseButton onClick={removeGenderFilter}>X</GenderFilterCloseButton>
          </FilterTag>
        )}
        {genderFilter.women && (
          <FilterTag>
            Female<GenderFilterCloseButton onClick={removeGenderFilter}>X</GenderFilterCloseButton>
          </FilterTag>
        )}
      </span>
      <ClothesContainer>
        {currentClothes.map((item) => {
          return (
            <Card key={item.id} to={`/product/${item.id}`} state={item} onMouseDown={(e) => saveState(e, item)}>
              <ThumbnailCap loading="lazy" src={item.image} />
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
