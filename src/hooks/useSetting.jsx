import { useContext } from "react";
import { SettingContext } from "../contextApi/SettingContextApi";

export const useSetting = ()=>useContext(SettingContext)