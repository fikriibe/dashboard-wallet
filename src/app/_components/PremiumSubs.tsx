import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { PiCrownBold } from "react-icons/pi";

const PremiumSubs = () => {
  return (
    <div className="flex flex-col gap-3">
      <Typography className="self-center" variant="header" size="sm">
        Go to premium
      </Typography>
      <PiCrownBold size={100} />
      <div>
        <Typography variant="header" size="lg">
          Need more features?
        </Typography>
        <Typography className="text-neutral-400">
          Update your account to premium to get more features
        </Typography>
      </div>
      <Button variant="contained" size="lg">
        Get now
      </Button>
    </div>
  );
};

export default PremiumSubs;
