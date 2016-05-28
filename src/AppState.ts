import { observable } from "mobx";

export class AppState {
    @observable timer = 0;
    resetTimer() { this.timer = 0; }
};

export const appState = new AppState();

setInterval(() => appState.timer += 1, 1000);

function serializeState() {
    return { timer: appState.timer };
}

function deserializeState(state) {
    appState.timer = state.timer;
}

declare var module: any;
if (module.hot) {
    module.hot.accept();
    if (module.hot.data && module.hot.data.appState) {
        deserializeState(module.hot.data.appState);
    }
    module.hot.dispose(data => {
        data.appState = serializeState();
    });
}
