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
univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
    "id": "workbook-01",
    "local": "zhCN",
    "name": "workbook-01",
    "sheetOrder": [
        "1"
    ],
    "sheets": {
        "1": {
            "type": 0,
            "id": "1",
            "name": "工作表",
            "hidden": 0,
            "rowCount": 7,
            "columnCount": 14,
            "zoomRatio": 1,
            "defaultColumnWidth": 93,
            "defaultRowHeight": 27,
            "status": 1,
            "showGridlines": 1,
            "hideRow": [],
            "hideColumn": [],
            "rightToLeft": 0,
            "pluginMeta": {},
            "rowHeader": {
                "width": 46,
                "hidden": 0
            },
            "columnHeader": {
                "height": 20,
                "hidden": 0
            },
            "rowData": {
                "1": {
                    "h": 27,
                    "ah": 27,
                    "ia": 0
                },
                "2": {
                    "h": 27,
                    "ah": 27,
                    "ia": 0
                },
                "3": {
                    "h": 27,
                    "ah": 27,
                    "ia": 0
                },
                "4": {
                    "h": 27,
                    "ah": 27,
                    "ia": 0
                },
                "5": {
                    "h": 27,
                    "ah": 27,
                    "ia": 0
                },
                "6": {
                    "h": 27,
                    "ah": 27,
                    "ia": 0
                }
            },
            "columnData": {
                "0": {
                    "w": 152
                },
                "1": {
                    "w": 183
                },
                "2": {
                    "w": 177
                },
                "5": {
                    "w": 177
                },
                "8": {
                    "w": 177
                },
                "11": {
                    "w": 177
                }
            },
            "cellData": {
                "1": {
                    "0": {
                        "v": "",
                        "s": "5c0f4ab0-f94d-440e-8546-c8285d0d6e45"
                    },
                    "1": {
                        "v": "",
                        "s": "fa5380ba-69da-4a19-b391-9d5b231bb6cd"
                    },
                    "2": {
                        "v": "甲方奖励",
                        "s": "26a70a34-719c-4a6d-80d7-272a88f0477b"
                    },
                    "3": {
                        "s": "5d0fadc3-a721-4f49-a72a-57b6fd71e94e"
                    },
                    "4": {
                        "s": "a7030a21-2833-40fe-aaa0-42ee3c3cee78"
                    },
                    "5": {
                        "v": "进度款",
                        "s": "7c3ae9fe-1863-4f8d-9c2a-1e15fff56932"
                    },
                    "6": {
                        "s": "b0f94b86-98f7-4987-b738-b43e8cffb56a"
                    },
                    "7": {
                        "s": "50938883-a07c-4d7b-bd9d-ccd95144e0df"
                    },
                    "8": {
                        "v": "结算款",
                        "s": "57f37d28-be55-47b9-9427-b19658f863d1"
                    },
                    "9": {
                        "s": "9b2fe04c-3fc6-4c90-a9ec-a8408263bdef"
                    },
                    "10": {
                        "s": "f4d54756-6b2c-41fd-9562-662de64d2524"
                    },
                    "11": {
                        "v": "预付款",
                        "s": "c2dc72e5-bd11-4498-b281-fb6890f8b051"
                    },
                    "12": {
                        "s": "39a82d4a-0705-42b9-afe6-993b6ab180a4"
                    },
                    "13": {
                        "s": "d4cdd509-204d-4db1-b8b6-b142ac9c06d2"
                    }
                },
                "2": {
                    "0": {
                        "v": "客户",
                        "s": "b9eabc16-8733-484a-8784-fed317876417"
                    },
                    "1": {
                        "v": "收款总额",
                        "s": "34e49f21-c3af-46fb-a48d-fa13e7aaac21"
                    },
                    "2": {
                        "v": "收款金额",
                        "s": "927a1451-4fab-41d0-87d5-83ca05347e1f"
                    },
                    "3": {
                        "v": "同类型占比",
                        "s": "67322c8d-f7c5-4df9-a6d1-6667055e3332"
                    },
                    "4": {
                        "v": "同客户占比",
                        "s": "76c2064c-7dad-4271-9aa6-631cfa82ce00"
                    },
                    "5": {
                        "v": "收款金额",
                        "s": "3cefd1d0-406f-4f78-9be2-e47d49645857"
                    },
                    "6": {
                        "v": "同类型占比",
                        "s": "a9bc0a29-487a-485c-a7f3-44813fd63ced"
                    },
                    "7": {
                        "v": "同客户占比",
                        "s": "8af9d03a-c7cd-4609-b231-2c364818ef72"
                    },
                    "8": {
                        "v": "收款金额",
                        "s": "6b0000c5-b9e7-4bf8-b942-9c4a7f7aa8fb"
                    },
                    "9": {
                        "v": "同类型占比",
                        "s": "141ac32c-d752-4a12-9f7a-d616b0bcdf92"
                    },
                    "10": {
                        "v": "同客户占比",
                        "s": "3b51b4e1-23de-4912-bad7-9faf465c1a97"
                    },
                    "11": {
                        "v": "收款金额",
                        "s": "ce6c461f-b6ba-4829-bf7c-bfde09cfdf62"
                    },
                    "12": {
                        "v": "同类型占比",
                        "s": "f7b6d19f-1b51-4145-9987-4e3a1c0b472e"
                    },
                    "13": {
                        "v": "同客户占比",
                        "s": "e785e31b-f1d8-4346-b66a-7dde89390ed7"
                    }
                },
                "3": {
                    "0": {
                        "v": "湖北省农药风险监测中心(含田间监测点)",
                        "s": "4ae618d9-927f-4388-ab94-9996294914e9"
                    },
                    "1": {
                        "v": "210000",
                        "s": "91e9583d-9c16-4427-b718-91ace7089c36"
                    },
                    "2": {
                        "v": "30000",
                        "s": "b72f164b-9dd7-45cb-a4df-d0f682ddf40c"
                    },
                    "3": {
                        "v": "100.00%",
                        "s": "a68d8887-a4c3-492d-95ff-b4ccecf074c5"
                    },
                    "4": {
                        "v": "14.29%",
                        "s": "3d39f2d4-007d-4886-902d-ad6b6693a81a"
                    },
                    "5": {
                        "v": "150000",
                        "s": "8a55cac7-f306-47ac-b265-960fd3007a9a"
                    },
                    "6": {
                        "v": "48.39%",
                        "s": "e54f525e-4da2-404c-a7d8-89b424bdc818"
                    },
                    "7": {
                        "v": "71.43%",
                        "s": "a02fc0b7-611a-45d9-9c11-3ff347192bd2"
                    },
                    "8": {
                        "v": "30000",
                        "s": "6c74c027-3b6d-41ed-b676-84872da9433e"
                    },
                    "9": {
                        "v": "19.71%",
                        "s": "971533e4-2f5b-4969-ad71-1c51bddfdd77"
                    },
                    "10": {
                        "v": "14.29%",
                        "s": "53eda94a-92bd-4613-bab2-62ee97e3ea43"
                    },
                    "11": {
                        "v": "",
                        "s": "203d9b70-2edb-4b83-974c-03158ed5ab4d"
                    },
                    "12": {
                        "v": "",
                        "s": "9af710d9-276b-4c39-9567-24bb82eeb887"
                    },
                    "13": {
                        "v": "",
                        "s": "fe577d20-4c7e-48cd-8ba4-b876530d6f11"
                    }
                },
                "4": {
                    "0": {
                        "v": "华中师范大学",
                        "s": "b3fa3e2c-09d9-4145-8bb4-3971a2105f73"
                    },
                    "1": {
                        "v": "296090",
                        "s": "d0c3865c-d0a8-4666-b0c0-86c331aa88e9"
                    },
                    "2": {
                        "v": "",
                        "s": "c4b76e33-031c-4384-9902-4e3a31995554"
                    },
                    "3": {
                        "v": "",
                        "s": "a04e25e0-7d41-4806-a404-36b6db0da83e"
                    },
                    "4": {
                        "v": "",
                        "s": "1da812d2-7be4-4c68-be07-0673f8e8b5b9"
                    },
                    "5": {
                        "v": "98000",
                        "s": "08bf8bc4-4584-4617-b435-4d88c3ce211c"
                    },
                    "6": {
                        "v": "31.61%",
                        "s": "0b1aa519-4eec-4d0e-9335-68a28486deab"
                    },
                    "7": {
                        "v": "33.10%",
                        "s": "e51dbe1f-5a15-4018-b0b8-3448e78cd3a3"
                    },
                    "8": {
                        "v": "",
                        "s": "9da54190-6891-4f7f-b5c1-5dcceac5c9a3"
                    },
                    "9": {
                        "v": "",
                        "s": "690e4786-ff35-448d-a0d2-2a323e2f3cba"
                    },
                    "10": {
                        "v": "",
                        "s": "f5a389e6-f0db-4307-837b-d73639e63bb8"
                    },
                    "11": {
                        "v": "198090",
                        "s": "1d71aed0-f364-4837-abe3-21896e6665d9"
                    },
                    "12": {
                        "v": "89.64%",
                        "s": "eb26310c-2ffe-4a93-aab5-25cdb29a6633"
                    },
                    "13": {
                        "v": "66.90%",
                        "s": "dae6ed43-83b3-48bd-82ae-1b0178fcf06a"
                    }
                },
                "5": {
                    "0": {
                        "v": "西安科学城省食品药品学校",
                        "s": "54360c93-1ebc-4846-801d-56f22c39b369"
                    },
                    "1": {
                        "v": "207113",
                        "s": "9044efe4-a55c-4b5a-8cda-1c88c8aebd04"
                    },
                    "2": {
                        "v": "",
                        "s": "1baa101a-dba1-4566-9e46-4d081669f391"
                    },
                    "3": {
                        "v": "",
                        "s": "cf90d7d1-b22a-425d-b314-bb43a3511471"
                    },
                    "4": {
                        "v": "",
                        "s": "01d359ab-3cfe-4052-9b57-be96033bab38"
                    },
                    "5": {
                        "v": "62000",
                        "s": "c3c27d8f-23f9-42a6-824e-230efa9548fa"
                    },
                    "6": {
                        "v": "20.00%",
                        "s": "b3b78233-f1af-4eea-b08d-f913027f60b9"
                    },
                    "7": {
                        "v": "29.94%",
                        "s": "12892e2c-09b6-4a47-a0da-9363ed7ed4b0"
                    },
                    "8": {
                        "v": "122213",
                        "s": "c46ecf90-d2f5-44d5-9a98-10e43c3d8162"
                    },
                    "9": {
                        "v": "80.29%",
                        "s": "ed6ab084-fa22-40a3-b993-555235f71da7"
                    },
                    "10": {
                        "v": "59.01%",
                        "s": "23ed5157-0606-476a-a952-fe5733beaf01"
                    },
                    "11": {
                        "v": "22900",
                        "s": "85023dca-e4d9-41a8-b674-45b0b1f8f601"
                    },
                    "12": {
                        "v": "10.36%",
                        "s": "bd6533db-7a3e-4d7f-af7e-82b8e1483ace"
                    },
                    "13": {
                        "v": "11.06%",
                        "s": "c88dd9fe-91bd-4eb3-b851-a628c48b9e1a"
                    }
                },
                "6": {
                    "0": {
                        "v": "小计",
                        "s": "96e44203-3f65-456a-925f-088518046671"
                    },
                    "1": {
                        "v": "713203",
                        "s": "065293ae-0e37-4135-9588-57a1b62bf220"
                    },
                    "2": {
                        "v": "30000",
                        "s": "8ff00fa3-0f3e-4ffb-8a79-9e1b2e8be7a6"
                    },
                    "3": {
                        "v": "",
                        "s": "1d401389-f6f3-45f6-a26c-4c1a3013a93d"
                    },
                    "4": {
                        "v": "",
                        "s": "87725fe1-a667-4e84-8136-53383fd51e5e"
                    },
                    "5": {
                        "v": "310000",
                        "s": "aba1b734-17bb-4e33-8302-3b2be3bf1672"
                    },
                    "6": {
                        "v": "",
                        "s": "47bd56b2-0016-4ff1-bffe-4bf2863089c8"
                    },
                    "7": {
                        "v": "",
                        "s": "b60c1aed-c48e-4b53-9e8d-857569824ca0"
                    },
                    "8": {
                        "v": "152213",
                        "s": "d865d28a-0cae-44df-ad2c-e4756749a510"
                    },
                    "9": {
                        "v": "",
                        "s": "23a55222-6cb1-49df-8bab-bf761489c7f4"
                    },
                    "10": {
                        "v": "",
                        "s": "72178550-e8bc-4f70-9ae6-daf349d58bf8"
                    },
                    "11": {
                        "v": "220990",
                        "s": "e4c6c92e-32fa-4fc7-82bb-17b4e038c4b3"
                    },
                    "12": {
                        "v": "",
                        "s": "34ee77df-23dc-42cd-b348-4b8ed2fbc286"
                    },
                    "13": {
                        "v": "",
                        "s": "5813c336-fa66-4afb-82b8-db0f66ef3182"
                    }
                }
            },
            "mergeData": [
                {
                    "startRow": 1,
                    "startColumn": 2,
                    "endRow": 1,
                    "endColumn": 4,
                    "rangeType": 0
                },
                {
                    "startRow": 1,
                    "startColumn": 5,
                    "endRow": 1,
                    "endColumn": 7,
                    "rangeType": 0
                },
                {
                    "startRow": 1,
                    "startColumn": 8,
                    "endRow": 1,
                    "endColumn": 10,
                    "rangeType": 0
                },
                {
                    "startRow": 1,
                    "startColumn": 11,
                    "endRow": 1,
                    "endColumn": 13,
                    "rangeType": 0
                }
            ],
            "tabColor": "",
            "freeze": {
                "xSplit": 0,
                "ySplit": 0,
                "startRow": -1,
                "startColumn": -1
            },
            "scrollTop": 0,
            "scrollLeft": 0
        }
    },
    "styles": {
        "5d0fadc3-a721-4f49-a72a-57b6fd71e94e": {
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
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "a7030a21-2833-40fe-aaa0-42ee3c3cee78": {
            "bd": {
                "t": {
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
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "b0f94b86-98f7-4987-b738-b43e8cffb56a": {
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
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "50938883-a07c-4d7b-bd9d-ccd95144e0df": {
            "bd": {
                "t": {
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
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "9b2fe04c-3fc6-4c90-a9ec-a8408263bdef": {
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
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "f4d54756-6b2c-41fd-9562-662de64d2524": {
            "bd": {
                "t": {
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
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "39a82d4a-0705-42b9-afe6-993b6ab180a4": {
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
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "d4cdd509-204d-4db1-b8b6-b142ac9c06d2": {
            "bd": {
                "t": {
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
                },
                "b": {
                    "s": 1,
                    "cl": {
                        "rgb": "#000000"
                    }
                }
            },
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "5c0f4ab0-f94d-440e-8546-c8285d0d6e45": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "fa5380ba-69da-4a19-b391-9d5b231bb6cd": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "26a70a34-719c-4a6d-80d7-272a88f0477b": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "7c3ae9fe-1863-4f8d-9c2a-1e15fff56932": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "57f37d28-be55-47b9-9427-b19658f863d1": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "c2dc72e5-bd11-4498-b281-fb6890f8b051": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "b9eabc16-8733-484a-8784-fed317876417": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "34e49f21-c3af-46fb-a48d-fa13e7aaac21": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "927a1451-4fab-41d0-87d5-83ca05347e1f": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "67322c8d-f7c5-4df9-a6d1-6667055e3332": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "76c2064c-7dad-4271-9aa6-631cfa82ce00": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "3cefd1d0-406f-4f78-9be2-e47d49645857": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "a9bc0a29-487a-485c-a7f3-44813fd63ced": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "8af9d03a-c7cd-4609-b231-2c364818ef72": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "6b0000c5-b9e7-4bf8-b942-9c4a7f7aa8fb": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "141ac32c-d752-4a12-9f7a-d616b0bcdf92": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "3b51b4e1-23de-4912-bad7-9faf465c1a97": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "ce6c461f-b6ba-4829-bf7c-bfde09cfdf62": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "f7b6d19f-1b51-4145-9987-4e3a1c0b472e": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "e785e31b-f1d8-4346-b66a-7dde89390ed7": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "r": {
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
            },
            "vt": 1,
            "ht": 1,
            "bg": {
                "rgb": "#CCCCCC"
            }
        },
        "4ae618d9-927f-4388-ab94-9996294914e9": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "91e9583d-9c16-4427-b718-91ace7089c36": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "b72f164b-9dd7-45cb-a4df-d0f682ddf40c": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "a68d8887-a4c3-492d-95ff-b4ccecf074c5": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "3d39f2d4-007d-4886-902d-ad6b6693a81a": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "8a55cac7-f306-47ac-b265-960fd3007a9a": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "e54f525e-4da2-404c-a7d8-89b424bdc818": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "a02fc0b7-611a-45d9-9c11-3ff347192bd2": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "6c74c027-3b6d-41ed-b676-84872da9433e": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "971533e4-2f5b-4969-ad71-1c51bddfdd77": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "53eda94a-92bd-4613-bab2-62ee97e3ea43": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "203d9b70-2edb-4b83-974c-03158ed5ab4d": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "9af710d9-276b-4c39-9567-24bb82eeb887": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "fe577d20-4c7e-48cd-8ba4-b876530d6f11": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "b3fa3e2c-09d9-4145-8bb4-3971a2105f73": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "d0c3865c-d0a8-4666-b0c0-86c331aa88e9": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "c4b76e33-031c-4384-9902-4e3a31995554": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "a04e25e0-7d41-4806-a404-36b6db0da83e": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "1da812d2-7be4-4c68-be07-0673f8e8b5b9": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "08bf8bc4-4584-4617-b435-4d88c3ce211c": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "0b1aa519-4eec-4d0e-9335-68a28486deab": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "e51dbe1f-5a15-4018-b0b8-3448e78cd3a3": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "9da54190-6891-4f7f-b5c1-5dcceac5c9a3": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "690e4786-ff35-448d-a0d2-2a323e2f3cba": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "f5a389e6-f0db-4307-837b-d73639e63bb8": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "1d71aed0-f364-4837-abe3-21896e6665d9": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "eb26310c-2ffe-4a93-aab5-25cdb29a6633": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "dae6ed43-83b3-48bd-82ae-1b0178fcf06a": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "54360c93-1ebc-4846-801d-56f22c39b369": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "9044efe4-a55c-4b5a-8cda-1c88c8aebd04": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "1baa101a-dba1-4566-9e46-4d081669f391": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "cf90d7d1-b22a-425d-b314-bb43a3511471": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "01d359ab-3cfe-4052-9b57-be96033bab38": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "c3c27d8f-23f9-42a6-824e-230efa9548fa": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "b3b78233-f1af-4eea-b08d-f913027f60b9": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "12892e2c-09b6-4a47-a0da-9363ed7ed4b0": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "c46ecf90-d2f5-44d5-9a98-10e43c3d8162": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "ed6ab084-fa22-40a3-b993-555235f71da7": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "23ed5157-0606-476a-a952-fe5733beaf01": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "85023dca-e4d9-41a8-b674-45b0b1f8f601": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "bd6533db-7a3e-4d7f-af7e-82b8e1483ace": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "c88dd9fe-91bd-4eb3-b851-a628c48b9e1a": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "96e44203-3f65-456a-925f-088518046671": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "065293ae-0e37-4135-9588-57a1b62bf220": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "8ff00fa3-0f3e-4ffb-8a79-9e1b2e8be7a6": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "1d401389-f6f3-45f6-a26c-4c1a3013a93d": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "87725fe1-a667-4e84-8136-53383fd51e5e": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "aba1b734-17bb-4e33-8302-3b2be3bf1672": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "47bd56b2-0016-4ff1-bffe-4bf2863089c8": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "b60c1aed-c48e-4b53-9e8d-857569824ca0": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "d865d28a-0cae-44df-ad2c-e4756749a510": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "23a55222-6cb1-49df-8bab-bf761489c7f4": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "72178550-e8bc-4f70-9ae6-daf349d58bf8": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "e4c6c92e-32fa-4fc7-82bb-17b4e038c4b3": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "34ee77df-23dc-42cd-b348-4b8ed2fbc286": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        },
        "5813c336-fa66-4afb-82b8-db0f66ef3182": {
            "tb": 3,
            "ff": "Microsoft YaHei",
            "fs": 11,
            "bd": {
                "t": {
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
            },
            "vt": 1,
            "ht": 1
        }
    }
}
);
