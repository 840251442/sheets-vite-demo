import "./style.css";

import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";

/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
import { zhCN, enUS } from 'univer:locales'

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: enUS,
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);

// create univer sheet instance
const work: any = univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
    "id": "workbook-01",
    "sheetOrder": [
        "sheet-01",
        "sheet-02",
        "sheet-03"
    ],
    "name": "universheet",
    "appVersion": "3.0.0-alpha",
    "locale": "zhCN",
    "styles": {
        "ZBx-Mb": {
            "bd": {
                "t": null,
                "b": null,
                "r": null,
                "l": null
            }
        },
        "hcu9cZ": {
            "bd": {
                "t": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "l": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            }
        },
        "ZQGRB0": {
            "bd": {
                "t": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "r": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            }
        },
        "rFF4aY": {
            "bd": {
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                },
                "l": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            }
        }
    },
    "sheets": {
        "sheet-01": {
            "type": 0,
            "id": "sheet-01",
            "cellData": {
                "0": {
                    "0": {
                        "s": "hcu9cZ"
                    },
                    "1": {
                        "s": "ZQGRB0"
                    },
                    "2": {
                        "s": "ZBx-Mb"
                    }
                },
                "1": {
                    "0": {
                        "s": "ZBx-Mb"
                    },
                    "1": {
                        "s": "rFF4aY"
                    },
                    "2": {
                        "s": "ZQGRB0"
                    },
                    "3": {
                        "s": "ZBx-Mb"
                    }
                },
                "2": {
                    "1": {
                        "s": "ZBx-Mb"
                    },
                    "2": {
                        "s": "ZBx-Mb"
                    }
                }
            },
            "name": "sheet1",
            "tabColor": "red",
            "hidden": 0,
            "rowCount": 1000,
            "columnCount": 20,
            "zoomRatio": 1,
            "scrollTop": 200,
            "scrollLeft": 100,
            "defaultColumnWidth": 93,
            "defaultRowHeight": 27,
            "status": 1,
            "showGridlines": 1,
            "hideRow": [],
            "hideColumn": [],
            "rowHeader": {
                "width": 46,
                "hidden": 0
            },
            "columnHeader": {
                "height": 20,
                "hidden": 0
            },
            "selections": [
                "A2"
            ],
            "rightToLeft": 0,
            "pluginMeta": {},
            "freeze": {
                "xSplit": 0,
                "ySplit": 0,
                "startRow": -1,
                "startColumn": -1
            },
            "mergeData": [
                {
                    "startRow": 0,
                    "startColumn": 0,
                    "endRow": 0,
                    "endColumn": 1,
                    "rangeType": 0,
                    "unitId": "workbook-01",
                    "sheetId": "sheet-01"
                },
                {
                    "startRow": 1,
                    "startColumn": 1,
                    "endRow": 1,
                    "endColumn": 2,
                    "rangeType": 0,
                    "unitId": "workbook-01",
                    "sheetId": "sheet-01"
                }
            ],
            "rowData": {
                "0": {
                    "hd": 0,
                    "h": 27
                }
            },
            "columnData": {
                "1": {
                    "w": 93,
                    "hd": 0
                }
            }
        },
        "sheet-02": {
            "type": 0,
            "id": "sheet-02",
            "name": "sheet2",
            "cellData": {},
            "tabColor": "",
            "hidden": 0,
            "rowCount": 1000,
            "columnCount": 20,
            "zoomRatio": 1,
            "freeze": {
                "xSplit": 0,
                "ySplit": 0,
                "startRow": -1,
                "startColumn": -1
            },
            "scrollTop": 0,
            "scrollLeft": 0,
            "defaultColumnWidth": 88,
            "defaultRowHeight": 24,
            "mergeData": [],
            "rowData": {},
            "columnData": {},
            "showGridlines": 1,
            "rowHeader": {
                "width": 46,
                "hidden": 0
            },
            "columnHeader": {
                "height": 20,
                "hidden": 0
            },
            "rightToLeft": 0
        },
        "sheet-03": {
            "type": 0,
            "id": "sheet-03",
            "name": "sheet3",
            "cellData": {},
            "tabColor": "",
            "hidden": 0,
            "rowCount": 1000,
            "columnCount": 20,
            "zoomRatio": 1,
            "freeze": {
                "xSplit": 0,
                "ySplit": 0,
                "startRow": -1,
                "startColumn": -1
            },
            "scrollTop": 0,
            "scrollLeft": 0,
            "defaultColumnWidth": 88,
            "defaultRowHeight": 24,
            "mergeData": [],
            "rowData": {},
            "columnData": {},
            "showGridlines": 1,
            "rowHeader": {
                "width": 46,
                "hidden": 0
            },
            "columnHeader": {
                "height": 20,
                "hidden": 0
            },
            "rightToLeft": 0
        }
    },
    "resources": []
}
);

console.log(work.save())