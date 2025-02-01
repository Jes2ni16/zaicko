export interface LocationDescription {
  title: string;
  ul: string[];
}

export interface UnitDetail {
  title: string;
  ul: string[];
  imgs: string[];
}

export interface Property {
  projectUrl: string;
  projectImg: string;
  projectLocation: string;
  title: string;
  description: string;
  location: {
    locationText: string;
    descriptions: LocationDescription[];
    img: string;
  };
  projectDetails: {
    ul: string[];
    imgs: string[];
  };
  amenitiesFacilities: {
    description: string;
    ul: string[];
    imgs: string[];
  };
  unitDetails: {
    text: string;
    details: UnitDetail[];
  };
  unitDeliverable: {
    text: string;
    ul: string[];
    imgs: string[];
  };
  siteUpdate: {
    title: string;
    imgs: string[];
  };
}