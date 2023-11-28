import { useContext } from "react";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color="#80b37e" />
        </header>

        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{summary.outcome}0</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>

        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
