export interface ClientData {
    _id?: { $oid: string };
    name?: string;
    email?: string;
    phone?: string;
    fb?: string;
  }
  
  export interface LocationDescription {
    title?: string;
    ul?: string[];
    _id?: { $oid: string };
  }
  
  export interface ProjectData {
    _id?: { $oid: string };
    projectUrl?: string;
    projectImg?: string;
    projectLocation?: string;
    title?: string;
    description?: string;
    location?: {
      locationText?: string;
      descriptions?: LocationDescription[];
      img?: string;
    };
    amenitiesFacilities?: {
      description?: string;
      ul?: string[];
      imgs?: string[];
    };
    unitDetails: {
      text?: string;
      details?: Array<{
        title?: string;
        ul?: string[];
        imgs?: string[];
        _id?: { $oid: string };
      }>;
    };
    buildingFeatures?: {
      text?: string;
      details?: Array<{
        title?: string;
        ul?: string[];
        _id?: { $oid: string };
      }>;
    };
    unitDeliverable?: {
      text?: string;
      ul?: string[];
      imgs?: string[];
    };
    floorPlan?: string[];
    siteUpdate?: {
      title: string;
      imgs: string[];
    };
  }