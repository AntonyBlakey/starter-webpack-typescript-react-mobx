import * as React from "react";
import { observer } from "mobx-react";
import { AppState } from "./AppState";
import { TimerView } from "./TimerView";


const _RootView = ({ appState }) => <TimerView appState={appState}/>;

export const RootView = observer(_RootView);
