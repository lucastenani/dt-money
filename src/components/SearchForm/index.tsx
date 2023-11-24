import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for transactions" />

      <button>
        <MagnifyingGlass size={20} /> Search
      </button>
    </SearchFormContainer>
  );
}
