import { GroupBase, StylesConfig, ThemeConfig } from "react-select";
import ISelectOption from "../../interface/select.interface";

export const SelectStyle: StylesConfig<
  ISelectOption,
  false,
  GroupBase<ISelectOption>
> = {
  indicatorSeparator: () => ({ display: "none" }),
  container: (baseStyle) => ({
    ...baseStyle,
    width : "100%"
  }),
  control: (base) => ({
    ...base,
    boxShadow: "none",
    border: "1px solid #B1B1B1",
    ":hover": {
      border: "1px solid #53B175",
    },
  }),
  option: (baseStyle) => ({
    ...baseStyle,
    backgroundColor: "white",
    borderRadius: "4px",
    color: "black",
    ":hover": {
      backgroundColor: "#53B175",
      color: "white",
    },
  }),
  menu: (baseStyle) => ({
    ...baseStyle,
    borderRadius: "10px",
    border: "1px solid #B1B1B1",
  }),
};

export const SelectTheme: ThemeConfig = (theme) => ({
  ...theme,
  borderRadius: 10,
});
