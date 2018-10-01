define({ "api": [
  {
    "type": "delete",
    "url": "/incidenttypes/:id",
    "title": "Delete Existing Incident Type",
    "version": "1.0.0",
    "name": "DeleteIncidentType",
    "group": "IncidentType",
    "description": "<p>Delete existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the incident type(or main event) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code.given",
            "description": "<p>Human readable given code of the alert e.g NMF etc. If not specified it will be generated from nature, family and name of incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code.cap",
            "description": "<p>Human readable Common Alert Protocol(CAP) code of the alert e.g Geo etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of the incident i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of the incident e.g Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about incident type if available i.e additional details that clarify what is incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"name\": \"Flood\",\n  \"code\":{\n    \"cap\":\"Mat\",\n    \"given\":\"NMF\"\n  },\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/incidenttypes/:id",
    "title": "Get Existing Incident Type",
    "version": "1.0.0",
    "name": "GetIncidentType",
    "group": "IncidentType",
    "description": "<p>Get existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the incident type(or main event) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code.given",
            "description": "<p>Human readable given code of the alert e.g NMF etc. If not specified it will be generated from nature, family and name of incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code.cap",
            "description": "<p>Human readable Common Alert Protocol(CAP) code of the alert e.g Geo etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of the incident i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of the incident e.g Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about incident type if available i.e additional details that clarify what is incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"name\": \"Flood\",\n  \"code\":{\n    \"cap\":\"Mat\",\n    \"given\":\"NMF\"\n  },\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/incidenttypes",
    "title": "List Incident Types",
    "version": "1.0.0",
    "name": "GetIncidentTypes",
    "group": "IncidentType",
    "description": "<p>Returns a list of incident types</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of incidenttypes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of the incident type(or main event) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.code.given",
            "description": "<p>Human readable given code of the alert e.g NMF etc. If not specified it will be generated from nature, family and name of incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code.cap",
            "description": "<p>Human readable Common Alert Protocol(CAP) code of the alert e.g Geo etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nature",
            "description": "<p>Human readable nature(or origin) of the incident i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.family",
            "description": "<p>Human readable family(group) of the incident e.g Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary about incident type if available i.e additional details that clarify what is incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of status returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest status was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n   {\n     \"_id\": \"5aeed5f37e422f2743b97eb0\",\n      \"name\": \"Flood\",\n      \"code\":{\n        \"cap\":\"Mat\",\n        \"given\":\"NMF\"\n      },\n      \"nature\": \"Natural\",\n      \"family\": \"Hydrological\",\n      \"color\": \"#45b726\",\n      \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n      \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n    }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/incidenttypes/:id",
    "title": "Patch Existing Incident Type",
    "version": "1.0.0",
    "name": "PatchIncidentType",
    "group": "IncidentType",
    "description": "<p>Patch existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the incident type(or main event) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code.given",
            "description": "<p>Human readable given code of the alert e.g NMF etc. If not specified it will be generated from nature, family and name of incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code.cap",
            "description": "<p>Human readable Common Alert Protocol(CAP) code of the alert e.g Geo etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of the incident i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of the incident e.g Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about incident type if available i.e additional details that clarify what is incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"name\": \"Flood\",\n  \"code\":{\n    \"cap\":\"Mat\",\n    \"given\":\"NMF\"\n  },\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/incidenttypes",
    "title": "Create New Incident Type",
    "version": "1.0.0",
    "name": "PostIncidentType",
    "group": "IncidentType",
    "description": "<p>Create new incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the incident type(or main event) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code.given",
            "description": "<p>Human readable given code of the alert e.g NMF etc. If not specified it will be generated from nature, family and name of incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code.cap",
            "description": "<p>Human readable Common Alert Protocol(CAP) code of the alert e.g Geo etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of the incident i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of the incident e.g Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about incident type if available i.e additional details that clarify what is incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"name\": \"Flood\",\n  \"code\":{\n    \"cap\":\"Mat\",\n    \"given\":\"NMF\"\n  },\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/incidenttypes/:id",
    "title": "Put Existing Incident Type",
    "version": "1.0.0",
    "name": "PutIncidentType",
    "group": "IncidentType",
    "description": "<p>Put existing incident type</p>",
    "filename": "lib/incidenttype.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-incident-type.herokuapp.com/v1/incidenttypes/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique incident type identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the incident type(or main event) e.g Flood etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code.given",
            "description": "<p>Human readable given code of the alert e.g NMF etc. If not specified it will be generated from nature, family and name of incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code.cap",
            "description": "<p>Human readable Common Alert Protocol(CAP) code of the alert e.g Geo etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nature",
            "description": "<p>Human readable nature(or origin) of the incident i.e Natural or Technological/Man-Made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Human readable family(group) of the incident e.g Biological, Climatological etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate incident types visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about incident type if available i.e additional details that clarify what is incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when incident type was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when incident type was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"name\": \"Flood\",\n  \"code\":{\n    \"cap\":\"Mat\",\n    \"given\":\"NMF\"\n  },\n  \"nature\": \"Natural\",\n  \"family\": \"Hydrological\",\n  \"color\": \"#45b726\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
