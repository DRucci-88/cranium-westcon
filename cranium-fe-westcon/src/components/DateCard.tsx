import Button from "./Button";

interface Props {
  date: number | string;
  month: number | string;
}

const DateCard: React.FC<Props> = ({ date = 1, month = 1 }) => {
    if (typeof month === 'number') {
        switch (month) {
            case 1: month = 'Jan'; break
            case 2: month = 'Feb'; break
            case 3: month = 'Mar'; break
            case 4: month = 'Apr'; break
            case 5: month = 'May'; break
            case 6: month = 'Jun'; break
            case 7: month = 'Jul'; break
            case 8: month = 'Aug'; break
            case 9: month = 'Sep'; break
            case 10: month = 'Oct'; break
            case 11: month = 'Nov'; break
            case 12: month = 'Dec'; break
            default: month = 'Jan';
        }
    }
    else {
        switch (month) {
            case '1': month = 'Jan'; break
            case '2': month = 'Feb'; break
            case '3': month = 'Mar'; break
            case '4': month = 'Apr'; break
            case '5': month = 'May'; break
            case '6': month = 'Jun'; break
            case '7': month = 'Jul'; break
            case '8': month = 'Aug'; break
            case '9': month = 'Sep'; break
            case '10': month = 'Oct'; break
            case '11': month = 'Nov'; break
            case '12': month = 'Dec'; break
            default: month = 'Jan';
        }
    }
  return (
    <Button
      type="button"
      variant="any"
      className="max-w-[unset] w-20 h-20 bg-primary-400 flex flex-col rounded-lg relative"
    >
      <p className="text-sm font-semibold">{month}</p>
      <h2 className="text-4xl font-sans font-bold -mt-0.5">{date}</h2>
    </Button>
  );
};

export default DateCard;
