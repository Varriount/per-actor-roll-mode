<!--
SPDX-FileCopyrightText: 2022 Johannes Loher

SPDX-License-Identifier: MIT
-->

# Per Actor Roll Mode

[![Checks](https://github.com/ghost-fvtt/per-actor-roll-mode/workflows/Checks/badge.svg)](https://github.com/ghost-fvtt/per-actor-roll-mode/actions)
![Supported Foundry Versions](https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/ghost-fvtt/per-actor-roll-mode/releases/latest/download/module.json)
![Latest Release Download Count](https://img.shields.io/github/downloads/ghost-fvtt/per-actor-roll-mode/latest/module.zip)
[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fper-actor-roll-mode&colorB=4aa94a)](https://forge-vtt.com/bazaar#package=per-actor-roll-mode)
[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fper-actor-roll-mode%2Fshield%2Fendorsements)](https://www.foundryvtt-hub.com/package/per-actor-roll-mode/)
[![REUSE status](https://api.reuse.software/badge/github.com/ghost-fvtt/per-actor-roll-mode)](https://api.reuse.software/info/github.com/ghost-fvtt/per-actor-roll-mode)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-ghostfvtt-00B9FE?logo=kofi)](https://ko-fi.com/ghostfvtt)

A module for [Foundry Virtual Tabletop] that allows overriding the selected roll mode on a per-actor basis.

## Installation

To install and use Per Actor Roll Mode, simply paste the following URL into the
**Install Module** dialog on the Setup menu of Foundry Virtual Tabletop.

https://github.com/ghost-fvtt/per-actor-roll-mode/releases/latest/download/module.json


## Development

### Prerequisites

In order to build this module, recent versions of `node` and `npm` are
required. Most likely using `yarn` also works but only `npm` is officially
supported. We recommend using the latest lts version of `node`. If you use `nvm`
to manage your `node` versions, you can simply run

```
nvm install
```

in the project's root directory.

You also need to install the project's dependencies. To do so, run

```
npm install
```

### Building

You can build the project by running

```
npm run build
```

Alternatively, you can run

```
npm run watch
```

to watch for changes and automatically build as necessary.

### Linking the built project to Foundry VTT

In order to provide a fluent development experience, it is recommended to link
the built module to your local Foundry VTT installation's data folder. In
order to do so, first add a file called `foundryconfig.json` to the project root
with the following content:

```
{
  "dataPath": "/absolute/path/to/your/FoundryVTT"
}
```

(if you are using Windows, make sure to use `\` as a path separator instead of
`/`)

Then run

```
npm run link-package
```

On Windows, creating symlinks requires administrator privileges, so
unfortunately you need to run the above command in an administrator terminal for
it to work.

## Licensing

This project is being developed under the terms of the
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT] for Foundry Virtual Tabletop.

The project itself uses [REUSE] to specify the used licenses. Currently,
everything is licensed under the [MIT] license. More information
(including the copyright holders) can be found in the individual files.

[Foundry Virtual Tabletop]: https://foundryvtt.com/
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT]: https://foundryvtt.com/article/license/
[REUSE]: https://reuse.software/
[MIT]: LICENSES/MIT.txt
