import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Website development</td>
              <td>
                <PriceHighLight variant="income">$ 12,000.00</PriceHighLight>
              </td>
              <td>Sale</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighLight variant="outcome">$ 12,000.00</PriceHighLight>
              </td>
              <td>Food</td>
              <td>04/13/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
