import { plugin } from "@vendetta";
import { findByProps, findByStoreName } from "@vendetta/metro";
import { FluxDispatcher } from "@vendetta/metro/common";

import Settings from "./Settings";
import { flush, initialize, patchActivityType } from "./utils";

export const global = {} as {
    pluginStopped?: boolean,
    lastActivity?: Activity,
    updateInterval?: NodeJS.Timer,
    lastTrackUrl?: string,
    activityTypeUnpatch?: () => boolean
};

export const currentSettings = { ...plugin.storage } as PluginSettings;

// Discord modules that we need
export const UserStore = findByStoreName("UserStore");
export const SET_ACTIVITY = findByProps("SET_ACTIVITY").SET_ACTIVITY;

export const verboseLog = (...message: any) => currentSettings.verboseLogging && console.log(...message);

// Plugin entry point
export default {
    onLoad: () => {
        console.log("Starting last.fm plugin..");
        global.activityTypeUnpatch = patchActivityType();
        global.pluginStopped = false;

        if (UserStore.getCurrentUser()) {
            console.log("User is already logged in, initializing...");
            initialize().catch(console.error);
        }

        FluxDispatcher.subscribe("CONNECTION_OPEN", () => {
            initialize().catch(console.error);
        });
    },
    onUnload: () => {
        console.log("Stopping last.fm...");

        global.pluginStopped = true;

        flush();
        global.activityTypeUnpatch?.();
        global.activityTypeUnpatch = null;
    },
    settings: Settings
};
