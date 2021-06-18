import Button from "@material-ui/core/Button";
import BrightButton from "../src/components/BrightButton";

export default function Home() {
  return (
    <div>
      <h1>Before something, was nothing!</h1>
      <Button variant="outlined" size="large">
        Button
      </Button>
      <Button variant="outlined" size="medium">
        Button
      </Button>
      <Button variant="outlined" size="small">
        Button
      </Button>
      <br />
      <Button variant="contained" size="large">
        Button
      </Button>
      <Button variant="contained" size="medium">
        Button
      </Button>
      <Button variant="contained" size="small">
        Button
      </Button>
      <br />
      <Button variant="text" size="large">
        Button
      </Button>
      <Button variant="text" size="medium">
        Button
      </Button>
      <Button variant="text" size="small">
        Button
      </Button>
      <br />
      <BrightButton size="large">Button</BrightButton>
      <BrightButton size="medium">Button</BrightButton>
      <BrightButton size="small">Button</BrightButton>
    </div>
  );
}
