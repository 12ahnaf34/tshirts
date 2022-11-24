import { useState, useEffect } from "react";
import { BsToggle2Off } from "react-icons/bs";
import { AppContainer, Title } from "../App.styled";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import { pants } from "../components/clothes";
import ClothesDisplay from "../components/ClothesDisplay/ClothesDisplay";

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

export default function Trousers(): JSX.Element {
  const [display, setDisplay] = useState<boolean>(false);
  const [clothes, setClothes] = useState<Cloth[]>(pants);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [postsPerPage, setPostsPerPage] = useState<number>(6);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentClothes, setCurrentClothes] = useState<Cloth[]>(clothes);

  const [filterDisplay, setFilterDisplay] = useState<boolean>(false);
  const [priceToggle, setPriceToggle] = useState<boolean>(false);
  const [colorFilters, setColorFilters] = useState<string>("Color");
  const [genderFilter, setGenderFilter] = useState<{ men: boolean; women: boolean }>({ men: false, women: false });

  useEffect(() => {
    const lastPostIndex: number = currentPage * postsPerPage;
    const firstPostIndex: number = lastPostIndex - postsPerPage;
    setTotalPages(Math.ceil(clothes.length / postsPerPage));

    let data = clothes.slice(firstPostIndex, lastPostIndex);
    setCurrentClothes(data);
  }, [currentPage, clothes, priceToggle, colorFilters]);

  const removeGenderFilter = () => {
    setGenderFilter({ men: false, women: false });
    if (clothes.length == 0) {
      setClothes(pants);
    } else {
      const filteredClothes = pants.filter((item) => colorFilters.toLowerCase() == item.color.toLowerCase());
      setClothes(filteredClothes);
    }
  };

  const runSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm === "") {
      setClothes(pants);
    } else {
      const filteredClothes = pants.filter((item) => {
        return (
          item.name.toLowerCase() == searchTerm.toLowerCase() ||
          item.tags.includes(searchTerm.toLowerCase()) ||
          item.company.toLowerCase() == searchTerm.toLowerCase() ||
          item.tags.includes(searchTerm.replace(/\s/g, "")) ||
          item.type.replace(/\s/g, "").includes(searchTerm.replace(/\s/g, ""))
        );
      });
      setColorFilters("Color");
      setClothes(filteredClothes);
    }
  };

  if (display)
    return (
      <AppContainer>
        <Navbar display={display} setDisplay={setDisplay} />
      </AppContainer>
    );
  else
    return (
      <AppContainer>
        <Navbar display={display} setDisplay={setDisplay} />
        <SearchBar
          runSearch={runSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterDisplay={filterDisplay}
          setFilterDisplay={setFilterDisplay}
          priceToggle={priceToggle}
          setPriceToggle={setPriceToggle}
          clothes={clothes}
          setClothes={setClothes}
          colorFilters={colorFilters}
          setColorFilters={setColorFilters}
          setGenderFilter={setGenderFilter}
          genderFilter={genderFilter}
        />
        <ClothesDisplay
          clothes={clothes}
          priceFilter={priceToggle}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentClothes={currentClothes}
          setGenderFilter={setGenderFilter}
          genderFilter={genderFilter}
          removeGenderFilter={removeGenderFilter}
        />
      </AppContainer>
    );
}
