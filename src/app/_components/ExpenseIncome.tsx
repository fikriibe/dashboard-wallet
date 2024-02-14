import { FC, useMemo } from "react";
import Typography from "../../components/atoms/Typography";

type Props = {
  expense: number;
  income: number;
};

const ExpenseIncomeSection: FC<Props> = ({ expense, income }) => {
  const percentage = useMemo(
    () => ({
      expense: ((expense / (expense + income)) * 100).toFixed(0),
      income: ((income / (expense + income)) * 100).toFixed(0),
    }),
    [expense, income]
  );
  return (
    <div className="flex flex-col gap-4">
      <Typography size="lg" variant="header">
        Expenses and income
      </Typography>
      <div className="flex">
        <div className="flex-1">
          <Typography>Expense</Typography>
          <Typography size="lg" variant="header">
            {percentage.expense}%
          </Typography>
          <Typography size="sm" className="text-neutral-300">
            {expense}
          </Typography>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="flex-1 w-[1px] bg-neutral-500" />
          <Typography size="sm">VS</Typography>
          <div className="flex-1 w-[1px] bg-neutral-500" />
        </div>
        <div className="flex-1 text-right">
          <Typography>Income</Typography>
          <Typography size="lg" variant="header">
            {percentage.income}%
          </Typography>
          <Typography size="sm" className="text-neutral-300">
            {income}
          </Typography>
        </div>
      </div>
      <div className="flex gap-1">
        <div
          style={{ width: `${percentage.expense}%` }}
          className="h-4 rounded-md bg-blue-500"
        />
        <div
          style={{ width: `${percentage.income}%` }}
          className="h-4 rounded-md bg-orange-500"
        />
      </div>
    </div>
  );
};

export default ExpenseIncomeSection;
