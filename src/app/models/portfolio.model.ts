export interface Skill {
  icon: string;
  name: string;
  tags: string[];
}

export interface Experience {
  company:  string;
  role:     string;
  location: string;
  period:   string;
  open:     boolean;
  bullets:  string[];
  tech:     string[];
}

export interface Education {
  badge:    string;
  degree:   string;
  school:   string;
  location: string;
  year:     string;
}

export interface Certification {
  icon:   string;
  name:   string;
  issuer: string;
  year:   string;
}
