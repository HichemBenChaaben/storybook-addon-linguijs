import React from "react";
import addons from "@storybook/addons";
import { ADDON_ID, PANEL_ID } from "../shared";
import LocalePanel from "../manager/containers/LocalePanel/index";

export function register() {
  addons.register(ADDON_ID, () => {
    addons.addPanel(PANEL_ID, {
      title: "Locales",
      render: props => (
        <LocalePanel
          key={(props && typeof props === "object" && props.key) || undefined}
          active={!props || props.active}
          channel={addons.getChannel()}
        />
      )
    });
  });
}
