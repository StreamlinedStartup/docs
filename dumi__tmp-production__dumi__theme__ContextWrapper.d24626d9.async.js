"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[81923],{34576:function(z,l,e){e.r(l),e.d(l,{default:function(){return u}});var s=e(27424),c=e.n(s),t=e(67294),i=e(96707),h=e(64236),o=e(80114),r=e(90482),k=e(85893),m={};function u(){var g=(0,i.pC)(),b=(0,t.useState)(!1),n=c()(b,2),p=n[0],C=n[1],a=(0,t.useRef)(i.m8.location.pathname);return(0,t.useEffect)(function(){return i.m8.listen(function(d){d.location.pathname!==a.current&&(a.current=d.location.pathname,document.documentElement.scrollTo(0,0))})},[]),(0,k.jsx)(h.D.Provider,{value:{pkg:{name:"nocobase-docs",description:"A static site based on dumi",version:"0.0.1",license:"MIT",authors:[]},historyType:"browser",entryExports:m,demos:o.DE,components:o.wx,locales:r.k,loading:p,setLoading:C,hostname:void 0,themeConfig:{footer:"\xA9 2020-2024 NocoBase. All rights reserved.",prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,title:"NocoBase",lang:"en-US",logo:"https://www.nocobase.com/images/logo.png",nav:[{title:"Welcome","title.zh-CN":"\u6B22\u8FCE",link:"/welcome/introduction"},{title:"Handbook","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook"},{title:"Plugin development","title.zh-CN":"\u63D2\u4EF6\u5F00\u53D1",link:"/development"},{title:"API reference","title.zh-CN":"API \u53C2\u8003",link:"/api"},{title:"Plugin samples","title.zh-CN":"\u63D2\u4EF6\u793A\u4F8B",link:"/plugin-samples"},{title:"NocoBase Home","title.zh-CN":"NocoBase \u9996\u9875",link:"https://www.nocobase.com","link.zh-CN":"https://cn.nocobase.com"}],sidebarEnhance:{"/welcome":[{title:"Welcome","title.zh-CN":"\u6B22\u8FCE",type:"group",children:["/welcome/introduction","/welcome/how"]},{title:"Getting started","title.zh-CN":"\u5FEB\u901F\u5F00\u59CB",type:"group",children:[{title:"Installation","title.zh-CN":"\u5B89\u88C5",children:["/welcome/getting-started/installation","/welcome/getting-started/installation/docker-compose","/welcome/getting-started/installation/create-nocobase-app","/welcome/getting-started/installation/git-clone"]},{title:"Upgrading","title.zh-CN":"\u5347\u7EA7",children:["/welcome/getting-started/upgrading","/welcome/getting-started/upgrading/docker-compose","/welcome/getting-started/upgrading/create-nocobase-app","/welcome/getting-started/upgrading/git-clone"]},{title:"Deployment","title.zh-CN":"\u90E8\u7F72",children:["/welcome/getting-started/deployment","/welcome/getting-started/deployment/docker-compose","/welcome/getting-started/deployment/create-nocobase-app","/welcome/getting-started/deployment/git-clone"]},"/welcome/getting-started/env","/welcome/getting-started/plugin"]},{title:"Releases","title.zh-CN":"\u4EA7\u54C1\u53D1\u5E03",type:"group",children:[{title:"Roadmap","title.zh-CN":"\u8DEF\u7EBF\u56FE",link:"/welcome/release/roadmap"},{title:"Release notes","title.zh-CN":"\u66F4\u65B0\u65E5\u5FD7",children:["/welcome/release/v1001-changelog","/welcome/release/v0210-changelog","/welcome/release/v0200-changelog","/welcome/release/v0190-changelog","/welcome/release/v0180-changelog","/welcome/release/v0170-changelog","/welcome/release/v0160-changelog","/welcome/release/v0150-changelog","/welcome/release/v0140-changelog","/welcome/release/v0130-changelog","/welcome/release/v0120-changelog","/welcome/release/v0110-changelog","/welcome/release/v0100-changelog","/welcome/release/v0094-changelog","/welcome/release/v0093-changelog","/welcome/release/v0092-changelog","/welcome/release/v0091-changelog","/welcome/release/v0080-changelog","/welcome/release/v0075-changelog","/welcome/release/v0074-changelog","/welcome/release/v0073-changelog","/welcome/release/v0072-changelog","/welcome/release/v0071-changelog","/welcome/release/v0070-changelog","/welcome/release/v0060-changelog","/welcome/release/v0050-changelog","/welcome/release/v0040-changelog"]}]},{title:"Community","title.zh-CN":"\u793E\u533A",type:"group",children:["/welcome/community/contributing","/welcome/community/translations","/welcome/community/thanks"]}],"/handbook":[{title:"Guide","title.zh-CN":"\u6307\u5357",link:"/handbook"},{title:"Data modeling","title.zh-CN":"\u6570\u636E\u5EFA\u6A21",type:"group",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-modeling"},{title:"Data sources","title.zh-CN":"\u6570\u636E\u6E90",children:[{title:"Data source manager","title.zh-CN":"\u6570\u636E\u6E90\u7BA1\u7406",link:"/handbook/data-source-manager"},{title:"Main database","title.zh-CN":"\u4E3B\u6570\u636E\u5E93",link:"/handbook/data-source-main"},{title:"External database","title.zh-CN":"\u5916\u90E8\u6570\u636E\u5E93",children:[{title:"Overview","title.zh-CN":"\u4ECB\u7ECD",link:"/handbook/data-source-manager/external-database"},{title:"External MySQL","title.zh-CN":"\u5916\u90E8 MySQL",link:"/handbook/data-source-external-mysql"},{title:"External MariaDB","title.zh-CN":"\u5916\u90E8 MariaDB",link:"/handbook/data-source-external-mariadb"},{title:"External PostgreSQL","title.zh-CN":"\u5916\u90E8 PostgreSQL",link:"/handbook/data-source-external-postgres"}]},{title:"HTTP API Data source","title.zh-CN":"HTTP API \u6570\u636E\u6E90",link:"/handbook/data-source-http-api"},{title:"ER diagram-like tool","title.zh-CN":"\u7C7B ER \u5DE5\u5177",link:"/handbook/graph-collection-manager"}]},{title:"Collections","title.zh-CN":"\u6570\u636E\u8868",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-modeling/collection"},{title:"General collection","title.zh-CN":"\u666E\u901A\u8868",link:"/handbook/data-source-main/general-collection"},{title:"Inheritance collection","title.zh-CN":"\u7EE7\u627F\u8868",link:"/handbook/data-source-main/inheritance-collection"},{title:"File collection","title.zh-CN":"\u6587\u4EF6\u8868",link:"/handbook/file-manager/file-collection"},{title:"Tree collection","title.zh-CN":"\u6811\u8868",link:"/handbook/collection-tree"},{title:"Calendar collection","title.zh-CN":"\u65E5\u5386\u8868",link:"/handbook/calendar/calendar-collection"},{title:"Expression collection","title.zh-CN":"\u8868\u8FBE\u5F0F\u8868",link:"/handbook/workflow/manual/nodes/dynamic-calculation/expression"},{title:"SQL collection","title.zh-CN":"SQL \u8868",link:"/handbook/collection-sql"},{title:"View collection","title.zh-CN":"\u6570\u636E\u5E93\u89C6\u56FE",link:"/handbook/collection-view"},{title:"Foreign data collection\uFF08FDW\uFF09","title.zh-CN":"\u5916\u90E8\u6570\u636E\u8868",link:"/handbook/collection-fdw"}]},{title:"Collection fields","title.zh-CN":"\u6570\u636E\u8868\u5B57\u6BB5",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-modeling/collection-fields"},{title:"Basic","title.zh-CN":"\u57FA\u672C\u7C7B\u578B",children:[{title:"Single text","title.zh-CN":"\u5355\u884C\u6587\u672C",link:"/handbook/data-modeling/collection-fields/basic/input"},{title:"Long text","title.zh-CN":"\u591A\u884C\u6587\u672C",link:"/handbook/data-modeling/collection-fields/basic/textarea"},{title:"Phone","title.zh-CN":"\u624B\u673A\u53F7\u7801",link:"/handbook/data-modeling/collection-fields/basic/phone"},{title:"Email","title.zh-CN":"\u7535\u5B50\u90AE\u7BB1",link:"/handbook/data-modeling/collection-fields/basic/email"},{title:"URL","title.zh-CN":"URL",link:"/handbook/data-modeling/collection-fields/basic/url"},{title:"Integer","title.zh-CN":"\u6574\u6570",link:"/handbook/data-modeling/collection-fields/basic/integer"},{title:"Number","title.zh-CN":"\u6570\u5B57",link:"/handbook/data-modeling/collection-fields/basic/number"},{title:"Percent","title.zh-CN":"\u767E\u5206\u6BD4",link:"/handbook/data-modeling/collection-fields/basic/percent"},{title:"Password","title.zh-CN":"\u5BC6\u7801",link:"/handbook/data-modeling/collection-fields/basic/password"},{title:"Color","title.zh-CN":"\u989C\u8272",link:"/handbook/data-modeling/collection-fields/basic/color"},{title:"Icon","title.zh-CN":"\u56FE\u6807",link:"/handbook/data-modeling/collection-fields/basic/icon"}]},{title:"Choices","title.zh-CN":"\u9009\u62E9\u7C7B\u578B",children:[{title:"Checkbox","title.zh-CN":"\u52FE\u9009",link:"/handbook/data-modeling/collection-fields/choices/checkbox"},{title:"Single select","title.zh-CN":"\u4E0B\u62C9\u83DC\u5355\uFF08\u5355\u9009\uFF09",link:"/handbook/data-modeling/collection-fields/choices/select"},{title:"Multiple select","title.zh-CN":"\u4E0B\u62C9\u83DC\u5355\uFF08\u591A\u9009\uFF09",link:"/handbook/data-modeling/collection-fields/choices/multiple-select"},{title:"Radio group","title.zh-CN":"\u5355\u9009\u6846",link:"/handbook/data-modeling/collection-fields/choices/radio-group"},{title:"Checkbox group","title.zh-CN":"\u590D\u9009\u6846",link:"/handbook/data-modeling/collection-fields/choices/checkbox-group"},{title:"China region","title.zh-CN":"\u4E2D\u56FD\u884C\u653F\u533A",link:"/handbook/field-china-region"}]},{title:"Media","title.zh-CN":"\u591A\u5A92\u4F53",children:[{title:"Markdown","title.zh-CN":"Markdown",link:"/handbook/data-modeling/collection-fields/media/markdown"},{title:"Markdown(Vditor)","title.zh-CN":"Markdown(Vditor)",link:"/handbook/field-markdown-vditor"},{title:"Rich text","title.zh-CN":"\u5BCC\u6587\u672C",link:"/handbook/data-modeling/collection-fields/media/rich-text"},{title:"Attachment","title.zh-CN":"\u9644\u4EF6",link:"/handbook/file-manager/field-attachment"}]},{title:"Date & Time","title.zh-CN":"\u65E5\u671F & \u65F6\u95F4",children:[{title:"Datetime","title.zh-CN":"\u65E5\u671F",link:"/handbook/data-modeling/collection-fields/datetime/datetime"},{title:"Unix timestamp","title.zh-CN":"Unix \u65F6\u95F4\u6233",link:"/handbook/data-modeling/collection-fields/datetime/unix-timestamp"},{title:"Time","title.zh-CN":"\u65F6\u95F4",link:"/handbook/data-modeling/collection-fields/datetime/time"}]},{title:"Geometric","title.zh-CN":"\u51E0\u4F55\u56FE\u5F62",children:[{title:"Point","title.zh-CN":"\u70B9",link:"/handbook/data-modeling/collection-fields/geometric/point"},{title:"Line","title.zh-CN":"\u7EBF",link:"/handbook/data-modeling/collection-fields/geometric/line"},{title:"Circle","title.zh-CN":"\u5706",link:"/handbook/data-modeling/collection-fields/geometric/circle"},{title:"Polygon","title.zh-CN":"\u591A\u8FB9\u5F62",link:"/handbook/data-modeling/collection-fields/geometric/polygon"}]},{title:"Advanced","title.zh-CN":"\u9AD8\u7EA7\u7C7B\u578B",children:[{title:"UUID","title.zh-CN":"UUID",link:"/handbook/data-modeling/collection-fields/advanced/uuid"},{title:"Nano ID","title.zh-CN":"Nano ID",link:"/handbook/data-modeling/collection-fields/advanced/nano-id"},{title:"Sort","title.zh-CN":"\u6392\u5E8F",link:"/handbook/field-sort"},{title:"Formula","title.zh-CN":"\u8BA1\u7B97\u516C\u5F0F",link:"/handbook/field-formula"},{title:"Sequence","title.zh-CN":"\u81EA\u52A8\u7F16\u7801",link:"/handbook/field-sequence"},{title:"JSON","title.zh-CN":"JSON",link:"/handbook/data-modeling/collection-fields/advanced/json"},{title:"Collection \u9009\u62E9\u5668","title.zh-CN":"\u6570\u636E\u8868\u9009\u62E9\u5668",link:"/handbook/data-modeling/collection-fields/advanced/collection-select"}]},{title:"System info","title.zh-CN":"\u7CFB\u7EDF\u4FE1\u606F",children:[{title:"Created at","title.zh-CN":"\u521B\u5EFA\u65E5\u671F",link:"/handbook/data-modeling/collection-fields/system-info/created-at"},{title:"Last updated at","title.zh-CN":"\u6700\u540E\u4FEE\u6539\u65E5\u671F",link:"/handbook/data-modeling/collection-fields/system-info/updated-at"},{title:"Created by","title.zh-CN":"\u521B\u5EFA\u4EBA",link:"/handbook/users/field-created-by"},{title:"Last updated by","title.zh-CN":"\u6700\u540E\u4FEE\u6539\u4EBA",link:"/handbook/users/field-updated-by"},{title:"Table OID","title.zh-CN":"Table OID",link:"/handbook/data-modeling/collection-fields/system-info/table-oid"}]},{title:"Association","title.zh-CN":"\u5173\u7CFB\u7C7B\u578B",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-modeling/collection-fields/associations"},{title:"One-to-one","title.zh-CN":"\u4E00\u5BF9\u4E00",link:"/handbook/data-modeling/collection-fields/associations/o2o"},{title:"One-to-many","title.zh-CN":"\u4E00\u5BF9\u591A",link:"/handbook/data-modeling/collection-fields/associations/o2m"},{title:"Many-to-one","title.zh-CN":"\u591A\u5BF9\u4E00",link:"/handbook/data-modeling/collection-fields/associations/m2o"},{title:"Many-to-many","title.zh-CN":"\u591A\u5BF9\u591A",link:"/handbook/data-modeling/collection-fields/associations/m2m"}]}]}]},{title:"Edit UI","title.zh-CN":"\u914D\u7F6E\u754C\u9762",type:"group",children:[{title:"UI Editor mode","title.zh-CN":"\u754C\u9762\u914D\u7F6E\u6A21\u5F0F",link:"/handbook/ui/ui-editor"},{title:"Menu","title.zh-CN":"\u83DC\u5355",link:"/handbook/ui/menus"},{title:"Page","title.zh-CN":"\u9875\u9762",link:"/handbook/ui/pages"},{title:"Pop-up","title.zh-CN":"\u5F39\u7A97",link:"/handbook/ui/pop-up"},{title:"Blocks","title.zh-CN":"\u533A\u5757",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/ui/blocks"},{title:"Data blocks","title.zh-CN":"\u6570\u636E\u533A\u5757",children:[{title:"Table","title.zh-CN":"\u8868\u683C",link:"/handbook/ui/blocks/data-blocks/table"},{title:"Form","title.zh-CN":"\u8868\u5355",link:"/handbook/ui/blocks/data-blocks/form"},{title:"Details","title.zh-CN":"\u8BE6\u60C5",link:"/handbook/ui/blocks/data-blocks/details"},{title:"List","title.zh-CN":"\u5217\u8868",link:"/handbook/ui/blocks/data-blocks/list"},{title:"Grid card","title.zh-CN":"\u7F51\u683C\u5361\u7247",link:"/handbook/ui/blocks/data-blocks/grid-card"},{title:"Calendar","title.zh-CN":"\u65E5\u5386",link:"/handbook/calendar"},{title:"Gantt","title.zh-CN":"\u7518\u7279\u56FE",link:"/handbook/block-gantt"},{title:"Kanban","title.zh-CN":"\u770B\u677F",link:"/handbook/block-kanban"},{title:"Map","title.zh-CN":"\u5730\u56FE",link:"/handbook/block-map"},{title:"Charts","title.zh-CN":"\u56FE\u8868",link:"/handbook/data-visualization/"}]},{title:"Filter blocks","title.zh-CN":"\u7B5B\u9009\u533A\u5757",children:[{title:"Form","title.zh-CN":"\u8868\u5355",link:"/handbook/ui/blocks/filter-blocks/form"},{title:"Collapse","title.zh-CN":"\u6298\u53E0\u9762\u677F",link:"/handbook/ui/blocks/filter-blocks/collapse"}]},{title:"Other blocks","title.zh-CN":"\u5176\u4ED6\u533A\u5757",children:[{title:"Markdown","title.zh-CN":"Markdown",link:"/handbook/ui/blocks/other-blocks/markdown"},{title:"iframe","title.zh-CN":"iframe",link:"/handbook/block-iframe"},{title:"Workflow todos","title.zh-CN":"\u5DE5\u4F5C\u6D41\u5F85\u529E",link:"/handbook/workflow/manual/nodes/manual/workflow-todos-block"},{title:"Workflow todos","title.zh-CN":"\u5BA1\u6279",link:"/handbook/workflow-approval"},{title:"Audit logs","title.zh-CN":"\u5BA1\u8BA1\u65E5\u5FD7",link:"/handbook/audit-logs"}]},{title:"Block templates","title.zh-CN":"\u533A\u5757\u6A21\u677F",link:"/handbook/ui/blocks/block-templates"},{title:"Block settings","title.zh-CN":"\u533A\u5757\u8BBE\u7F6E\u9879",children:[{title:"Set the data scope","title.zh-CN":"\u8BBE\u7F6E\u6570\u636E\u8303\u56F4",link:"/handbook/ui/blocks/block-settings/data-scope"},{title:"Set default sorting rules","title.zh-CN":"\u8BBE\u7F6E\u6392\u5E8F\u89C4\u5219",link:"/handbook/ui/blocks/block-settings/sorting-rule"},{title:"Set data loading mode","title.zh-CN":"\u8BBE\u7F6E\u6570\u636E\u52A0\u8F7D\u65B9\u5F0F",link:"/handbook/ui/blocks/block-settings/loading-mode"},{title:"Connect data blocks","title.zh-CN":"\u8FDE\u63A5\u6570\u636E\u533A\u5757",link:"/handbook/ui/blocks/block-settings/connect-block"},{title:"Save as template","title.zh-CN":"\u4FDD\u5B58\u4E3A\u533A\u5757\u6A21\u677F",link:"/handbook/ui/blocks/block-settings/block-template"},{title:"Linkage rules","title.zh-CN":"\u8054\u52A8\u89C4\u5219",link:"/handbook/ui/blocks/block-settings/linkage-rule"},{title:"Edit block title","title.zh-CN":"\u7F16\u8F91\u533A\u5757\u6807\u9898",link:"/handbook/ui/blocks/block-settings/block-title"},{title:"Set block height","title.zh-CN":"\u8BBE\u7F6E\u533A\u5757\u9AD8\u5EA6",link:"/handbook/ui/blocks/block-settings/block-height"},{title:"Delete","title.zh-CN":"\u5220\u9664\u533A\u5757",link:"/handbook/ui/blocks/block-settings/block-delete"}]}]},{title:"Fields","title.zh-CN":"\u5B57\u6BB5",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/ui/fields"},{title:"Common ettings","title.zh-CN":"\u901A\u7528\u914D\u7F6E\u9879",children:[{title:"Table column","title.zh-CN":"\u8868\u683C\u5B57\u6BB5",link:"/handbook/ui/fields/generic/table-column"},{title:"Form","title.zh-CN":"\u8868\u5355\u5B57\u6BB5",link:"/handbook/ui/fields/generic/form-item"},{title:"Detail","title.zh-CN":"\u8BE6\u60C5\u5B57\u6BB5",link:"/handbook/ui/fields/generic/detail-form-item"},{title:"Bulk edit form","title.zh-CN":"\u6279\u91CF\u7F16\u8F91\u8868\u5355",link:"/handbook/ui/fields/generic/bulk-edit-form-item"},{title:"Filter form","title.zh-CN":"\u7B5B\u9009\u8868\u5355",link:"/handbook/ui/fields/generic/filter-form-item"},{title:"Collapse","title.zh-CN":"\u6298\u53E0\u9762\u677F",link:"/handbook/ui/fields/generic/filter-collapse-item"}]},{title:"Specific settings","title.zh-CN":"\u7279\u6709\u914D\u7F6E\u9879",children:[{title:"Date picker","title.zh-CN":"\u65F6\u95F4\u65E5\u671F",link:"/handbook/ui/fields/specific/date-picker"},{title:"Cascade select","title.zh-CN":"\u7EA7\u8054\u9009\u62E9",link:"/handbook/ui/fields/specific/cascade-select"},{title:"Nester","title.zh-CN":"\u5B50\u8868\u5355",link:"/handbook/ui/fields/specific/nester"},{title:"Popover nester","title.zh-CN":"\u5B50\u8868\u5355\uFF08\u5F39\u7A97\uFF09",link:"/handbook/ui/fields/specific/popover-nester"},{title:"Select","title.zh-CN":"\u9009\u62E9\u5668",link:"/handbook/ui/fields/specific/select"},{title:"Record picker","title.zh-CN":"\u6570\u636E\u9009\u62E9\u5668",link:"/handbook/ui/fields/specific/picker"},{title:"Sub table","title.zh-CN":"\u5B50\u8868\u683C",link:"/handbook/ui/fields/specific/sub-table"},{title:"Title","title.zh-CN":"\u6807\u9898",link:"/handbook/ui/fields/specific/title"},{title:"Tag","title.zh-CN":"\u6807\u7B7E",link:"/handbook/ui/fields/specific/tag"},{title:"File manager","title.zh-CN":"\u6587\u4EF6\u7BA1\u7406\u5668",link:"/handbook/ui/fields/specific/file-manager"}]},{title:"Field Settings","title.zh-CN":"\u5B57\u6BB5\u914D\u7F6E\u9879",children:[{title:"Required","title.zh-CN":"\u5FC5\u586B",link:"/handbook/ui/fields/field-settings/required"},{title:"Set default value","title.zh-CN":"\u9ED8\u8BA4\u503C",link:"/handbook/ui/fields/field-settings/default-value"},{title:"Set validation rules","title.zh-CN":"\u9A8C\u8BC1\u89C4\u5219",link:"/handbook/ui/fields/field-settings/validation-rules"},{title:"Format","title.zh-CN":"\u6570\u503C\u683C\u5F0F\u5316",link:"/handbook/ui/fields/field-settings/number-format"},{title:"Data scope","title.zh-CN":"\u8BBE\u7F6E\u6570\u636E\u8303\u56F4",link:"/handbook/ui/fields/field-settings/data-scope"},{title:"Title field","title.zh-CN":"\u6807\u9898\u5B57\u6BB5",link:"/handbook/ui/fields/field-settings/title-field"},{title:"Pattern","title.zh-CN":"\u663E\u793A\u6A21\u5F0F",link:"/handbook/ui/fields/field-settings/pattern"},{title:"Edit field title","title.zh-CN":"\u7F16\u8F91\u5B57\u6BB5\u6807\u9898",link:"/handbook/ui/fields/field-settings/edit-title"},{title:"Display title","title.zh-CN":"\u663E\u793A\u6807\u9898",link:"/handbook/ui/fields/field-settings/display-title"},{title:"Edit description","title.zh-CN":"\u7F16\u8F91\u63CF\u8FF0",link:"/handbook/ui/fields/field-settings/edit-description"},{title:"Edit tooltip","title.zh-CN":"\u7F16\u8F91\u63D0\u793A\u4FE1\u606F",link:"/handbook/ui/fields/field-settings/edit-tooltip"}]},{title:"Asscoation field component","title.zh-CN":"\u5173\u7CFB\u5B57\u6BB5\u7EC4\u4EF6",link:"/handbook/ui/fields/association-field"}]},{title:"Actions","title.zh-CN":"\u64CD\u4F5C",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/ui/actions"},{title:"Common settings","title.zh-CN":"\u901A\u7528\u914D\u7F6E\u9879",children:[{title:"Linkage","title.zh-CN":"\u8054\u52A8\u89C4\u5219",link:"/handbook/ui/actions/action-settings/linkage-rule"},{title:"Open mode","title.zh-CN":"\u6253\u5F00\u65B9\u5F0F",link:"/handbook/ui/actions/action-settings/open-mode"},{title:"Popup size","title.zh-CN":"\u5F39\u7A97\u5C3A\u5BF8",link:"/handbook/ui/actions/action-settings/popup-size"},{title:"Second confirmation","title.zh-CN":"\u4E8C\u6B21\u786E\u8BA4",link:"/handbook/ui/actions/action-settings/double-check"},{title:"Bind workflows","title.zh-CN":"\u7ED1\u5B9A\u5DE5\u4F5C\u6D41",link:"/handbook/ui/actions/action-settings/bind-workflow"},{title:"Assign field values","title.zh-CN":"\u5B57\u6BB5\u8D4B\u503C",link:"/handbook/ui/actions/action-settings/assign-values"},{title:"Edit button","title.zh-CN":"\u7F16\u8F91\u6309\u94AE",link:"/handbook/ui/actions/action-settings/edit-button"},{title:"After successful submission","title.zh-CN":"\u63D0\u4EA4\u6210\u529F\u540E",link:"/handbook/ui/actions/action-settings/affter-successful"}]},{title:"Action types","title.zh-CN":"\u64CD\u4F5C\u7C7B\u578B",children:[{title:"View","title.zh-CN":"\u67E5\u770B",link:"/handbook/ui/actions/types/view"},{title:"Filter","title.zh-CN":"\u7B5B\u9009",link:"/handbook/ui/actions/types/filter"},{title:"Add new","title.zh-CN":"\u6DFB\u52A0",link:"/handbook/ui/actions/types/add-new"},{title:"Edit","title.zh-CN":"\u7F16\u8F91",link:"/handbook/ui/actions/types/edit"},{title:"Delete","title.zh-CN":"\u5220\u9664",link:"/handbook/ui/actions/types/delete"},{title:"Refresh","title.zh-CN":"\u5237\u65B0",link:"/handbook/ui/actions/types/refresh"},{title:"Add record","title.zh-CN":"\u6DFB\u52A0\u8BB0\u5F55",link:"/handbook/ui/actions/types/add-record"},{title:"Custom pop-up","title.zh-CN":"\u81EA\u5B9A\u4E49\u5F39\u7A97",link:"/handbook/ui/actions/types/pop-up"},{title:"Update record","title.zh-CN":"\u66F4\u65B0\u8BB0\u5F55",link:"/handbook/ui/actions/types/update-record"},{title:"Save record","title.zh-CN":"\u4FDD\u5B58\u8BB0\u5F55",link:"/handbook/ui/actions/types/save-record"},{title:"Submit","title.zh-CN":"\u63D0\u4EA4",link:"/handbook/ui/actions/types/submit"},{title:"Trigger workflow","title.zh-CN":"\u89E6\u53D1\u5DE5\u4F5C\u6D41",link:"/handbook/workflow/manual/triggers/custom-action"},{title:"Bulk edit","title.zh-CN":"\u6279\u91CF\u7F16\u8F91",link:"/handbook/action-bulk-edit"},{title:"Bulk update","title.zh-CN":"\u6279\u91CF\u66F4\u65B0",link:"/handbook/action-bulk-update"},{title:"Custom request","title.zh-CN":"\u81EA\u5B9A\u4E49\u8BF7\u6C42",link:"/handbook/action-custom-request"},{title:"Duplicate","title.zh-CN":"\u590D\u5236",link:"/handbook/action-duplicate"},{title:"Print","title.zh-CN":"\u6253\u5370",link:"/handbook/action-print"},{title:"Import","title.zh-CN":"\u5BFC\u5165",link:"/handbook/action-import"},{title:"Import Pro","title.zh-CN":"\u5BFC\u5165 Pro",link:"/handbook/action-import-pro"},{title:"Export","title.zh-CN":"\u5BFC\u51FA",link:"/handbook/action-export"},{title:"Export Pro","title.zh-CN":"\u5BFC\u51FA Pro",link:"/handbook/action-export-pro"}]}]},{title:"Variables","title.zh-CN":"\u53D8\u91CF",link:"/handbook/ui/variables"},{title:"Mobile client","title.zh-CN":"\u79FB\u52A8\u7AEF",link:"/handbook/mobile-client"}]},{title:"Core modules","title.zh-CN":"\u6838\u5FC3\u6A21\u5757",type:"group",children:[{title:"Users & permissions","title.zh-CN":"\u7528\u6237\u548C\u6743\u9650",children:[{title:"Users","title.zh-CN":"\u7528\u6237",link:"/handbook/users"},{title:"Roles & permissions","title.zh-CN":"\u89D2\u8272\u548C\u6743\u9650",link:"/handbook/acl"},{title:"Departments","title.zh-CN":"\u90E8\u95E8",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/departments"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/departments/manual"}]}]},{title:"Users authentication","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1",children:[{title:"Authentication","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/auth"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/auth/user"},{title:"Development","title.zh-CN":"\u5F00\u53D1\u6307\u5357",children:["/handbook/auth/dev/guide","/handbook/auth/dev/api"]}]},{title:"Authentication - CAS","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - CAS",link:"/handbook/auth-cas"},{title:"Authentication - OIDC","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - OIDC",children:[{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/auth-oidc"},{title:"Example","title.zh-CN":"\u793A\u4F8B",children:["/handbook/auth-oidc/example/google"]}]},{title:"Authentication - SAML","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - SAML",children:[{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/auth-saml"},{title:"Example","title.zh-CN":"\u793A\u4F8B",children:["/handbook/auth-saml/example/google"]}]},{title:"Authentication - LDAP","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - LDAP",children:[{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/handbook/auth-ldap"}]},{title:"Authentication - SMS","title.zh-CN":"\u7528\u6237\u8BA4\u8BC1 - \u77ED\u4FE1",link:"/handbook/auth-sms"},{title:"Verification","title.zh-CN":"\u9A8C\u8BC1\u7801",link:"/handbook/verification"},{title:"API Keys","title.zh-CN":"API \u5BC6\u94A5",link:"/handbook/api-keys"}]},{title:"Workflow","title.zh-CN":"\u5DE5\u4F5C\u6D41",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/workflow"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",children:["/handbook/workflow/manual","/handbook/workflow/manual/advanced",{title:"Triggers","title.zh-CN":"\u89E6\u53D1\u5668",children:["/handbook/workflow/manual/triggers","/handbook/workflow/manual/triggers/collection","/handbook/workflow/manual/triggers/schedule","/handbook/workflow/manual/triggers/pre-action","/handbook/workflow/manual/triggers/post-action","/handbook/workflow/manual/triggers/custom-action"]},{title:"Nodes","title.zh-CN":"\u8282\u70B9",children:["/handbook/workflow/manual/nodes",{title:"Control","title.zh-CN":"\u6D41\u7A0B\u63A7\u5236\u7C7B",type:"group",children:["/handbook/workflow/manual/nodes/condition","/handbook/workflow/manual/nodes/calculation","/handbook/workflow/manual/nodes/dynamic-calculation","/handbook/workflow/manual/nodes/delay","/handbook/workflow/manual/nodes/end","/handbook/workflow/manual/nodes/loop","/handbook/workflow/manual/nodes/parallel"]},{title:"Collection actions","title.zh-CN":"\u6570\u636E\u8868\u64CD\u4F5C",type:"group",children:["/handbook/workflow/manual/nodes/create","/handbook/workflow/manual/nodes/update","/handbook/workflow/manual/nodes/destroy","/handbook/workflow/manual/nodes/query","/handbook/workflow/manual/nodes/aggregate","/handbook/workflow/manual/nodes/sql"]},{title:"Manual","title.zh-CN":"\u4EBA\u5DE5\u5904\u7406",type:"group",children:["/handbook/workflow/manual/nodes/manual"]},{title:"Extended","title.zh-CN":"\u6269\u5C55\u7C7B\u578B",type:"group",children:["/handbook/workflow/manual/nodes/request","/handbook/workflow/manual/nodes/dynamic-calculation","/handbook/workflow/manual/nodes/json-query","/handbook/workflow/manual/nodes/response-message","/handbook/workflow/manual/nodes/variable"]}]}]},{title:"Development","title.zh-CN":"\u5F00\u53D1\u6307\u5357",children:["/handbook/workflow/development","/handbook/workflow/development/trigger","/handbook/workflow/development/instruction","/handbook/workflow/development/api"]},{title:"Workflow - Approval","title.zh-CN":"\u5DE5\u4F5C\u6D41 - \u5BA1\u6279",link:"/handbook/workflow-approval"}]},{title:"File storages","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8",children:[{title:"File manager","title.zh-CN":"\u6587\u4EF6\u7BA1\u7406\u5668",link:"/handbook/file-manager"},{title:"File storage: Local","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1A\u672C\u5730",link:"/handbook/file-manager/file-storage-local"},{title:"File storage: OSS","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1AOSS",link:"/handbook/file-storage-oss"},{title:"File storage: S3","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1AS3",link:"/handbook/file-storage-s3"},{title:"File storage: COS","title.zh-CN":"\u6587\u4EF6\u5B58\u50A8\uFF1ACOS",link:"/handbook/file-storage-cos"}]},{title:"Logging and monitoring","title.zh-CN":"\u65E5\u5FD7\u548C\u76D1\u63A7",children:[{title:"Logger","title.zh-CN":"\u65E5\u5FD7",link:"/handbook/logger"},{title:"Telemetry - Prometheus","title.zh-CN":"\u9065\u6D4B - Prometheus",link:"/handbook/telemetry-prometheus"},{title:"Audit logs","title.zh-CN":"\u5BA1\u8BA1\u65E5\u5FD7",link:"/handbook/audit-logs"}]},{title:"Data visualization","title.zh-CN":"\u6570\u636E\u53EF\u89C6\u5316",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/handbook/data-visualization"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",children:[{title:"Chart block","title.zh-CN":"\u56FE\u8868\u533A\u5757",link:"/handbook/data-visualization/user/chart-block"},{title:"Configure","title.zh-CN":"\u914D\u7F6E\u56FE\u8868",link:"/handbook/data-visualization/user/configure"},{title:"Filter block","title.zh-CN":"\u7B5B\u9009\u533A\u5757",link:"/handbook/data-visualization/user/filter"}]},{title:"Development","title.zh-CN":"\u5F00\u53D1\u6307\u5357",children:[{title:"Extend chart types","title.zh-CN":"\u6269\u5C55\u56FE\u8868\u7C7B\u578B",link:"/handbook/data-visualization/dev/"},{title:"Example of integrating ECharts","title.zh-CN":"ECharts \u96C6\u6210\u793A\u4F8B",link:"/handbook/data-visualization/step-by-step"}]},{title:"FAQ","title.zh-CN":"\u5E38\u89C1\u95EE\u9898",link:"/handbook/data-visualization/faq"}]},{title:"Multi-app manager","title.zh-CN":"\u591A\u5E94\u7528\u7BA1\u7406",link:"/handbook/multi-app-manager"}]},{title:"System management","title.zh-CN":"\u7CFB\u7EDF\u7BA1\u7406",type:"group",children:[{title:"Plugin manager","title.zh-CN":"\u63D2\u4EF6\u7BA1\u7406",link:"/handbook/plugin-manager"},{title:"System settings","title.zh-CN":"\u7CFB\u7EDF\u8BBE\u7F6E",link:"/handbook/system-settings"},{title:"Language settings","title.zh-CN":"\u8BED\u8A00\u8BBE\u7F6E",link:"/handbook/system-settings/language-settings"},{title:"Theme editor","title.zh-CN":"\u4E3B\u9898\u7F16\u8F91\u5668",link:"/handbook/theme-editor"},{title:"Localization management","title.zh-CN":"\u672C\u5730\u5316\u7BA1\u7406",link:"/handbook/localization-management"},{title:"Backup & Restore","title.zh-CN":"\u5907\u4EFD\u548C\u8FD8\u539F",link:"/handbook/backup-restore"}]},{title:"Others","title.zh-CN":"\u5176\u4ED6",type:"group",children:[{title:"API doc","title.zh-CN":"API \u6587\u6863",link:"/handbook/api-doc"},{title:"Embed","title.zh-CN":"\u5D4C\u5165",link:"/handbook/embed"},{title:"Custom brand","title.zh-CN":"\u81EA\u5B9A\u4E49\u54C1\u724C",link:"/handbook/custom-brand"}]}],"/development":[{title:"Getting started","title.zh-CN":"\u5FEB\u901F\u5F00\u59CB",type:"group",children:["/development","/development/your-fisrt-plugin","/development/app-ds"]},{title:"Server","title.zh-CN":"\u670D\u52A1\u7AEF",type:"group",children:["/development/server",{title:"Collections & Fields","title.zh-CN":"\u6570\u636E\u8868\u548C\u5B57\u6BB5",children:["/development/server/collections","/development/server/collections/options","/development/server/collections/configure","/development/server/collections/association-fields","/development/server/collections/field-extension","/development/server/collections/collection-template"]},"/development/server/resources-actions","/development/server/middleware","/development/server/commands","/development/server/events","/development/server/i18n","/development/server/logger","/development/server/telemetry","/development/server/migration","/development/server/test"]},{title:"Client","title.zh-CN":"\u5BA2\u6237\u7AEF",type:"group",children:["/development/client","/development/client/router","/development/client/styles-and-themes","/development/client/api-client","/development/client/providers",{title:"UI Schema","title.zh-CN":"UI Schema",children:["/development/client/ui-schema/quick-start","/development/client/ui-schema/what-is-ui-schema","/development/client/ui-schema/rendering","/development/client/ui-schema/extending","/development/client/ui-schema/components","/development/client/ui-schema/designable","/development/client/ui-schema/toolbar","/development/client/ui-schema/initializer","/development/client/ui-schema/settings"]},"/development/client/i18n","/development/client/test"]},{title:"Others","title.zh-CN":"\u5176\u4ED6",type:"group",children:["/development/others/build","/development/others/languages","/development/others/deps","/development/life-cycle"]}],"/api":["/api",{title:"@nocobase/acl",link:"/api/acl/acl"},{title:"@nocobase/actions",link:"/api/actions"},{title:"@nocobase/auth",type:"subMenu",children:["/api/auth/auth-manager","/api/auth/auth","/api/auth/base-auth"]},{title:"@nocobase/cache",type:"subMenu",children:["/api/cache/cache-manager","/api/cache/cache"]},{title:"@nocobase/cli",link:"/api/cli"},{title:"@nocobase/client",link:"https://client.docs.nocobase.com/core/application/application","link.zh-CN":"https://client.docs-cn.nocobase.com/core/application/application"},{title:"@nocobase/database",type:"subMenu",children:["/api/database","/api/database/collection","/api/database/field","/api/database/repository","/api/database/relation-repository/has-one-repository","/api/database/relation-repository/has-many-repository","/api/database/relation-repository/belongs-to-repository","/api/database/relation-repository/belongs-to-many-repository","/api/database/operators"]},{title:"@nocobase/data-source-manager",type:"subMenu",children:["/api/data-source-manager","/api/data-source-manager/data-source","/api/data-source-manager/i-collection-manager","/api/data-source-manager/i-collection","/api/data-source-manager/i-repository","/api/data-source-manager/i-model"]},{title:"@nocobase/logger",link:"/api/logger"},{title:"@nocobase/resourcer",type:"subMenu",children:["/api/resourcer/resource-manager","/api/resourcer/action"]},{title:"@nocobase/sdk",children:["/api/sdk","/api/sdk/auth","/api/sdk/storage"]},{title:"@nocobase/server",type:"subMenu",children:["/api/server/application","/api/server/plugin-manager","/api/server/plugin","/api/server/migration"]},{title:"@nocobase/telemetry",type:"subMenu",children:["/api/telemetry/telemetry","/api/telemetry/trace","/api/telemetry/metric"]},{title:"@nocobase/test",type:"subMenu",children:["/api/test/server","/api/test/client","/api/test/e2e"]}],"/plugin-samples":[{title:"Overview","title.zh-CN":"\u603B\u89C8",link:"/plugin-samples"},{title:"Router","title.zh-CN":"\u524D\u7AEF\u8DEF\u7531",type:"group",children:[{title:"Overview","title.zh-CN":"\u6982\u8FF0",link:"/plugin-samples/router"},{title:"Add Page","title.zh-CN":"\u65B0\u589E\u9875\u9762",link:"/plugin-samples/router/add-page"},{title:"Replace Page","title.zh-CN":"\u66FF\u6362\u9875\u9762",link:"/plugin-samples/router/replace-page"},{title:"Add Plugin Setting Page (Single Route)","title.zh-CN":"\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\uFF08\u5355\u4E2A\u8DEF\u7531\uFF09",link:"/plugin-samples/router/add-setting-page-single-route"},{title:"Add Plugin Setting Page (Tabs Routes)","title.zh-CN":"\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\uFF08Tabs \u8DEF\u7531\uFF09",link:"/plugin-samples/router/add-setting-page-tabs-routes"},{title:"Add Plugin Setting Page (different Routes)","title.zh-CN":"\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\uFF08\u4E0D\u540C\u5E03\u5C40\uFF09",link:"/plugin-samples/router/add-setting-page-layout-routes"}]}],"/breaking-changes":[{title:"Breaking changes","title.zh-CN":"\u4E0D\u517C\u5BB9\u53D8\u66F4",type:"group",children:["/breaking-changes/v0-19-0-alpha-1","/breaking-changes/v0-18-0-alpha-1","/breaking-changes/v0-17-0-alpha-5","/breaking-changes/v0-17-0-alpha-3","/breaking-changes/v0-17-0-alpha-1"]}]},github:"https://github.com/nocobase/nocobase",alert:'The document is currently under construction, with some content possibly missing or awaiting translation. For details, please refer to the <a target="_blank" href="https://github.com/nocobase/docs/commits/main/">changelog</a>',localesEnhance:[{id:"zh-CN",switchPrefix:"\u4E2D",hostname:"docs-cn.nocobase.com"},{id:"en-US",switchPrefix:"en",hostname:"docs.nocobase.com"}]},_2_level_nav_available:!0},children:g})}}}]);
