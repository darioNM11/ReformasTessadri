export interface ProjectChange {
  id: string;
  title: string;
  category: "performance" | "ui-ux" | "architecture" | "seo" | "other";
  description: string;
  impact: string;
}

export interface ProjectMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  isPositive: boolean;
}

export interface ProjectStep {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  extendedDescription: string;
  client: string;
  date: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  metrics: ProjectMetric[];
  changes: ProjectChange[];
  steps: ProjectStep[];
}
