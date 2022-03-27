import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import theme from "./src/template/theme";
import { makeStyles } from "@mui/system";
import transform from "lodash/transform";

configure({ adapter: new Adapter() });

jest.mock("@mui/styles", () => ({
  ...jest.requireActual("@mui/styles"),
  makeStyles: jest.fn(),
}));

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: jest.fn(),
}));


(makeStyles as jest.Mock).mockImplementation((fn) => {
  const themeValues = typeof fn === "function" ? fn(theme) : fn;
  const newThemeValues = transform(
    themeValues,
    (result: object, _, key: string) => {
      // @ts-ignore
      result[key] = key;
    }
  );

  return jest.fn(() => newThemeValues);
});

jest.mock("@lottiefiles/react-lottie-player", () => ({
  Player: () => <div />,
}));
