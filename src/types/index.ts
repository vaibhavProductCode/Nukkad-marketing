export interface NavItem {
  label: string;
  href: string;
}

export interface Festival {
  id: string;
  name: string;
  nameHi: string;
  date: string;
  daysAway: number;
  type: "national" | "regional" | "hyperlocal";
  relevanceScore: number;
  suggestedPosts: number;
  postsCreated: number;
  palette: string[];
  businessTypes: string[];
}

export type PostStatus = "draft" | "approved" | "scheduled" | "sent" | "missed";
export type ContactSegment = "champion" | "loyal" | "at_risk" | "new" | "hibernating" | "birthday";

export interface Post {
  id: string;
  festivalName?: string;
  caption: string;
  captionHi: string;
  platform: "instagram" | "whatsapp" | "facebook";
  status: PostStatus;
  scheduledAt?: string;
  imageColor: string;
}

export interface Contact {
  id: string;
  name: string;
  phoneLast4: string;
  segment: ContactSegment;
  lastOrderAt: string;
  lastContactedAt: string;
  orderCount: number;
  purchaseCategories: string[];
  hasBirthday?: boolean;
  birthdayDate?: string;
  optedInBroadcast: boolean;
}

export type PlanTier = "free" | "starter" | "growth";

export interface BusinessProfile {
  businessName: string;
  businessType: string;
  city: string;
  state: string;
  languagePref: string;
  instagramHandle?: string;
  brandColorPrimary: string;
  planTier: PlanTier;
}

