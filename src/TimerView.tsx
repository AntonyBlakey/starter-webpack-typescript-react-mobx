import * as React from "react";
import { observer } from "mobx-react";
import { AppState } from "./AppState";


@observer
export class TimerView extends React.Component<{ appState: AppState }, {}> {

    render() {
        return (
            <button onClick={this.onReset}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }

    onReset = () => { this.props.appState.resetTimer(); }

}
