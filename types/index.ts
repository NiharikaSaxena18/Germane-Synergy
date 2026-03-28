export interface Order {
  id: string;
  customer: string;
  status: 'pending' | 'completed';
  total: number;
  items: any[];
  notes?: string;
  quote?: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed';
}

export interface Job {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'closed';
}

export interface PageContent {
  hero: string;
  about: string;
  services: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin';
}