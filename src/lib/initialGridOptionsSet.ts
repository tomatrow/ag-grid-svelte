import { type GridOptions } from "ag-grid-community"

const initialGridOptions = [
	"columnMenu",
	"enableBrowserTooltips",
	"tooltipTrigger",
	"tooltipMouseTrack",
	"tooltipInteraction",
	"defaultColGroupDef",
	"suppressAutoSize",
	"skipHeaderOnAutoSize",
	"autoSizeStrategy",
	"components",
	"stopEditingWhenCellsLoseFocus",
	"undoRedoCellEditing",
	"undoRedoCellEditingLimit",
	"excelStyles",
	"cacheQuickFilter",
	"suppressSetFilterByDefault",
	"chartThemes",
	"customChartThemes",
	"chartThemeOverrides",
	"chartToolPanelsDef",
	"loadingCellRendererSelector",
	"localeText",
	"keepDetailRows",
	"keepDetailRowsCount",
	"detailRowHeight",
	"detailRowAutoHeight",
	"context",
	"dragAndDropImageComponent",
	"tabIndex",
	"valueCache",
	"valueCacheNeverExpires",
	"enableCellExpressions",
	"suppressTouch",
	"suppressBrowserResizeObserver",
	"suppressPropertyNamesCheck",
	"debug",
	"loadingOverlayComponent",
	"suppressLoadingOverlay",
	"noRowsOverlayComponent",
	"suppressNoRowsOverlay",
	"paginationPageSizeSelector",
	"paginateChildRows",
	"pivotPanelShow",
	"pivotSuppressAutoColumn",
	"suppressExpandablePivotGroups",
	"aggFuncs",
	"allowShowChangeAfterFilter",
	"ensureDomOrder",
	"enableCellSpan",
	"enableRtl",
	"suppressColumnVirtualisation",
	"suppressMaxRenderedRowRestriction",
	"suppressRowVirtualisation",
	"rowDragText",
	"groupLockGroupColumns",
	"suppressGroupRowsSticky",
	"rowModelType",
	"cacheOverflowSize",
	"infiniteInitialRowCount",
	"serverSideInitialRowCount",
	"maxBlocksInCache",
	"maxConcurrentDatasourceRequests",
	"blockLoadDebounceMillis",
	"serverSideOnlyRefreshFilteredGroups",
	"serverSidePivotResultFieldSeparator",
	"viewportRowModelPageSize",
	"viewportRowModelBufferSize",
	"debounceVerticalScrollbar",
	"suppressAnimationFrame",
	"suppressPreventDefaultOnMouseWheel",
	"scrollbarWidth",
	"icons",
	"suppressRowTransform",
	"gridId",
	"enableGroupEdit",
	"initialState",
	"reactiveCustomComponents",
	"themeStyleContainer",
	"getMainMenuItems",
	"processUnpinnedColumns",
	"getChartToolbarItems",
	"createChartContainer",
	"getLocaleText",
	"paginationNumberFormatter",
	"getDataPath",
	"getChildCount",
	"getServerSideGroupLevelParams",
	"getRowId"
] as const satisfies (keyof GridOptions)[]

export type InitialGridOption = (typeof initialGridOptions)[number]

//  A list of grid options to exclude from the update
export const initialGridOptionsSet = new Set<InitialGridOption>(initialGridOptions)
