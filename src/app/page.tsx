import ExpenseIncomeSection from "@/app/_components/ExpenseIncome";
import ButtonIcon from "@/components/atoms/ButtonIcon";
import Card from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { PiMagnifyingGlass } from "react-icons/pi";
import Account from "./_components/Account";
import Analytics from "./_components/Analytics";
import BalanceStatistic from "./_components/BalanceStatistic";
import Chat from "./_components/Chat";
import LastTransaction from "./_components/LastTransaction";
import LatestSpending from "./_components/LatestSpending";
import ListToBuy from "./_components/ListToBuy";
import PremiumSubs from "./_components/PremiumSubs";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 bg-neutral-100 h-full">
      <div className="col-span-4 lg:col-span-3 py-3 px-4 lg:py-6 lg:px-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="header" size="xl">
              Hello, John.D
            </Typography>
            <Typography size="sm">
              View and control your finances here!
            </Typography>
          </div>
          <ButtonIcon>
            <PiMagnifyingGlass size={20} />
          </ButtonIcon>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="lg:col-span-3 col-span-5">
            <Card withPadding>
              <BalanceStatistic />
            </Card>
          </div>
          <div className="lg:col-span-2 col-span-5">
            <Card>
              <Account />
            </Card>
          </div>
        </div>

        <Card>
          <div className="flex lg:flex-row flex-col [&>div]:p-4 [&>div]:flex-1">
            <ListToBuy />
            <span className=" self-stretch lg:w-[1px] h-[1px] lg:h-[unset] bg-neutral-300" />
            <Chat />
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 lg:col-span-2">
            <Card withPadding>
              <LastTransaction />
            </Card>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <Card withPadding>
              <Analytics />
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 flex flex-col gap-4 col-span-4 lg:col-span-1">
        <Card withBorder withPadding>
          <ExpenseIncomeSection expense={5653} income={2430} />
        </Card>
        <Card withBorder withPadding>
          <LatestSpending />
        </Card>
        <Card withBorder withPadding>
          <PremiumSubs />
        </Card>
      </div>
    </main>
  );
}
