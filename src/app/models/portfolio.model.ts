export interface Skill {
  _id?:   string;
  icon:   string;
  name:   string;
  tags:   string[];
}

export interface Experience {
  _id?:     string;
  company:  string;
  role:     string;
  location: string;
  period:   string;
  open:     boolean;
  bullets:  string[];
  tech:     string[];
}

export interface Education {
  _id?:     string;
  badge:    string;
  degree:   string;
  school:   string;
  location: string;
  year:     string;
}

export interface Certification {
  _id?:   string;
  icon:   string;
  name:   string;
  issuer: string;
  year:   string;
}
