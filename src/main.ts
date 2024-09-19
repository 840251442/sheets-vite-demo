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
import { FUniver } from "@univerjs/facade";
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
const workbook: any = univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
  "id": "workbook-01",
  "sheetOrder": [
      "sheet-01"
  ],
  "name": "",
  "appVersion": "0.1.11",
  "locale": "zhCN",
  "styles": {},
  "sheets": {
      "sheet-01": {
          id: 'sheet-01',
          "name": "测试",
          "tabColor": "",
          "hidden": 0,
          "rowCount": 30,
          "columnCount": 10,
          "zoomRatio": 1,
          "freeze": {
              "startRow": -1,
              "startColumn": -1,
              "ySplit": 0,
              "xSplit": 0
          },
          "scrollTop": 0,
          "scrollLeft": 0,
          "defaultColumnWidth": 73,
          "defaultRowHeight": 23,
          "mergeData": [],
          cellData: {
            0: {
              0: {
                v: 'Hello World',
                custom: {
                    a: 1,
                    b: 2,
                    c: 3
                }
              },
            },
          },
          "rowData": {},
          "columnData": {
              "0": {
                  "w": 125,
                  "hd": 0
              },
              "1": {
                  "w": 125,
                  "hd": 0
              },
              "2": {
                  "w": 125,
                  "hd": 0
              },
              "3": {
                  "w": 125,
                  "hd": 0
              },
              "4": {
                  "w": 125,
                  "hd": 0
              },
              "5": {
                  "w": 125,
                  "hd": 0
              },
              "6": {
                  "w": 125,
                  "hd": 0
              },
              "7": {
                  "w": 125,
                  "hd": 0
              },
              "8": {
                  "w": 125,
                  "hd": 0
              },
              "9": {
                  "w": 125,
                  "hd": 0
              }
          },
          "showGridlines": 1,
          "rowHeader": {
              "width": 46,
              "hidden": 0
          },
          "columnHeader": {
              "height": 20,
              "hidden": 0
          },
          "selections": [
              "A1"
          ],
          "rightToLeft": 0
      }
  },
  "resources": [
      {
          "name": "SHEET_DEFINED_NAME_PLUGIN",
          "data": ""
      }
  ]
}
);
const getData = () => {
    if (!workbook) {
        throw new Error("Workbook is not initialized");
    }
    return workbook?.save();
};
const univerAPI = FUniver.newAPI(univer);
        setTimeout(() => {
            univerAPI.executeCommand("sheet.operation.set-selections", {
                unitId: "__INTERNAL_EDITOR__DOCS_NORMAL",
                subUnitId: "",
                segmentId: "",
                style: {
                    strokeWidth: 1.5,
                    stroke: "rgba(0, 0, 0, 0)",
                    strokeActive: "rgba(0, 0, 0, 1)",
                    fill: "rgba(128, 188, 254, 0.6)",
                },
                isEditing: true,
                ranges: [
                    {
                        startOffset: 0,
                        endOffset: 0,
                        collapsed: true,
                        isActive: true,
                    },
                ],
            });
            univerAPI.executeCommand("sheet.operation.set-activate-cell-edit", {
                sheetId: "sheet-01",
                unitId: "workbook-01",
                primary: {
                    actualRow: 0,
                    actualColumn: 0,
                    isMerged: false,
                    isMergedMainCell: false,
                    startRow: 0,
                    startColumn: 0,
                    endRow: 0,
                    endColumn: 0,
                },
            });
            univerAPI.executeCommand("sheet.operation.set-activate-cell-edit", {
                primary: {
                    actualRow: 0,
                    actualColumn: 0,
                    isMerged: false,
                    isMergedMainCell: false,
                    startRow: 0,
                    startColumn: 0,
                    endRow: 0,
                    endColumn: 0,
                },
                sheetId: "sheet-01",
                unitId: "workbook-01",
            });
            univerAPI.executeCommand("sheet.operation.set-selections", {
                unitId: "workbook-01",
                subUnitId: "sheet-01",
                type: 2,
                selections: [
                    {
                        range: {
                            startRow: 0,
                            startColumn: 0,
                            endRow: 0,
                            endColumn: 0,
                            rangeType: 0,
                            unitId: "workbook-01",
                            sheetId: "sheet-01",
                        },
                        primary: {
                            actualRow: 0,
                            actualColumn: 0,
                            isMerged: false,
                            isMergedMainCell: false,
                            startRow: 0,
                            startColumn: 0,
                            endRow: 0,
                            endColumn: 0,
                        },
                        style: {
                            strokeWidth: 1,
                            stroke: "#274fee",
                            fill: "rgba(39,79,238,0.07)",
                            widgets: {},
                            widgetSize: 6,
                            widgetStrokeWidth: 1,
                            widgetStroke: "#ffffff",
                            hasAutoFill: true,
                            AutofillSize: 6,
                            AutofillStrokeWidth: 1,
                            AutofillStroke: "#ffffff",
                            hasRowHeader: true,
                            rowHeaderFill: "rgba(39,79,238,0.07)",
                            rowHeaderStroke: "#274fee",
                            rowHeaderStrokeWidth: 1,
                            hasColumnHeader: true,
                            columnHeaderFill: "rgba(39,79,238,0.07)",
                            columnHeaderStroke: "#274fee",
                            columnHeaderStrokeWidth: 1,
                            expandCornerSize: 40,
                        },
                    },
                ],
            });
        }, 100)
        setTimeout(() => {
            univerAPI.executeCommand("univer.command.copy", {
                params: undefined,
            });
            univerAPI.executeCommand("sheet.operation.set-activate-cell-edit", {
                primary: {
                    actualRow: 0,
                    actualColumn: 1,
                    isMerged: false,
                    isMergedMainCell: false,
                    startRow: 0,
                    startColumn: 1,
                    endRow: 0,
                    endColumn: 1,
                },
                sheetId: "sheet-01",
                unitId: "workbook-01",
            });
            univerAPI.executeCommand("sheet.operation.set-selections", {
                unitId: "workbook-01",
                subUnitId: "sheet-01",
                type: 2,
                selections: [
                    {
                        range: {
                            startRow: 0,
                            startColumn: 1,
                            endRow: 0,
                            endColumn: 1,
                            rangeType: 0,
                            unitId: "workbook-01",
                            sheetId: "sheet-01",
                        },
                        primary: {
                            actualRow: 0,
                            actualColumn: 1,
                            isMerged: false,
                            isMergedMainCell: false,
                            startRow: 0,
                            startColumn: 1,
                            endRow: 0,
                            endColumn: 1,
                        },
                        style: {
                            strokeWidth: 1,
                            stroke: "#274fee",
                            fill: "rgba(39,79,238,0.07)",
                            widgets: {},
                            widgetSize: 6,
                            widgetStrokeWidth: 1,
                            widgetStroke: "#ffffff",
                            hasAutoFill: true,
                            AutofillSize: 6,
                            AutofillStrokeWidth: 1,
                            AutofillStroke: "#ffffff",
                            hasRowHeader: true,
                            rowHeaderFill: "rgba(39,79,238,0.07)",
                            rowHeaderStroke: "#274fee",
                            rowHeaderStrokeWidth: 1,
                            hasColumnHeader: true,
                            columnHeaderFill: "rgba(39,79,238,0.07)",
                            columnHeaderStroke: "#274fee",
                            columnHeaderStrokeWidth: 1,
                            expandCornerSize: 40,
                        },
                    },
                ],
            });
            univerAPI.executeCommand("sheet.command.paste-bu-short-key", {
                "htmlContent": "<meta charset='utf-8'><html><head></head><body><google data-copy-id=\"uvGAq5\" -sheets-html-origin=\"\"><table xmlns=\"http://www.w3.org/1999/xhtml\" cellspacing=\"0\" cellpadding=\"0\" dir=\"ltr\" style=\"table-layout:fixed;font-size:10pt;font-family:Arial;width:0px;border-collapse:collapse;border:none\"><colgroup><col width=\"93\"></colgroup>\n<tbody><tr style=\"height: 27px;\"><td>Hello World</td></tr></tbody></table></google></body></html>",
                "textContent": "Hello World"
            })
            console.log(getData(), "getData");  // The second cell is copied from the first cell and may lack the custom attribute
        }, 5000);
