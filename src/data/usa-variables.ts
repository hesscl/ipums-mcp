// Auto-generated from https://usa.ipums.org/usa-action/variables/group
// Scraped 2026-02-27 — 827 harmonized variables
// Sample columns shown are representative; many more samples exist per year.

export interface UsaVariable {
  name: string;
  label: string;
  /** H = household-level record, P = person-level record */
  type: "H" | "P";
  /** Thematic group(s) this variable belongs to */
  groups: string[];
  /**
   * IPUMS USA sample IDs where this variable is available.
   * Derived from the representative display columns on usa.ipums.org.
   * Use microdata_list_samples to get the full sample list.
   */
  samples: string[];
}

export const USA_VARIABLES: UsaVariable[] = [
  {
    "name": "ABSENT",
    "label": "Absent from work last week",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "ACCESS",
    "label": "Access to unit",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "ACREHOUS",
    "label": "House acreage",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1980a"
    ]
  },
  {
    "name": "ACRENONF",
    "label": "Acreage of nonfarm house",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "ACREPROP",
    "label": "Acreage of property",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "ACTIVITY",
    "label": "Main activity last week",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "ADJGINC",
    "label": "Tax unit's adjusted gross income",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "ADJUST",
    "label": "Adjustment factor, ACS/PRCS",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "ADJUSTUTP",
    "label": "Urban Transition Project adjustment flag",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "AGE",
    "label": "Age",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "AGEMARR",
    "label": "Age at first marriage",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1980a",
      "us1970c",
      "us1960a",
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "AGEMONTH",
    "label": "Age in months",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "AGENTNUM",
    "label": "Enumeration agent number",
    "type": "H",
    "groups": [
      "Household: Historical Oversample"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "AGEORIG",
    "label": "Age (original version)",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2006a"
    ]
  },
  {
    "name": "AGESTR",
    "label": "Age, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "AIRCON",
    "label": "Air conditioning",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "ALLTYR",
    "label": "Year of allotment, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "ANCESTR1",
    "label": "Ancestry, first response",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "ANCESTR2",
    "label": "Ancestry, second response",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "APPAL",
    "label": "Appalachian region",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "ARRIVES",
    "label": "Time of arrival at work",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "AUTOS",
    "label": "Automobiles available",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "AVAILBLE",
    "label": "Available for work",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "BASEMENT",
    "label": "Basement",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "BATHRMS",
    "label": "Number of bathrooms",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "BEDROOMS",
    "label": "Number of bedrooms",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "BEDROOMSORIG",
    "label": "Number of bedrooms (original version)",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "BIRTHMO",
    "label": "Month of birth",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1950a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a"
    ]
  },
  {
    "name": "BIRTHMOSTR",
    "label": "Month of birth, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "BIRTHQTR",
    "label": "Quarter of birth",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1880a",
      "us1870a"
    ]
  },
  {
    "name": "BIRTHYR",
    "label": "Year of birth",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "BLIND",
    "label": "Blind",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1910a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "BLINDSTR",
    "label": "Blind, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "BLOODB",
    "label": "Percentage of black blood, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "BLOODI",
    "label": "Percentage of Indian blood, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1930a",
      "us1910a"
    ]
  },
  {
    "name": "BLOODW",
    "label": "Percentage of white blood, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "BPL",
    "label": "Birthplace",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "BPLSTR",
    "label": "Birthplace, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "BUILTYR",
    "label": "Age of structure",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "BUILTYR2",
    "label": "Age of structure, decade",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "CANRDSTR",
    "label": "Can read, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "CANTRDSTR",
    "label": "Cannot read, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "CANTWRTSTR",
    "label": "Cannot write, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "CANWRTSTR",
    "label": "Can write, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "CARPOOL",
    "label": "Carpooling",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "CBHHTYPE",
    "label": "Census bureau household type (with cohabiting)",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a"
    ]
  },
  {
    "name": "CBNSUBFAM",
    "label": "Number of subfamilies in household (original Census Bureau classification)",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "CBPERNUM",
    "label": "Original Census Bureau person number in sample unit",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "CBPOVERTY",
    "label": "Poverty status (original Census Bureau calculation)",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "CBSERIAL",
    "label": "Original Census Bureau household serial number [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "CBSFRELATE",
    "label": "Subfamily relationship (original Census Bureau classification)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "CBSFTYPE",
    "label": "Subfamily type (original Census Bureau classification)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "CBSUBFAM",
    "label": "Subfamily number (original Census Bureau classification)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "CHBORN",
    "label": "Children ever born",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "CHSURV",
    "label": "Children surviving",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "CIDATAPLN",
    "label": "Cellular data plan for a smartphone or other mobile device",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CIDIAL",
    "label": "Dial-up service",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CIHAND",
    "label": "Handheld computer",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": []
  },
  {
    "name": "CIHISPEED",
    "label": "Broadband (high speed) Internet service such as cable, fiber optic, or DSL service",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CILAPTOP",
    "label": "Laptop, desktop, or notebook computer",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CINETHH",
    "label": "Access to internet",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CIOTHCOMP",
    "label": "Other computer equipment",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CIOTHSVC",
    "label": "Other internet service",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CISAT",
    "label": "Satellite internet service",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CISMRTPHN",
    "label": "Smartphone",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CITABLET",
    "label": "Tablet or other portable wireless computer",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CITIZEN",
    "label": "Citizenship status",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970c",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1870a"
    ]
  },
  {
    "name": "CITIZENSTR",
    "label": "Citizenship status, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "CITY",
    "label": "City (identifiable cities only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "CITYERR",
    "label": "Coverage error in CITY variable",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "CITYMETD",
    "label": "Central city of metropolitan district",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "CITYPOP",
    "label": "City population (identifiable cities only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "CITYSTR",
    "label": "City, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "CLASS5YR",
    "label": "Class of worker 5 years ago",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "CLASSWKR",
    "label": "Class of worker",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a"
    ]
  },
  {
    "name": "CLUSTER",
    "label": "Household cluster for variance estimation [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "CNTRY",
    "label": "Country",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "CNTYGP97",
    "label": "County group, 1970",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "CNTYGP98",
    "label": "County group, 1980",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "CNTYSTR",
    "label": "County, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "COLL5YR",
    "label": "College 5 years ago",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "COMMUSE",
    "label": "Commercial use",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "COMZONE",
    "label": "Commuting Zone within Labor Market Area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "CONDO",
    "label": "Condominium status",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "CONDOFEE",
    "label": "Monthly condominium and/or homeowners association fee",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "CONMARST",
    "label": "Consensual marriage, Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": []
  },
  {
    "name": "CONSPUMA",
    "label": "Consistent PUMA, 1980-1990-2000",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "CONSTYPR",
    "label": "Type of construction material, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "COOKLOPR",
    "label": "Location of cooking facilities, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "COOKTYPR",
    "label": "Type of cooking facilities, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "COSTELEC",
    "label": "Annual electricity cost",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "COSTFUEL",
    "label": "Annual home heating fuel cost",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "COSTGAS",
    "label": "Annual gas cost",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "COSTWATR",
    "label": "Annual water cost",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "COUNTYFIP",
    "label": "County (FIPS code, identifiable counties only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1950a"
    ]
  },
  {
    "name": "COUNTYICP",
    "label": "County (ICPSR code, identifiable counties only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "COUNTYNHG",
    "label": "County (NHGIS code, identifiable counties only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "COUPLETYPE",
    "label": "Householder couple type",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a"
    ]
  },
  {
    "name": "CPI99",
    "label": "CPI-U adjustment factor to 1999 dollars",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "CPUMA0010",
    "label": "Consistent PUMA, 2000-2010",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "CPUMA1020",
    "label": "Consistent PUMA, 2010-2020",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "CRIME",
    "label": "Crime",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "DEAF",
    "label": "Deaf and dumb",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1910a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "DEAFSTR",
    "label": "Deaf, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "DEDUCTS",
    "label": "Deductions for retirement",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "DEGFIELD",
    "label": "Field of degree",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "DEGFIELD2",
    "label": "Field of degree (2)",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "DENSITY",
    "label": "Population-weighted density of PUMA",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "DEPARTS",
    "label": "Time of departure for work",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "DIFFCARE",
    "label": "Self-care difficulty",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "DIFFEYE",
    "label": "Vision difficulty",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "DIFFHEAR",
    "label": "Hearing difficulty",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "DIFFMOB",
    "label": "Independent living difficulty",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "DIFFPHYS",
    "label": "Ambulatory difficulty",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "DIFFREM",
    "label": "Cognitive difficulty",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "DIFFSENS",
    "label": "Vision or hearing difficulty",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "DISABDUR",
    "label": "Duration of work disability",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "DISABSTR",
    "label": "Disability condition, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "DISABSTR2",
    "label": "Alternate disability condition, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "DISABTRN",
    "label": "Public transportation disability",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "DISABWRK",
    "label": "Work disability",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970c"
    ]
  },
  {
    "name": "DISHWSHR",
    "label": "Dishwasher",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "DIVINYR",
    "label": "Divorced in the past year",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "DRYER",
    "label": "Clothes dryer",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "DURMARR",
    "label": "Duration of current marital status",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1950a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "DURUNEMP",
    "label": "Continuous weeks unemployed",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "DWELLING",
    "label": "Dwelling serial number",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "DWNUMSTR",
    "label": "Dwelling number, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "DWSEQ",
    "label": "Household sequence within dwelling",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "DWSIZE",
    "label": "Dwelling size",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "EDATTEND",
    "label": "Attended educational institution, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "EDINST",
    "label": "State of educational institution, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "EDMISS",
    "label": "Identifies households in missing data enumeration districts",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "EDSCOR50",
    "label": "Occupational education score, 1950 basis",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "EDSCOR90",
    "label": "Occupational education score, 1990 basis",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "EDSIMIL",
    "label": "Enumeration district match ID",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "EDUC",
    "label": "Educational attainment",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "ELDCH",
    "label": "Age of eldest own child in household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "ELECTRPR",
    "label": "Electric Lighting, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "ELEVATOR",
    "label": "Elevator in structure",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1980a",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "EMPSTAT",
    "label": "Employment status",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1910a"
    ]
  },
  {
    "name": "ENUMDAY",
    "label": "Day of enumeration",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "ENUMDIST",
    "label": "Enumeration district",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "ENUMMO",
    "label": "Month of enumeration",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "ENUMYR",
    "label": "Alaska enumeration year",
    "type": "H",
    "groups": [
      "Household: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "ERSCOR50",
    "label": "Occupational earnings score, 1950 basis",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "ERSCOR90",
    "label": "Occupational earnings score, 1990 basis",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "EXPWTH",
    "label": "Experimental housing unit weight",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": []
  },
  {
    "name": "EXPWTP",
    "label": "Experimental person weight",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": []
  },
  {
    "name": "FAMNOSTR",
    "label": "Family number, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "FAMSIZE",
    "label": "Number of own family members in household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "FAMUNIT",
    "label": "Family unit membership",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "FARM",
    "label": "Farm status",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "FARMPROD",
    "label": "Sales of farm products",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "FARMSCHD",
    "label": "Farm schedule",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "FBPL",
    "label": "Father's birthplace",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1970d",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "FBPLSTR",
    "label": "Father's birthplace, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "FBUSINC",
    "label": "Business income of other family members",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "FDSTPAMT",
    "label": "Food stamp amount",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2006a"
    ]
  },
  {
    "name": "FERTYR",
    "label": "Children born within the last year",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "FMTONGUE",
    "label": "Father's mother tongue",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1920a",
      "us1910a"
    ]
  },
  {
    "name": "FOODSTMP",
    "label": "Food stamp recipiency",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "FOTHINC",
    "label": "Other income of other family members",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "FREEZER",
    "label": "Home food freezer",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "FRIDGE",
    "label": "Refrigerator",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "FRIDGEORIG",
    "label": "Refrigerator (original version)",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": []
  },
  {
    "name": "FRIGTYPR",
    "label": "Type of Refrigerator, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": []
  },
  {
    "name": "FTOTINC",
    "label": "Total family income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "FTRIBE",
    "label": "Father's tribe",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "FUELCOOK",
    "label": "Cooking fuel",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1980a",
      "us1970c"
    ]
  },
  {
    "name": "FUELHEAT",
    "label": "Home heating fuel",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "FUELWATR",
    "label": "Water heating fuel",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1980a",
      "us1970c"
    ]
  },
  {
    "name": "FWAGE1",
    "label": "Family wage and salary income",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "FWAGE2",
    "label": "Wage/salary income of other family members",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "GCHOUSE",
    "label": "Own grandchildren living in household",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "GCMONTHS",
    "label": "Months responsible for grandchildren",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "GCRESPON",
    "label": "Responsible for grandchildren",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "GQ",
    "label": "Group quarters status [preselected]",
    "type": "H",
    "groups": [
      "Household: Group Quarters"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "GQFUNDS",
    "label": "Group quarters funding",
    "type": "H",
    "groups": [
      "Household: Group Quarters"
    ],
    "samples": [
      "us1950a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "GQSTR",
    "label": "Group quarters, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "GQTYPE",
    "label": "Group quarters type",
    "type": "H",
    "groups": [
      "Household: Group Quarters"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "GRADEATT",
    "label": "Grade level attending",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "GROWNPR",
    "label": "Produce fruits, vegetables, or livestock for home consumption, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "HADNAJOB",
    "label": "Had a non-active job last week",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "HCOVANY",
    "label": "Any health insurance coverage",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HCOVANY2",
    "label": "Any health insurance coverage (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HCOVPRIV",
    "label": "Private health insurance coverage",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HCOVPRIV2",
    "label": "Private health insurance coverage (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HCOVPUB",
    "label": "Public health insurance coverage",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HCOVPUB2",
    "label": "Public health insurance coverage (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HCOVSUB2",
    "label": "Subsidized marketplace insurance coverage (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a"
    ]
  },
  {
    "name": "HEATING",
    "label": "Heating equipment",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "HEATSUB",
    "label": "Federal heating/cooling subsidy",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "HHINCOME",
    "label": "Total household income",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "HHTYPE",
    "label": "Household Type",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "HHWT",
    "label": "Household weight [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "HIFARM",
    "label": "Hawaii farm",
    "type": "H",
    "groups": [
      "Household: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "HIGRADE",
    "label": "Highest grade of schooling",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "HIK",
    "label": "Historical identification key",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "HINSCAID",
    "label": "Health insurance through Medicaid",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HINSCAID2",
    "label": "Health insurance through Medicaid (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HINSCARE",
    "label": "Health insurance through Medicare",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HINSCARE2",
    "label": "Health insurance through Medicare (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HINSEMP",
    "label": "Health insurance through employer/union",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HINSEMP2",
    "label": "Health insurance through employer/union (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HINSIHS",
    "label": "Health insurance through Indian Health Services",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HINSIHS2",
    "label": "Health insurance through Indian Health Services (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HINSPUR",
    "label": "Health insurance purchased directly",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HINSPUR2",
    "label": "Health insurance purchased directly (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HINSTRI",
    "label": "Health insurance through TRICARE",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HINSTRI2",
    "label": "Health insurance through TRICARE (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HINSVA",
    "label": "Health insurance through VA",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HINSVA2",
    "label": "Health insurance through VA (original)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": []
  },
  {
    "name": "HISP1910",
    "label": "Reason included, Hispanic oversamped cases in 1910",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "HISP1970",
    "label": "Hispanic origin, 1970 alternate version",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "HISPAN",
    "label": "Hispanic origin",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "HISPRULE",
    "label": "Hispanic origin rule",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "HISTID",
    "label": "Consistent historical data person identifier [preselected]",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "HISTIDHEAD",
    "label": "Unique historical identifier for head of household",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "HIUFPGBASE",
    "label": "Federal poverty guidelines (base)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HIUFPGINC",
    "label": "Federal poverty guidelines (increment)",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HIUHHSPOV",
    "label": "Ratio of HIU income to households poverty guidelines",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a"
    ]
  },
  {
    "name": "HIUID",
    "label": "HIU identification",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HIUNPERS",
    "label": "HIU number of persons",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HIUPOVUNIV",
    "label": "Person in HIU poverty universe",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a"
    ]
  },
  {
    "name": "HIURULE",
    "label": "HIU pointer rule",
    "type": "P",
    "groups": [
      "Person: Health Insurance"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "HOMECITY",
    "label": "City of origin, Alaskan schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "HOMECNTY",
    "label": "County of origin, Alaskan schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "HOMELAND",
    "label": "American Indian, Alaska Native, or Native Hawaiian homeland area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "HOMEMCD",
    "label": "Minor civil division of origin, Alaskan schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "HOMEMKR",
    "label": "Designated homemaker",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1930a"
    ]
  },
  {
    "name": "HOMESTAT",
    "label": "State of origin, Alaskan schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "HOTWATER",
    "label": "Hot and cold piped water",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "HOTWTRPR",
    "label": "Type of water heater, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "HOUSENUMSTR",
    "label": "Address house number, alpabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "HOUSQUAL",
    "label": "Condition of housing",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1960a"
    ]
  },
  {
    "name": "HRSWORK1",
    "label": "Hours worked last week",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "HRSWORK2",
    "label": "Hours worked last week, intervalled",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "HWSEI",
    "label": "Socioeconomic Index, Hauser and Warren",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "IDIOTIC",
    "label": "Idiotic",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "IDIOTICSTR",
    "label": "Idiotic, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "IHOME",
    "label": "Indian home",
    "type": "H",
    "groups": [
      "Household: Historical Oversample"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "IMAGEFILE",
    "label": "Image file name",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "IMPREL",
    "label": "Imputed relationship to household head",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "INAME",
    "label": "Second name, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "INCBUS",
    "label": "Non-farm business income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "INCBUS00",
    "label": "Business and farm income, 2000",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "INCBUSFM",
    "label": "Business and farm income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "INCEARN",
    "label": "Total personal earned income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "INCFARM",
    "label": "Farm income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "INCINVST",
    "label": "Interest, dividend, and rental income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "INCNONWG",
    "label": "Had non-wage/salary income over $50",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "INCORP",
    "label": "Incorporated municipality code",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "INCOTHER",
    "label": "Other income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "INCRETIR",
    "label": "Retirement income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "INCSS",
    "label": "Social Security income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "INCSTR",
    "label": "Incorporated municipality, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "INCSUPP",
    "label": "Supplementary Security Income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "INCTOT",
    "label": "Total personal income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "INCWAGE",
    "label": "Wage and salary income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "INCWELFR",
    "label": "Welfare (public assistance) income",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "IND",
    "label": "Industry",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "IND1930",
    "label": "Industry, Unrecoded 1930",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1930a"
    ]
  },
  {
    "name": "IND1950",
    "label": "Industry, 1950 basis",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "IND1990",
    "label": "Industry, 1990 basis",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "IND5YR",
    "label": "Industry 5 years ago",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "INDNAICS",
    "label": "Industry, NAICS classification",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "INDSTR",
    "label": "Industry, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a"
    ]
  },
  {
    "name": "INSANE",
    "label": "Insane",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "INSANESTR",
    "label": "Insane, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "INSINCL",
    "label": "Mortgage payment includes property insurance",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "ITAX",
    "label": "Tax status, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "KITCHEN",
    "label": "Kitchen or cooking facilities",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "KITCHENORIG",
    "label": "Kitchen or cooking facilities (original version)",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "KITPIPPR",
    "label": "Kitchen sink with piped water, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "LABFORCE",
    "label": "Labor force status",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "LANDOWN",
    "label": "Own or rent the land, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "LANDRENT",
    "label": "Rent includes land used for farming",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1960a"
    ]
  },
  {
    "name": "LANDRNPR",
    "label": "Amount paid for land rent, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "LANGUAGE",
    "label": "Language spoken",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1910a"
    ]
  },
  {
    "name": "LINE",
    "label": "Line number",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "LINGISOL",
    "label": "Linguistic isolation",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "LINK1850",
    "label": "Historical identification key flag for 1850",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1860",
    "label": "Historical identification key flag for 1860",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1870",
    "label": "Historical identification key flag for 1870",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1880",
    "label": "Historical identification key flag for 1880",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1900",
    "label": "Historical identification key flag for 1900",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1910",
    "label": "Historical identification key flag for 1910",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1920",
    "label": "Historical identification key flag for 1920",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1930",
    "label": "Historical identification key flag for 1930",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1940",
    "label": "Historical identification key flag for 1940",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LINK1950",
    "label": "Historical identification key flag for 1950",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LIT",
    "label": "Literacy",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "LITSTR",
    "label": "Literacy, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "LMA",
    "label": "Labor Market Area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "LNKLIFEM",
    "label": "LIFE-M linking variable",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "LOOKING",
    "label": "Looking for work",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "LUNCHSUB",
    "label": "Government school food subsidy",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "MAIMED",
    "label": "Maimed",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1880a"
    ]
  },
  {
    "name": "MAIMEDSTR",
    "label": "Maimed, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MARINYRSTR",
    "label": "Married within the past year, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MARMONTH",
    "label": "Month married",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1870a"
    ]
  },
  {
    "name": "MARMOSTR",
    "label": "Month married, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MARRINYR",
    "label": "Married within the past year",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "MARRNO",
    "label": "Times married",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us1980a",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1910a"
    ]
  },
  {
    "name": "MARRQTR",
    "label": "Quarter of first marriage",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1980a",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "MARST",
    "label": "Marital status",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "MARSTSTR",
    "label": "Marital status, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MBPL",
    "label": "Mother's birthplace",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1970d",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "MBPLSTR",
    "label": "Mother's birthplace, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "MCD",
    "label": "Minor Civil Division code",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "MCDPOP",
    "label": "Minor Civil Division population",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "MCDSTR",
    "label": "Minor Civil Division, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "MCIT5STR",
    "label": "City of residence 5 years ago, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "MCNY5STR",
    "label": "County of residence 5 years ago, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "MDSTATUS",
    "label": "Metropolitan district status",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "MEDICAREB",
    "label": "Person's Medicare Part B premium",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "MET2003",
    "label": "Metropolitan area, 2003 ACS",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "MET2013",
    "label": "Metropolitan area (2013 delineations, identifiable areas only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MET2013ERR",
    "label": "Coverage error in MET2013 variable",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MET2023",
    "label": "Metropolitan area (2023 delineations, identifiable areas only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "MET2023ERR",
    "label": "Coverage error in MET2023 variable",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "METAREA",
    "label": "Metropolitan area (pre-2013 delineations, identifiable areas only)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "METDIST",
    "label": "Metropolitan district",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "METPOP00",
    "label": "Average 2000 population of 2003 metro/micro areas in PUMA",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "METPOP10",
    "label": "Average 2010 population of 2013 metro/micro areas in PUMA",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "METPOP20",
    "label": "Average 2020 population of 2023 metro/micro areas in PUMA",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "METRO",
    "label": "Metropolitan status (where determinable)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "MICROSEQ",
    "label": "Microfilm sequence number",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "MIGCITY1",
    "label": "City of residence 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MIGCITY5",
    "label": "City of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1940a"
    ]
  },
  {
    "name": "MIGCOGRP5",
    "label": "County group of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "MIGCOUNTY1",
    "label": "County of residence 1 year ago (FIPS code)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MIGCOUNTY5",
    "label": "County of residence 5 years ago (FIPS code)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": []
  },
  {
    "name": "MIGCOUNTYICP5",
    "label": "County of residence 5 years ago (ICPSR code)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": []
  },
  {
    "name": "MIGCZ5",
    "label": "LMA Commuting Zone, 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": []
  },
  {
    "name": "MIGDIST1",
    "label": "Distance between counties, 1 year",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "MIGDIST5",
    "label": "Distance between counties, 5 years",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "MIGFARM1",
    "label": "Farm status 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "MIGFARM5",
    "label": "Farm status 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "MIGLMA5",
    "label": "Labor Market area of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": []
  },
  {
    "name": "MIGMET131",
    "label": "Metropolitan area of residence 1 year ago (2013 delineations)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MIGMET135",
    "label": "Metropolitan area of residence 5 years ago (2013 delineations)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": []
  },
  {
    "name": "MIGMET13ERR",
    "label": "Coverage error in MIGMET13 variables",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MIGMET23",
    "label": "Metropolitan area of residence 1 year ago (2023 delineations)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "MIGMET23ERR",
    "label": "Coverage error in MIGMET23 variables",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "MIGMETAREA1",
    "label": "Metropolitan area of residence 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us1950a"
    ]
  },
  {
    "name": "MIGMETAREA5",
    "label": "Metropolitan area of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1940a"
    ]
  },
  {
    "name": "MIGMETRO1",
    "label": "Metropolitan status 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1950a"
    ]
  },
  {
    "name": "MIGMETRO5",
    "label": "Metropolitan status 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a",
      "us1940a"
    ]
  },
  {
    "name": "MIGMETROD5",
    "label": "Metropolitan status 5 years ago, detailed (2000 only)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "MIGPLAC1",
    "label": "State or country of residence 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1950a"
    ]
  },
  {
    "name": "MIGPLAC5",
    "label": "State or country of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1940a"
    ]
  },
  {
    "name": "MIGPUMA1",
    "label": "Migration PUMA of residence 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MIGPUMA5",
    "label": "Migration PUMA of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1990a"
    ]
  },
  {
    "name": "MIGPUMANOW",
    "label": "Migration PUMA of residence, now",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MIGRATE1",
    "label": "Migration status 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1950a"
    ]
  },
  {
    "name": "MIGRATE5",
    "label": "Migration status, 5 years",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a",
      "us1940a"
    ]
  },
  {
    "name": "MIGSAMP",
    "label": "Migration sample identifier",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "MIGSEA1",
    "label": "SEA of residence 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "MIGSEA5",
    "label": "SEA of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "MIGSPUMA1",
    "label": "Migration Super-PUMA of residence 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "MIGSPUMA5",
    "label": "Migration Super-PUMA of residence 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "MIGTYPED5",
    "label": "Urban/rural residence type 5 years ago, detailed",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": []
  },
  {
    "name": "MILIT5YR",
    "label": "Armed forces 5 years ago",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "MMTONGUE",
    "label": "Mother's mother tongue",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1920a",
      "us1910a"
    ]
  },
  {
    "name": "MOAK",
    "label": "Month of migration to Alaska",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "MOBLHOM2",
    "label": "Annual mobile home costs including loan payments",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "MOBLHOME",
    "label": "Annual mobile home costs",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1990a"
    ]
  },
  {
    "name": "MOBLOAN",
    "label": "Mobile home loan",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "MOM2RULE",
    "label": "Rule for linking second mother (new)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "MOMFORBRNSTR",
    "label": "Mother of foreign birth, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MOMLKREA",
    "label": "Reason for mother link, alternate 1910 linking variable",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MOMLNKWT",
    "label": "Weight of mother link, alternate 1910 linking variable",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MOMLOC",
    "label": "Mother's location in the household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "MOMLOC2",
    "label": "Second mother's location in the household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "MOMNO",
    "label": "Mother number, alternate 1910 linking variable",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MOMRULE",
    "label": "Rule for linking mother (new)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "MOMRULE_HIST",
    "label": "Rule for linking mother",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "MOOP",
    "label": "Person's medical out of pocket expenses, other than premiums",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "MORTAMT1",
    "label": "First mortgage monthly payment",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "MORTAMT2",
    "label": "Second mortgage monthly payment",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "MORTGAG2",
    "label": "Second mortgage status",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "MORTGAGE",
    "label": "Mortgage status",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "MORTOTAL",
    "label": "Total monthly mortgage payment",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "MOUNEAK",
    "label": "Months unemployed last year, Alaskan schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "MOUNEMP",
    "label": "Months unemployed last year",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "MOUNEMPSTR",
    "label": "Months unemployed last year, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "MOVEDIN",
    "label": "When occupant moved into residence",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "MOVEDINORIG",
    "label": "When occupant moved into residence (original version)",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": []
  },
  {
    "name": "MST5STR",
    "label": "State of residence 5 years ago, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "MTONGSTR",
    "label": "Mother tongue, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "MTONGUE",
    "label": "Mother tongue",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1970d",
      "us1960a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a"
    ]
  },
  {
    "name": "MTRIBE",
    "label": "Mother's tribe",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "MULTGEN",
    "label": "Multigenerational household",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "MULTYEAR",
    "label": "Actual year of survey, multi-year ACS/PRCS [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": []
  },
  {
    "name": "N12ROOMS",
    "label": "1- and 2-room units (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "N17HWFAM",
    "label": "Persons age 0-17 in husband-wife families (total persons age 0-17)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "N5OFFPR",
    "label": "Population living outside of Puerto Rico 5 years ago",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NAGRIC",
    "label": "Employed farmers, farm managers, farm laborers, and farm foremen age 16+ (total employed persons age 16+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NAMEFRST",
    "label": "First name",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NAMELAST",
    "label": "Last name",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NATIVITY",
    "label": "Foreign birthplace or parentage",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1970d",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a"
    ]
  },
  {
    "name": "NATIVPR",
    "label": "Nativity and parentage, Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": []
  },
  {
    "name": "NAUTO",
    "label": "Households with one or more cars (total number of households)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NBLACK",
    "label": "Black population (total population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NBLUE",
    "label": "Employed blue collar workers -- crafts, operatives, nonfarm laborers -- age 16+ (total employed persons age 16+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NBUILT39",
    "label": "Units built 1939 or earlier (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NBUILT60",
    "label": "Units built 1960 or later (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NCHBORN",
    "label": "Children ever born to ever-married females age 35-44 (total females age 35-44)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NCHILD",
    "label": "Number of own children in the household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NCHLT5",
    "label": "Number of own children under age 5 in household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NCOLL",
    "label": "Persons age 3-34 enrolled in college (persons age 18-21)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NCOLL4",
    "label": "Persons age 25-64 with 4+ years of college completed (total persons age 25-54)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NCOUPLES",
    "label": "Number of couples in household",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NDIFCNTY",
    "label": "Persons age 5+ living in different county (or municipio) 5 years ago (total persons age 5+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NDILAPPR",
    "label": "Proportion of owner-occupied units deteriorating, dilapidated, or with original construction inadequate, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NEDUC12",
    "label": "Persons age 25-54 with 12+ years of school completed (total persons age 25-54)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NEDUC7",
    "label": "Persons age 25-54 with 0-7 years of school completed (total persons age 25-54)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NEDUCMED",
    "label": "Median years of school completed for persons age 25-54",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NENGPOP",
    "label": "New England population in minor civil division",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NFAMFEMH",
    "label": "Families with female head (total families)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NFAMPOV",
    "label": "Families with income below the poverty level (total families)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NFAMS",
    "label": "Number of families in household",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NFATHERS",
    "label": "Number of fathers in household",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NFINC15",
    "label": "Families with $15,000 or more family income (total families)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NFINC1PR",
    "label": "Proportion of families with less than $1,000 family income, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NFINC5",
    "label": "Families with less than $5,000 family income (total families)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NFINC6PR",
    "label": "Proportion of families with $6,000 or more family income, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NFOREIGN",
    "label": "Persons of foreign stock (total population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NGINI",
    "label": "Gini index of income concentration",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NHEAT",
    "label": "Units with steam or hot water, central warm-air furnace, built-in electric units, and floor, wall or pipeless furnace (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NILLITPR",
    "label": "Population 10 Years Old and over unable to read and write, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NLFPF",
    "label": "Female civilian labor force age 16+ (total civilian females age 16+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NLFPM",
    "label": "Male civilian labor force age 16+ (total civilian males age 16+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NMEDINC",
    "label": "Median family income, in thousands of dollars",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NMOTHERS",
    "label": "Number of mothers in household",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NNOSCHL",
    "label": "Persons age 16-21 not enrolled in school and not high school graduates (total persons age 16-21)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NNOWORK",
    "label": "Persons age 16-21 not in school, not employed or not in labor force (total persons age 16-21 not in school)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NOCCNOPL",
    "label": "Occupied units lacking some or all plumbing facilities (total occupied units)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NOCCPLUM",
    "label": "Occupied units with all plumbing facilities and with 1.01 or more persons per room (total occupied units)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NOCCUP",
    "label": "Occupied units with 1.01 or more persons per room (total occupied units)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NOWNEROC",
    "label": "Owner-occupied units (total occupied units)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPBOSS50",
    "label": "Nam-Powers-Boyd occupational status score, 1950 basis",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NPBOSS90",
    "label": "Nam-Powers-Boyd occupational status score, 1990 basis",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "NPOP1621",
    "label": "Population age 16-21 (total population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPOP17",
    "label": "Population age 0-17 (total population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPOP65",
    "label": "Population age 65+ (total population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPOPGQ",
    "label": "Population in group quarters, including inmates (total population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPOPHH",
    "label": "Population in households (total households)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPOPIND",
    "label": "Primary individuals (total households)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPOPPOV",
    "label": "Persons with income below the poverty level (total population for which poverty status is determined)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NPROFMGR",
    "label": "Employed professional and kindred workers, and managers and administrators -- except farm -- age 16+ (total employed persons age 16+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRATIO25",
    "label": "Units with gross rent-income ratio of .25 or more (total renter-occupied units for which gross rent is tabulated)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRATIO35",
    "label": "Units with gross rent-income ratio of .35 or more (total renter-occupied units for which gross rent is tabulated)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRENT150",
    "label": "Renter-occupied units with gross monthly rent $150 or more (total renter-occupied units for which gross rent is tabulated)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRENT40",
    "label": "Renter-occupied units with gross monthly rent less than $40 (total renter-occupied units for which gross rent is tabulated)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRENT60",
    "label": "Renter-occupied units with gross monthly rent less than $60 (total renter-occupied units for which gross rent is tabulated)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRN100PR",
    "label": "Proportion of renter-occupied units with gross monthly rent $100+, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRN20PR",
    "label": "Proportion of renter-occupied units with gross monthly rent less than $20, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NRN40PR",
    "label": "Proportion of renter-occupied units with gross monthly rent less than $40, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NSAMHOUS",
    "label": "Persons age 5+ living in same house 5 years ago (total persons age 5+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NSEPDIV",
    "label": "Separated and divorced population (married population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NSERIAL",
    "label": "Serial number of first household in the neighborhood",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NSIBS",
    "label": "Number of own siblings in household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NSPANISH",
    "label": "Persons of Spanish heritage (total population)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NSUBFAM",
    "label": "Number of subfamilies in household",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "NTOTROOM",
    "label": "Total rooms in all units (total units -- year round) -- range: 0.0 to 9.9",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NUMHH",
    "label": "Number of households in dwelling",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NUMHHTAK",
    "label": "Number of households sampled from dwelling",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NUMPERHH",
    "label": "Number of persons in household",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1850a"
    ]
  },
  {
    "name": "NUMPREC",
    "label": "Number of person records following",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "NUNEMP",
    "label": "Unemployed persons age 16+ (total civilian labor force age 16+)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NUNITS1",
    "label": "Units in one-unit structures (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NUNITS5",
    "label": "Units in structures of 5 or more units (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NVACANT",
    "label": "Vacant units -- year round (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NVACRENT",
    "label": "Vacant for rent and vacant for sale (total units -- year round)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NVAL15PR",
    "label": "Proportion of owner-occupied units valued at $15,000 and over, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NVAL2PR",
    "label": "Proportion of owner-occupied units valued at less than $2,000, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NVALUE10",
    "label": "Owner-occupied units valued at less than $10,000 (total owner-occupied units for which value is tabulated)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "NVALUE25",
    "label": "Owner-occupied units valued at $25,000 and over (total owner-occupied units for which value is tabulated)",
    "type": "H",
    "groups": [
      "Household: 1970 Neighborhood"
    ],
    "samples": []
  },
  {
    "name": "OCC",
    "label": "Occupation",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1850a"
    ]
  },
  {
    "name": "OCC0050",
    "label": "Occupation in 1900, detailed 1950 classification",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": []
  },
  {
    "name": "OCC1930",
    "label": "Occupation, Unrecoded 1930",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1930a"
    ]
  },
  {
    "name": "OCC1950",
    "label": "Occupation, 1950 basis",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "OCC1990",
    "label": "Occupation, 1990 basis",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "OCC2010",
    "label": "Occupation, 2010 basis",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "OCC5YR",
    "label": "Occupation 5 years ago",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "OCC5YR95",
    "label": "Occupation 5 years ago, 1950 basis",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "OCCDUPE",
    "label": "Duplicate Occupations Flag, 1870 100%",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "OCCHISCO",
    "label": "Occupation, HISCO classification",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": []
  },
  {
    "name": "OCCSCORE",
    "label": "Occupational income score",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "OCCSOC",
    "label": "Occupation, SOC classification",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "OCCSTR",
    "label": "Occupation, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "OFFICEPR",
    "label": "Medical, professional or other office use of property, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "OFFPOV",
    "label": "Official poverty status",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "OLDPPROP",
    "label": "Unedited personal estate value, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "OLDRPROP",
    "label": "Unedited real estate value, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "OTHURBYN",
    "label": "Urbanized Area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "OWNCOST",
    "label": "Selected monthly owner costs",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "OWNERSHP",
    "label": "Ownership of dwelling (tenure)",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "OWNLAND",
    "label": "Resides on own land, Indian schedules",
    "type": "H",
    "groups": [
      "Household: Historical Oversample"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "PAGENO",
    "label": "Microfilm page number",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "PAUPER",
    "label": "Pauper",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "PCTMETRO",
    "label": "Percent of PUMA population living in metro area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "PERNUM",
    "label": "Person number in sample unit [preselected]",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "PERNUM80",
    "label": "Person number, before large group quarters were split up, 1880 100%",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "PERSPROP",
    "label": "Value of personal estate",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us1870a",
      "us1860a"
    ]
  },
  {
    "name": "PERWT",
    "label": "Person weight [preselected]",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "PFARMSCH",
    "label": "Person received farm schedule",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "PHONE",
    "label": "Telephone availability",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "PHONEORIG",
    "label": "Telephone availability (original version)",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": []
  },
  {
    "name": "PIPLOCPR",
    "label": "Location of Piped Water, Puerto Rico",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "PLUMBING",
    "label": "Plumbing facilities",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "POLYGMY",
    "label": "Living in polygamous marriage, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "POLYSIS",
    "label": "Polygamous wives are sisters, Indian schedules",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "POP2RULE",
    "label": "Rule for linking second father (new)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "POPFORBRNSTR",
    "label": "Father of foreign birth, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "POPLOC",
    "label": "Father's location in the household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "POPLOC2",
    "label": "Second father's location in the household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "POPRULE",
    "label": "Rule for linking father (new)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "POPRULE_HIST",
    "label": "Rule for linking father",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "POSTOFFSTR",
    "label": "Post office, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "POVERTY",
    "label": "Poverty status",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "PPROPSTR",
    "label": "Personal estate value, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "PRCITYCO",
    "label": "Puerto Rican city code",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "PRCOUNTA",
    "label": "Puerto Rican county alpha",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "PRCOUNTY",
    "label": "Puerto Rican county code, identifiable counties only",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "PRDATANU",
    "label": "Puerto Rican dataset",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "PREDAI",
    "label": "American Indian/Alaska Native race response predicted value",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PREDAPI",
    "label": "Asian/Pacific Islander race response predicted value",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PREDBLK",
    "label": "Black/African American race response predicted value",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PREDHISP",
    "label": "Hispanic/Latino response predicted value",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PREDWHT",
    "label": "White race response predicted value",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PRENT",
    "label": "Occupational prestige score, Nakao and Treas",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "PRESGL",
    "label": "Occupational prestige score, Siegel",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "PRICOPAR",
    "label": "Puerto Rican Parentage Indicator",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": []
  },
  {
    "name": "PRLIT",
    "label": "Literacy in Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": []
  },
  {
    "name": "PROBAI",
    "label": "Probability of American Indian race response",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PROBAPI",
    "label": "Probability of Asian/Pacific Islander race response",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PROBBLK",
    "label": "Probability of black race response",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PROBOTH",
    "label": "Probability of 'other race' race response",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PROBWHT",
    "label": "Probability of white race response",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PROPINSR",
    "label": "Annual property insurance cost",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "PROPTX99",
    "label": "Annual property taxes, 1990",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "PROPTXIN",
    "label": "Annual property tax and insurance cost",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "PRTITLE",
    "label": "Puerto Rican title",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "PRTWNSHP",
    "label": "Puerto Rican township",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "PUBHOUS",
    "label": "Public housing",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "PUMA",
    "label": "Public Use Microdata Area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1990a"
    ]
  },
  {
    "name": "PUMAAREA",
    "label": "PUMA total area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "PUMALAND",
    "label": "PUMA land area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "PUMAMINI",
    "label": "Mini-PUMA (50,000+ residents)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "PUMASUPR",
    "label": "Super Public Use Microdata Area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PUMATY00",
    "label": "PUMA type, 2000",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "PUMATYPE",
    "label": "PUMA type",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1990a"
    ]
  },
  {
    "name": "PWCITY",
    "label": "Place of work: city",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "PWCNTYGP",
    "label": "Place of work: county group",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "PWCOUNTY",
    "label": "Place of work: county",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "PWCZ",
    "label": "Place of work: LMA commuting zone",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": []
  },
  {
    "name": "PWLMA",
    "label": "Place of work: labor market area",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": []
  },
  {
    "name": "PWMET13",
    "label": "Place of work: metropolitan area (2013 delineations)",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "PWMET13ERR",
    "label": "Coverage error in PWMET13 variable",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "PWMET23",
    "label": "Place of work: metropolitan area (2023 delineations)",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "PWMET23ERR",
    "label": "Coverage error in PWMET23 variable",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "PWMET98",
    "label": "Place of work: metropolitan status, 1980",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "PWMET98E",
    "label": "Place of work: detailed urban/rural categories",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": []
  },
  {
    "name": "PWMETAREA",
    "label": "Place of work: metropolitan area",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "PWMETSTAT",
    "label": "Place of work: metropolitan status",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "PWMETSTATD",
    "label": "Place of work: metropolitan status, detailed (2000 only)",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "PWPUMA",
    "label": "Place of work: PUMA",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us1990a"
    ]
  },
  {
    "name": "PWPUMA00",
    "label": "Place of work: PUMA, 2000 onward",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "PWSIZE",
    "label": "Place of work: place size",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": []
  },
  {
    "name": "PWSPUMA",
    "label": "Super-PUMA of work",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "PWSTATE1",
    "label": "Place of work: relative to state of residence",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "PWSTATE2",
    "label": "Place of work: state",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "PWURBTYP",
    "label": "Place of work: urbanized area",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": []
  },
  {
    "name": "RACAMIND",
    "label": "Race: American Indian or Alaska Native",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RACASIAN",
    "label": "Race: Asian",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RACBLK",
    "label": "Race: black or African American",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RACE",
    "label": "Race",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "RACESING",
    "label": "Race: Single race identification (old version)",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "RACESTR",
    "label": "Race, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "RACHSING",
    "label": "Race: Simplified race/ethnicity identification",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RACNUM",
    "label": "Number of major race groups",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RACOTHER",
    "label": "Race: some other race",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RACPACIS",
    "label": "Race: Pacific Islander",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RACWHT",
    "label": "Race: white",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "RADIO",
    "label": "Radio",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "RADIO30",
    "label": "Radio, 1930",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1930a"
    ]
  },
  {
    "name": "RCLASSWK",
    "label": "Class of worker, labor reserve",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "RCVDAY",
    "label": "Day census office received form",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1880a"
    ]
  },
  {
    "name": "RCVMO",
    "label": "Month census office received form",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1880a"
    ]
  },
  {
    "name": "REALPROP",
    "label": "Real estate value",
    "type": "P",
    "groups": [
      "Person: Income"
    ],
    "samples": [
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "RECTYPE",
    "label": "Record type",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "REEL",
    "label": "Microfilm reel number",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "REGION",
    "label": "Census region and division",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "RELATE",
    "label": "Relationship to household head",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "RELSTR",
    "label": "Relationship to household head, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "RENT",
    "label": "Monthly contract rent",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1940a"
    ]
  },
  {
    "name": "RENT30",
    "label": "Monthly contract rent, 1930",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us1930a"
    ]
  },
  {
    "name": "RENTGRS",
    "label": "Monthly gross rent",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "RENTMEAL",
    "label": "Meals included in rent",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "RENTSUB",
    "label": "Government rental subsidy",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "REPWT",
    "label": "Household replicate weights [80 variables] [multiple variables]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "REPWTP",
    "label": "Person replicate weights [80 variables] [multiple variables]",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "RESPMODE",
    "label": "Response mode",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "RESPOND",
    "label": "Respondent's relationship to household head",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "RESPONDT",
    "label": "Respondent indicator",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "RIDERS",
    "label": "Vehicle occupancy",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "RIND",
    "label": "Industry, labor reserve",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "ROCC",
    "label": "Occupation, labor reserve",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "ROOMS",
    "label": "Number of rooms",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "ROOMSORIG",
    "label": "Number of rooms (original version)",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "RPROPSTR",
    "label": "Real estate value, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "RURALYN",
    "label": "Size of Nonmetropolitan Place",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "RWATPR",
    "label": "Running water",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": []
  },
  {
    "name": "SAMEMET1",
    "label": "Lived same metropolitan area 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "SAMEMET5",
    "label": "Lived same metropolitan area 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1980a",
      "us1940a"
    ]
  },
  {
    "name": "SAMEPLAC5",
    "label": "Lived same incorporated place 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "SAMESEA1",
    "label": "Lived same SEA 1 year ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "SAMESEA5",
    "label": "Lived same SEA 5 years ago",
    "type": "P",
    "groups": [
      "Person: Migration"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "SAMP1900",
    "label": "Sample components, 1900",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "SAMP1910",
    "label": "Sample components, 1910",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "SAMP1960",
    "label": "Report form, 1960",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1960a"
    ]
  },
  {
    "name": "SAMPLE",
    "label": "IPUMS sample identifier [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SAMPRULE",
    "label": "Sampling rule",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SCHLMNTH",
    "label": "Months in school",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "SCHLTYPE",
    "label": "Public or private school",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "SCHLVOC",
    "label": "Vocational training",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "SCHOOL",
    "label": "School attendance",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SCHOOLSTR",
    "label": "School attendance, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SEA",
    "label": "State Economic Area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SECHOME",
    "label": "Second home",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "SECRES",
    "label": "Second residence status",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "SECRESMO",
    "label": "Months living in second residence",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "SECRESRE",
    "label": "Reason for second residence",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": []
  },
  {
    "name": "SEI",
    "label": "Duncan Socioeconomic Index",
    "type": "P",
    "groups": [
      "Person: Occupational Standing - SES"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SELFWTHH",
    "label": "Self-weighting sample identifier",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "SELFWTSL",
    "label": "Self-weighting sample-line person",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "SERIAL",
    "label": "Household serial number [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SEWAGE",
    "label": "Sewage disposal",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "SEX",
    "label": "Sex",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SEXSTR",
    "label": "Sex, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SFRELATE",
    "label": "Relationship within subfamily",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "SFTYPE",
    "label": "Subfamily type",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "SHOWER",
    "label": "Bathtub or shower",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "SICKNESS",
    "label": "Sickness",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us1880a"
    ]
  },
  {
    "name": "SICKSTR",
    "label": "Sickness, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SINK",
    "label": "Sink with faucet",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SIZEPL",
    "label": "Size of place",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SLAVEHH",
    "label": "Slaves in household",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": []
  },
  {
    "name": "SLAVEHOLDINGS",
    "label": "Number of slave holdings linked to owner",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": []
  },
  {
    "name": "SLAVENUM",
    "label": "Number of slaves linked to owner",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": []
  },
  {
    "name": "SLAVEOWN",
    "label": "Number of slaves owned by owner",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": []
  },
  {
    "name": "SLPERNUM",
    "label": "Sample-line person number",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "SLREC",
    "label": "Sample-line person identifier",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "SLWT",
    "label": "Sample-line weight",
    "type": "P",
    "groups": [
      "Person: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SOLAR",
    "label": "Solar identifier",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SOLDWSEQ",
    "label": "Sequence of dwelling in solar",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SOLHHSEQ",
    "label": "Sequence of household in solar",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SOLRULE",
    "label": "Solares rule",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SOLTOTDW",
    "label": "Number of dwellings in solar",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SOLTOTHH",
    "label": "Number of households in solar",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SOLTOTI",
    "label": "Number of individuals in solar",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SPAN95",
    "label": "Spanish surname, 1950 basis",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1950a"
    ]
  },
  {
    "name": "SPANNAME",
    "label": "Spanish surname",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SPEAKENG",
    "label": "Speaks English",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "SPEAKHAW",
    "label": "Speaks Hawaiian",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "SPEAKSPA",
    "label": "Speaks Spanish, Puerto Rico samples",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": []
  },
  {
    "name": "SPLIT",
    "label": "Large group quarters that was split up (100% datasets)",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SPLITHID",
    "label": "Household serial number, before large group quarters were split up (100% datasets)",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SPLITNUM",
    "label": "Number of person records in household, before large group quarters were split up (100% datasets)",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "SPLOC",
    "label": "Spouse's location in household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SPMCAPHOUS",
    "label": "SPM unit's capped housing subsidy",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMCAPXPNS",
    "label": "SPM unit's capped work and child care expenses",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMCHXPNS",
    "label": "SPM unit's child care expenses",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMCOHABIT",
    "label": "SPM unit has cohabitating couples",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMEITC",
    "label": "SPM unit's Earned Income Tax Credit",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMEQSCALE",
    "label": "Equivalence scale used to adjust reference thresholds",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMFAMUNIT",
    "label": "SPM unit identification number",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMFEDTAXAC",
    "label": "SPM unit's Federal tax",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMFEDTAXBC",
    "label": "SPM unit's Federal tax before refundable tax credits",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMFICA",
    "label": "SPM unit's Federal Insurance Contribution Act and federal retirement contribution",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMFTOTVAL",
    "label": "SPM unit's cash income",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMGEOADJ",
    "label": "SPM unit's geographic shelter and utility adjustment",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMHEAT",
    "label": "SPM unit's energy subsidy",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMLUNCH",
    "label": "SPM unit's school lunch subsidy",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMMEDXPNS",
    "label": "SPM unit's total medical expenses",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMMORT",
    "label": "SPM unit's tenure/mortgage status",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMNADULTS",
    "label": "SPM unit's number of adults",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMNCHILD",
    "label": "SPM unit's number of children",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMNPERS",
    "label": "SPM unit's number of persons",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMPOV",
    "label": "SPM poverty status",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMPREMIUM",
    "label": "SPM unit's health insurance premiums (excluding Medicare Part B premiums)",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMSNAP",
    "label": "SPM unit's Supplemental Nutrition Assistance Program (SNAP) subsidy",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMSTTAX",
    "label": "SPM unit's state tax",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMTHRESH",
    "label": "SPM unit's poverty threshold",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMTOTRES",
    "label": "Total SPM resources for SPM unit",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMUICHILD",
    "label": "SPM unit has an unrelated individual (UI) under 15 years old",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMWIC",
    "label": "SPM unit's Women, Infants, and Children (WIC) subsidy",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPMWKXPNS",
    "label": "SPM unit's work expenses",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "SPRULE",
    "label": "Rule for linking spouse or partner (new)",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "SPRULE_HIST",
    "label": "Rule for linking spouse",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SSENROLL",
    "label": "Social Security enrollment",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "SSMC",
    "label": "Same-sex married couple",
    "type": "H",
    "groups": [
      "Household: Household Composition"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a"
    ]
  },
  {
    "name": "STATEFIP",
    "label": "State (FIPS code)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "STATEICP",
    "label": "State (ICPSR code)",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "STATESTR",
    "label": "State, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "STDCITY",
    "label": "Standardized city, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "STDCNTY",
    "label": "Standardized county, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "STDED",
    "label": "Standardized enumeration district, alphanumeric string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "STDMCD",
    "label": "Standardized minor civil division, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "STDTRACT",
    "label": "Standardized tract, alphabetic string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "STDWARD",
    "label": "Standardized ward, alphanumeric string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "STEPMOM",
    "label": "Probable step/adopted mother",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "STEPPOP",
    "label": "Probable step/adopted father",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "STORIES",
    "label": "Stories in structure",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1980a",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "STOVE",
    "label": "Stove or range",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "STRATA",
    "label": "Household strata for variance estimation [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "STREET",
    "label": "Street address",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "SUBFAM",
    "label": "Subfamily membership",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "SUBS4050",
    "label": "Subsample, 1940 and 1950",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "SUBSAMP",
    "label": "Subsample number",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "SUPDIST",
    "label": "Supervisor's district number",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a"
    ]
  },
  {
    "name": "SURSIM",
    "label": "Surname similarity",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "TAXID",
    "label": "Tax unit ID created for TAXSIM",
    "type": "P",
    "groups": [
      "Person: Supplemental Poverty Measure"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "TAXINCL",
    "label": "Mortgage payment includes property taxes",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "TOILET",
    "label": "Flush toilet",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2011a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "TOILET2",
    "label": "Type and location of toilet facilities",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "TRANTIME",
    "label": "Travel time to work",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "TRANWORK",
    "label": "Means of transportation to work",
    "type": "P",
    "groups": [
      "Person: Place of Work and Travel Time"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "TRIBE",
    "label": "Tribe",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1930a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "TRUCKS",
    "label": "Trucks and vans available",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1980a"
    ]
  },
  {
    "name": "TV",
    "label": "Television set",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "UCLASSWK",
    "label": "Usual class of worker",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "UHF",
    "label": "UHF-equipped television set",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1970c"
    ]
  },
  {
    "name": "UHRSWORK",
    "label": "Usual hours worked per week",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "UIND",
    "label": "Usual industry",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "UINDSTR",
    "label": "Usual industry, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "UNITSADD",
    "label": "Units at address",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "UNITSSTR",
    "label": "Units in structure",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "UOCC",
    "label": "Usual occupation",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "UOCC95",
    "label": "Usual occupation, 1950 classification",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "UOCCSTR",
    "label": "Usual occupation, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "URBAN",
    "label": "Urban/rural status",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1990a",
      "us1960a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "URBAREA",
    "label": "Urbanized area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "URBFRYN",
    "label": "Urban Fringe",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "URBPOP",
    "label": "Population of urban places",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "URBRURAL",
    "label": "Detailed Urban/Rural Classification",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "URBSIZE",
    "label": "Size of urbanized area",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "URBTYPE",
    "label": "Urbanized area type",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": []
  },
  {
    "name": "USACTIV",
    "label": "Main activity in U.S. during stay, Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": []
  },
  {
    "name": "USADURR",
    "label": "Length of last stay in U.S.",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": []
  },
  {
    "name": "USARESID",
    "label": "Residence in the United States for 6 months or more",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": []
  },
  {
    "name": "USAYRRET",
    "label": "Year of return to Puerto Rico from U.S.",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": []
  },
  {
    "name": "UTP",
    "label": "Urban Transition Project Flag",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "VACANCY",
    "label": "Vacancy status",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "VACBOARD",
    "label": "Boarded-up status",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "VACDUR",
    "label": "Duration of vacancy",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "VACELSE",
    "label": "Vacant, usual home elsewhere",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "VACOTH",
    "label": "Other vacancy status",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a"
    ]
  },
  {
    "name": "VALUEH",
    "label": "House value",
    "type": "H",
    "groups": [
      "Household: Economic Characteristic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1940a",
      "us1930a"
    ]
  },
  {
    "name": "VEHICLES",
    "label": "Vehicles available",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "VERIFY",
    "label": "Verified data record",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1950a",
      "us1940a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "VERSIONHIK",
    "label": "Release version for HIK",
    "type": "P",
    "groups": [
      "Person: Linking Tools - MLP"
    ],
    "samples": []
  },
  {
    "name": "VERSIONHIST",
    "label": "Release version for historical full counts [preselected]",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "VET01LTR",
    "label": "Veteran, served 2001 or later",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "VET1930",
    "label": "Veteran Status, 1930",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us1930a"
    ]
  },
  {
    "name": "VET1940",
    "label": "Veteran status, 1940",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "VET41X55",
    "label": "Veteran, served 1941 to 1955",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a"
    ]
  },
  {
    "name": "VET47X50",
    "label": "Veteran, served 1947 to 1950",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "VET55X64",
    "label": "Veteran, served 1955 to 1964",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "VET75X80",
    "label": "Veteran, served 1975 to 1980",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "VET75X90",
    "label": "Veteran, served 1975 to 1990",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a"
    ]
  },
  {
    "name": "VET80X90",
    "label": "Veteran, served 1980 to 1990",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "VET90X01",
    "label": "Veteran, served 1990 to 2001",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a"
    ]
  },
  {
    "name": "VET90X95",
    "label": "Veteran, served 1990 to 1995",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "VET95X00",
    "label": "Veteran, served 1995 to 2000",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2000a"
    ]
  },
  {
    "name": "VETCHILD",
    "label": "Mortality status of child's veteran father",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "VETCIVWR",
    "label": "Veteran of the Civil War",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us1910a"
    ]
  },
  {
    "name": "VETDISAB",
    "label": "VA service-connected disability rating",
    "type": "P",
    "groups": [
      "Person: Disability"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "VETKOREA",
    "label": "Veteran, served during Korean conflict era",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "VETOTHER",
    "label": "Veteran of other period",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "VETPER",
    "label": "Veteran period of service, 1940",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "VETSTAT",
    "label": "Veteran status",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "VETVIETN",
    "label": "Veteran, served during Vietnam era",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d"
    ]
  },
  {
    "name": "VETWWI",
    "label": "Veteran, served during WWI era",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "VETWWII",
    "label": "Veteran, served during WWII era",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a",
      "us1950a"
    ]
  },
  {
    "name": "VETYRS",
    "label": "Years of active-duty military service",
    "type": "P",
    "groups": [
      "Person: Veteran Status"
    ],
    "samples": [
      "us2006a",
      "us2000a",
      "us1990a"
    ]
  },
  {
    "name": "VOCSCTYP",
    "label": "Type of vocational school, Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": []
  },
  {
    "name": "VOCTRAIN",
    "label": "Completion of vocational training, Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": []
  },
  {
    "name": "VOCTRTYP",
    "label": "Main field of vocational training, Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Education"
    ],
    "samples": []
  },
  {
    "name": "VOTE",
    "label": "Denied the vote",
    "type": "P",
    "groups": [
      "Person: Other"
    ],
    "samples": [
      "us1870a"
    ]
  },
  {
    "name": "VOTESTR",
    "label": "Denied the vote, alphabetic string",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "WARD",
    "label": "Ward",
    "type": "H",
    "groups": [
      "Household: Geographic"
    ],
    "samples": [
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1870a",
      "us1860a"
    ]
  },
  {
    "name": "WARDSTR",
    "label": "Ward, alphanumeric string",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": [
      "us1940a"
    ]
  },
  {
    "name": "WASHER",
    "label": "Clothes washing machine",
    "type": "H",
    "groups": [
      "Household: Appliances, Mechanical, Other"
    ],
    "samples": [
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "WATERSRC",
    "label": "Source of water",
    "type": "H",
    "groups": [
      "Household: Dwelling Characteristic"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1970d",
      "us1960a"
    ]
  },
  {
    "name": "WIDINYR",
    "label": "Widowed in the past year",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "WIDOW",
    "label": "Marriage ended by death",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us1980a",
      "us1970c"
    ]
  },
  {
    "name": "WIFENO",
    "label": "Wife number, alternate 1910 linking variable",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "WIFLKREA",
    "label": "Reason for wife link, alternate 1910 linking variable",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "WIFLNKWT",
    "label": "Weight of wife link, alternate 1910 linking variable",
    "type": "P",
    "groups": [
      "Person: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "WKSUNEMP",
    "label": "Weeks unemployed last year",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1980a",
      "us1930a",
      "us1910a"
    ]
  },
  {
    "name": "WKSWORK1",
    "label": "Weeks worked last year",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "WKSWORK2",
    "label": "Weeks worked last year, intervalled",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a"
    ]
  },
  {
    "name": "WORK5YR",
    "label": "Working 5 years ago",
    "type": "P",
    "groups": [
      "Person: Activity Five Years Ago"
    ],
    "samples": [
      "us1980a",
      "us1970d",
      "us1970c"
    ]
  },
  {
    "name": "WORKEDYR",
    "label": "Worked last year",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "WRKLSTWK",
    "label": "Worked last week",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us1990a"
    ]
  },
  {
    "name": "WRKRECAL",
    "label": "Informed of work recall",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a"
    ]
  },
  {
    "name": "XGPS",
    "label": "Longitude (X coordinate) - Urban Transition Project",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "YEAR",
    "label": "Census year [preselected]",
    "type": "H",
    "groups": [
      "Household: Technical"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "YGPS",
    "label": "Latitude (Y coordinate) - Urban Transition Project",
    "type": "H",
    "groups": [
      "Household: Historical Technical"
    ],
    "samples": []
  },
  {
    "name": "YNGCH",
    "label": "Age of youngest own child in household",
    "type": "P",
    "groups": [
      "Person: Family Interrelationship"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a",
      "us1950a",
      "us1940a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a",
      "us1880a",
      "us1870a",
      "us1860a",
      "us1850a"
    ]
  },
  {
    "name": "YRAK",
    "label": "Year of migration to Alaska",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1900a"
    ]
  },
  {
    "name": "YRIMMIG",
    "label": "Year of immigration",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970c",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "YRIMMIHI",
    "label": "Year of migration to Hawaii",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "YRIMMIPR",
    "label": "Year of immigration to Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": []
  },
  {
    "name": "YRLASTWK",
    "label": "Year last worked",
    "type": "P",
    "groups": [
      "Person: Work"
    ],
    "samples": [
      "us1990a",
      "us1980a",
      "us1970d",
      "us1970c",
      "us1960a"
    ]
  },
  {
    "name": "YRMARR",
    "label": "Year married",
    "type": "P",
    "groups": [
      "Person: Demographic"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a"
    ]
  },
  {
    "name": "YRNATUR",
    "label": "Year naturalized",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us1920a"
    ]
  },
  {
    "name": "YRSHI",
    "label": "Years in Hawaii",
    "type": "P",
    "groups": [
      "Person: Historical Oversample"
    ],
    "samples": [
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "YRSPR",
    "label": "Years in Puerto Rico",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": []
  },
  {
    "name": "YRSPR2",
    "label": "Year of immigration to Puerto Rico (intervalled)",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": []
  },
  {
    "name": "YRSUSA1",
    "label": "Years in the United States",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  },
  {
    "name": "YRSUSA2",
    "label": "Years in the United States, intervalled",
    "type": "P",
    "groups": [
      "Person: Race, Ethnicity, and Nativity"
    ],
    "samples": [
      "us2024a",
      "us2023a",
      "us2022a",
      "us2021a",
      "us2016a",
      "us2011a",
      "us2006a",
      "us2000a",
      "us1990a",
      "us1980a",
      "us1970c",
      "us1930a",
      "us1920a",
      "us1910a",
      "us1900a"
    ]
  }
];

export function searchVariables(
  query: string,
  opts?: { type?: "H" | "P"; group?: string; sample?: string }
): UsaVariable[] {
  const q = query.toLowerCase();
  return USA_VARIABLES.filter(v => {
    if (opts?.type && v.type !== opts.type) return false;
    if (opts?.group && !v.groups.some(g => g.toLowerCase().includes(opts.group!.toLowerCase()))) return false;
    if (opts?.sample && !v.samples.includes(opts.sample)) return false;
    return v.name.toLowerCase().includes(q) || v.label.toLowerCase().includes(q);
  });
}