export type Complaint = {
  complaint: string;
  createdAt: Date;
  id: string;
  typeField?: "Electrical" | "Plumbing" | "Furniture";
  updatedAt: Date;
};
